import React, { useState, useMemo, useCallback } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  Paper,
  Checkbox,
  IconButton,
  Toolbar,
  Typography,
  Tooltip,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
  Chip,
  Stack,
  Button,
  CircularProgress,
  Alert,
  Fade,
  alpha,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Visibility as ViewIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  Download as DownloadIcon,
  MoreVert as MoreVertIcon,
  Add as AddIcon,
  Refresh as RefreshIcon,
} from "@mui/icons-material";
import { visuallyHidden } from "@mui/utils";

// Types
export interface Column<T = any> {
  id: string;
  label: string;
  numeric?: boolean;
  width?: string | number;
  align?: "left" | "center" | "right";
  format?: (value: any, row: T) => React.ReactNode;
  sortable?: boolean;
  filterable?: boolean;
  hidden?: boolean;
}

export interface DataTableProps<T = any> {
  columns: Column<T>[];
  data: T[];
  title?: string;
  loading?: boolean;
  error?: string | null;
  // Selection
  selectable?: boolean;
  onSelectionChange?: (selected: T[]) => void;
  // Actions
  actions?: {
    onView?: (row: T) => void;
    onEdit?: (row: T) => void;
    onDelete?: (row: T) => void;
    custom?: Array<{
      icon: React.ReactNode;
      label: string;
      onClick: (row: T) => void;
      color?:
        | "inherit"
        | "primary"
        | "secondary"
        | "error"
        | "info"
        | "success"
        | "warning";
    }>;
  };
  // Bulk actions
  bulkActions?: Array<{
    icon: React.ReactNode;
    label: string;
    onClick: (selected: T[]) => void;
    color?:
      | "inherit"
      | "primary"
      | "secondary"
      | "error"
      | "info"
      | "success"
      | "warning";
  }>;
  // Toolbar actions
  toolbarActions?: Array<{
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    color?:
      | "inherit"
      | "primary"
      | "secondary"
      | "error"
      | "info"
      | "success"
      | "warning";
  }>;
  // Features
  searchable?: boolean;
  exportable?: boolean;
  refreshable?: boolean;
  onRefresh?: () => void;
  // Pagination
  pagination?: boolean;
  rowsPerPageOptions?: number[];
  defaultRowsPerPage?: number;
  // Styling
  dense?: boolean;
  stickyHeader?: boolean;
  maxHeight?: string | number;
  // Row customization
  getRowId?: (row: T) => string | number;
  isRowSelectable?: (row: T) => boolean;
  getRowClassName?: (row: T) => string;
  // Empty state
  emptyMessage?: string;
  emptyAction?: {
    label: string;
    onClick: () => void;
  };
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number): T[] {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// Enhanced Toolbar Component
interface EnhancedTableToolbarProps<T> {
  numSelected: number;
  title?: string;
  onSearch?: (value: string) => void;
  searchable?: boolean;
  bulkActions?: DataTableProps<T>["bulkActions"];
  toolbarActions?: DataTableProps<T>["toolbarActions"];
  selected: T[];
  exportable?: boolean;
  onExport?: () => void;
  refreshable?: boolean;
  onRefresh?: () => void;
}

function EnhancedTableToolbar<T>(props: EnhancedTableToolbarProps<T>) {
  const {
    numSelected,
    title,
    onSearch,
    searchable,
    bulkActions,
    toolbarActions,
    selected,
    exportable,
    onExport,
    refreshable,
    onRefresh,
  } = props;

  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    onSearch?.(value);
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <>
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            {title}
          </Typography>
          {searchable && (
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ mr: 2, minWidth: 200 }}
            />
          )}
        </>
      )}

      {numSelected > 0 && bulkActions ? (
        <Stack direction="row" spacing={1}>
          {bulkActions.map((action, index) => (
            <Tooltip key={index} title={action.label}>
              <IconButton
                color={action.color || "primary"}
                onClick={() => action.onClick(selected)}
              >
                {action.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Stack>
      ) : (
        <Stack direction="row" spacing={1}>
          {toolbarActions?.map((action, index) => (
            <Tooltip key={index} title={action.label}>
              <IconButton
                color={action.color || "default"}
                onClick={action.onClick}
              >
                {action.icon}
              </IconButton>
            </Tooltip>
          ))}
          {exportable && (
            <Tooltip title="Export">
              <IconButton onClick={onExport}>
                <DownloadIcon />
              </IconButton>
            </Tooltip>
          )}
          {refreshable && (
            <Tooltip title="Refresh">
              <IconButton onClick={onRefresh}>
                <RefreshIcon />
              </IconButton>
            </Tooltip>
          )}
        </Stack>
      )}
    </Toolbar>
  );
}

// Main DataTable Component
export function DataTable<T extends Record<string, any>>({
  columns,
  data,
  title,
  loading = false,
  error = null,
  selectable = false,
  onSelectionChange,
  actions,
  bulkActions,
  toolbarActions,
  searchable = true,
  exportable = false,
  refreshable = false,
  onRefresh,
  pagination = true,
  rowsPerPageOptions = [5, 10, 25, 50, 100],
  defaultRowsPerPage = 10,
  dense = false,
  stickyHeader = true,
  maxHeight = "600px",
  getRowId = (row) => row.id,
  isRowSelectable = () => true,
  getRowClassName,
  emptyMessage = "No data available",
  emptyAction,
}: DataTableProps<T>) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<string>("");
  const [selected, setSelected] = useState<(string | number)[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuRow, setMenuRow] = useState<T | null>(null);

  // Filter data based on search query
  const filteredData = useMemo(() => {
    if (!searchQuery) return data;

    return data.filter((row) => {
      return columns.some((column) => {
        if (column.hidden || column.filterable === false) return false;
        const value = row[column.id];
        if (value == null) return false;
        return value
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      });
    });
  }, [data, searchQuery, columns]);

  // Sort data
  const sortedData = useMemo(() => {
    if (!orderBy) return filteredData;
    return stableSort([...filteredData], getComparator(order, orderBy));
  }, [filteredData, order, orderBy]);

  // Paginate data
  // Explicitly typed paginatedData
  const paginatedData: T[] = useMemo(() => {
    if (!pagination) return sortedData as T[];
    return sortedData.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    ) as T[];
  }, [sortedData, page, rowsPerPage, pagination]);

  // Handlers
  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const selectableRows = (paginatedData as T[]).filter((row: T) =>
        isRowSelectable(row)
      );
      const newSelected = selectableRows.map((row: T) => getRowId(row));
      setSelected(newSelected);
      onSelectionChange?.(selectableRows);
      return;
    }
    setSelected([]);
    onSelectionChange?.([]);
  };

  const handleClick = (row: T) => {
    if (!selectable || !isRowSelectable(row)) return;

    const id = getRowId(row);
    const selectedIndex = selected.indexOf(id);
    let newSelected: (string | number)[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
    const selectedRows = data.filter((row) =>
      newSelected.includes(getRowId(row))
    );
    onSelectionChange?.(selectedRows);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, row: T) => {
    setAnchorEl(event.currentTarget);
    setMenuRow(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuRow(null);
  };

  const handleExport = () => {
    // Convert data to CSV
    const headers = columns
      .filter((col) => !col.hidden)
      .map((col) => col.label)
      .join(",");
    const rows = filteredData
      .map((row) => {
        return columns
          .filter((col) => !col.hidden)
          .map((col) => {
            const value = row[col.id];
            // Handle values that might contain commas
            return typeof value === "string" && value.includes(",")
              ? `"${value}"`
              : value;
          })
          .join(",");
      })
      .join("\n");

    const csv = `${headers}\n${rows}`;
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title || "data"}_${
      new Date().toISOString().split("T")[0]
    }.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const isSelected = (id: string | number) => selected.indexOf(id) !== -1;
  const selectedRows = data.filter((row) => selected.includes(getRowId(row)));

  // Render loading state
  if (loading) {
    return (
      <Paper sx={{ width: "100%", p: 3 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight={200}
        >
          <CircularProgress />
        </Box>
      </Paper>
    );
  }

  // Render error state
  if (error) {
    return (
      <Paper sx={{ width: "100%", p: 3 }}>
        <Alert
          severity="error"
          action={
            refreshable && (
              <Button color="inherit" size="small" onClick={onRefresh}>
                Retry
              </Button>
            )
          }
        >
          {error}
        </Alert>
      </Paper>
    );
  }

  // Render empty state
  if (data.length === 0) {
    return (
      <Paper sx={{ width: "100%", p: 3 }}>
        <Box textAlign="center" py={5}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {emptyMessage}
          </Typography>
          {emptyAction && (
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={emptyAction.onClick}
              sx={{ mt: 2 }}
            >
              {emptyAction.label}
            </Button>
          )}
        </Box>
      </Paper>
    );
  }

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <EnhancedTableToolbar
        numSelected={selected.length}
        title={title}
        onSearch={searchable && !isMobile ? setSearchQuery : undefined}
        searchable={searchable && !isMobile}
        bulkActions={bulkActions}
        toolbarActions={toolbarActions}
        selected={selectedRows}
        exportable={exportable}
        onExport={handleExport}
        refreshable={refreshable}
        onRefresh={onRefresh}
      />
      <TableContainer sx={{ maxHeight: maxHeight, overflowX: "auto" }}>
        <Table
          stickyHeader={stickyHeader}
          size={dense || isMobile ? "small" : "medium"}
          aria-labelledby="tableTitle"
          sx={{ minWidth: isMobile ? 300 : 650 }}
        >
          <TableHead>
            <TableRow>
              {selectable && (
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    indeterminate={
                      selected.length > 0 &&
                      selected.length < paginatedData.length
                    }
                    checked={
                      paginatedData.length > 0 &&
                      selected.length === paginatedData.length
                    }
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
              )}
              {columns
                .filter((col) => !col.hidden)
                .map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align || (column.numeric ? "right" : "left")}
                    style={{ width: column.width }}
                    sortDirection={orderBy === column.id ? order : false}
                  >
                    {column.sortable !== false ? (
                      <TableSortLabel
                        active={orderBy === column.id}
                        direction={orderBy === column.id ? order : "asc"}
                        onClick={() => handleRequestSort(column.id)}
                      >
                        {column.label}
                        {orderBy === column.id ? (
                          <Box component="span" sx={visuallyHidden}>
                            {order === "desc"
                              ? "sorted descending"
                              : "sorted ascending"}
                          </Box>
                        ) : null}
                      </TableSortLabel>
                    ) : (
                      column.label
                    )}
                  </TableCell>
                ))}
              {actions && <TableCell align="right">Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {(paginatedData as T[]).map((row: T, index: number) => {
              const rowId = getRowId(row);
              const isItemSelected = isSelected(rowId);
              const labelId = `enhanced-table-checkbox-${index}`;
              const rowClassName = getRowClassName?.(row);

              return (
                <Fade
                  in
                  key={rowId}
                  timeout={300}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    selected={isItemSelected}
                    className={rowClassName}
                    sx={{ cursor: selectable ? "pointer" : "default" }}
                  >
                    {selectable && (
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          onChange={() => handleClick(row)}
                          disabled={!isRowSelectable(row)}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                    )}
                    {columns
                      .filter((col) => !col.hidden)
                      .map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={
                              column.align ||
                              (column.numeric ? "right" : "left")
                            }
                          >
                            {column.format ? column.format(value, row) : value}
                          </TableCell>
                        );
                      })}
                    {actions && (
                      <TableCell align="right">
                        <Stack
                          direction="row"
                          spacing={1}
                          justifyContent="flex-end"
                        >
                          {actions.onView && (
                            <Tooltip title="View">
                              <IconButton
                                size="small"
                                onClick={() => actions.onView!(row)}
                              >
                                <ViewIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          )}
                          {actions.onEdit && (
                            <Tooltip title="Edit">
                              <IconButton
                                size="small"
                                onClick={() => actions.onEdit!(row)}
                              >
                                <EditIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          )}
                          {actions.onDelete && (
                            <Tooltip title="Delete">
                              <IconButton
                                size="small"
                                onClick={() => actions.onDelete!(row)}
                                color="error"
                              >
                                <DeleteIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          )}
                          {actions.custom && actions.custom.length > 0 && (
                            <>
                              <IconButton
                                size="small"
                                onClick={(e) => handleMenuClick(e, row)}
                              >
                                <MoreVertIcon fontSize="small" />
                              </IconButton>
                              <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl) && menuRow === row}
                                onClose={handleMenuClose}
                              >
                                {actions.custom.map((action, index) => (
                                  <MenuItem
                                    key={index}
                                    onClick={() => {
                                      action.onClick(row);
                                      handleMenuClose();
                                    }}
                                  >
                                    <Stack
                                      direction="row"
                                      spacing={1}
                                      alignItems="center"
                                    >
                                      {action.icon}
                                      <Typography>{action.label}</Typography>
                                    </Stack>
                                  </MenuItem>
                                ))}
                              </Menu>
                            </>
                          )}
                        </Stack>
                      </TableCell>
                    )}
                  </TableRow>
                </Fade>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {pagination && (
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
}
