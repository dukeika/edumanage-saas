import React, { useState, useCallback, useEffect } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Paper,
  Popper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Chip,
  Box,
  CircularProgress,
} from "@mui/material";
import {
  Search as SearchIcon,
  Clear as ClearIcon,
  History as HistoryIcon,
  TrendingUp as TrendingIcon,
} from "@mui/icons-material";
import { debounce } from "lodash";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  suggestions?: string[];
  recentSearches?: string[];
  trending?: string[];
  loading?: boolean;
  fullWidth?: boolean;
  size?: "small" | "medium";
  variant?: "outlined" | "filled" | "standard";
  autoFocus?: boolean;
  clearable?: boolean;
  showSuggestions?: boolean;
  onSuggestionClick?: (suggestion: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  onSearch,
  suggestions = [],
  recentSearches = [],
  trending = [],
  loading = false,
  fullWidth = false,
  size = "medium",
  variant = "outlined",
  autoFocus = false,
  clearable = true,
  showSuggestions = true,
  onSuggestionClick,
}) => {
  const [query, setQuery] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [focused, setFocused] = useState(false);

  // Debounced search
  const debouncedSearch = useCallback(
    debounce((searchQuery: string) => {
      onSearch(searchQuery);
    }, 300),
    [onSearch]
  );

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    setAnchorEl(event.currentTarget);
  };

  const handleBlur = () => {
    // Delay to allow click on suggestions
    setTimeout(() => {
      setFocused(false);
      setAnchorEl(null);
    }, 200);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    onSearch(suggestion);
    onSuggestionClick?.(suggestion);
    setFocused(false);
    setAnchorEl(null);
  };

  const showPopper =
    focused &&
    showSuggestions &&
    (suggestions.length > 0 ||
      recentSearches.length > 0 ||
      trending.length > 0);

  return (
    <>
      <TextField
        value={query}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        fullWidth={fullWidth}
        size={size}
        variant={variant}
        autoFocus={autoFocus}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {loading ? <CircularProgress size={20} /> : <SearchIcon />}
            </InputAdornment>
          ),
          endAdornment: clearable && query && (
            <InputAdornment position="end">
              <IconButton size="small" onClick={handleClear} edge="end">
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Popper
        open={showPopper}
        anchorEl={anchorEl}
        placement="bottom-start"
        style={{ zIndex: 1300, width: anchorEl?.clientWidth }}
      >
        <Paper elevation={3} sx={{ mt: 1, maxHeight: 400, overflow: "auto" }}>
          {query && suggestions.length > 0 && (
            <>
              <Typography
                variant="caption"
                sx={{ px: 2, pt: 1, display: "block", color: "text.secondary" }}
              >
                Suggestions
              </Typography>
              <List dense>
                {suggestions.map((suggestion, index) => (
                  <ListItem
                    key={index}
                    button
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <ListItemIcon>
                      <SearchIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={suggestion} />
                  </ListItem>
                ))}
              </List>
            </>
          )}

          {!query && recentSearches.length > 0 && (
            <>
              <Typography
                variant="caption"
                sx={{ px: 2, pt: 1, display: "block", color: "text.secondary" }}
              >
                Recent Searches
              </Typography>
              <List dense>
                {recentSearches.map((search, index) => (
                  <ListItem
                    key={index}
                    button
                    onClick={() => handleSuggestionClick(search)}
                  >
                    <ListItemIcon>
                      <HistoryIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={search} />
                  </ListItem>
                ))}
              </List>
            </>
          )}

          {!query && trending.length > 0 && (
            <>
              <Typography
                variant="caption"
                sx={{ px: 2, pt: 1, display: "block", color: "text.secondary" }}
              >
                Trending
              </Typography>
              <List dense>
                {trending.map((trend, index) => (
                  <ListItem
                    key={index}
                    button
                    onClick={() => handleSuggestionClick(trend)}
                  >
                    <ListItemIcon>
                      <TrendingIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={trend} />
                    <Chip label="Hot" size="small" color="error" />
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </Paper>
      </Popper>
    </>
  );
};
