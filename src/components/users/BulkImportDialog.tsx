import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Alert,
  Stepper,
  Step,
  StepLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  CloudUpload as UploadIcon,
  Download as DownloadIcon,
  CheckCircle as CheckIcon,
  Error as ErrorIcon,
  Warning as WarningIcon,
  Close as CloseIcon,
  Description as FileIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import Papa from "papaparse";

interface BulkImportDialogProps {
  open: boolean;
  onClose: () => void;
  onImport: (data: any[]) => void;
  type: "teachers" | "students" | "parents";
}

interface ImportError {
  row: number;
  field: string;
  message: string;
}

const BulkImportDialog: React.FC<BulkImportDialogProps> = ({
  open,
  onClose,
  onImport,
  type,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [parsedData, setParsedData] = useState<any[]>([]);
  const [errors, setErrors] = useState<ImportError[]>([]);
  const [processing, setProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const steps = ["Upload File", "Validate Data", "Confirm Import"];

  const getTemplate = () => {
    switch (type) {
      case "teachers":
        return {
          headers: [
            "Name",
            "Email",
            "Phone",
            "Subjects",
            "Classes",
            "Qualifications",
          ],
          sample: [
            [
              "John Doe",
              "john@school.com",
              "+234 801 234 5678",
              "Mathematics, Physics",
              "JSS 1A, JSS 2B",
              "B.Sc Mathematics",
            ],
            [
              "Jane Smith",
              "jane@school.com",
              "+234 802 345 6789",
              "English, Literature",
              "Primary 5, Primary 6",
              "B.A English, PGDE",
            ],
          ],
        };
      case "students":
        return {
          headers: [
            "Name",
            "Email",
            "Class",
            "Parent Email",
            "Date of Birth",
            "Address",
          ],
          sample: [
            [
              "Alice Johnson",
              "alice@school.com",
              "JSS 1A",
              "parent1@email.com",
              "2010-05-15",
              "123 Main Street",
            ],
            [
              "Bob Williams",
              "bob@school.com",
              "JSS 2B",
              "parent2@email.com",
              "2009-08-20",
              "456 Oak Avenue",
            ],
          ],
        };
      case "parents":
        return {
          headers: [
            "Name",
            "Email",
            "Phone",
            "Children Names",
            "Address",
            "Occupation",
          ],
          sample: [
            [
              "Mr. Johnson",
              "parent1@email.com",
              "+234 803 456 7890",
              "Alice Johnson, Bob Johnson",
              "123 Main Street",
              "Engineer",
            ],
            [
              "Mrs. Williams",
              "parent2@email.com",
              "+234 804 567 8901",
              "Carol Williams",
              "456 Oak Avenue",
              "Teacher",
            ],
          ],
        };
      default:
        return { headers: [], sample: [] };
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (
        selectedFile.type !== "text/csv" &&
        !selectedFile.name.endsWith(".csv")
      ) {
        setErrors([
          { row: 0, field: "file", message: "Please upload a CSV file" },
        ]);
        return;
      }
      setFile(selectedFile);
      parseCSV(selectedFile);
    }
  };

  const parseCSV = (file: File) => {
    setProcessing(true);
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        validateData(results.data);
        setParsedData(results.data);
        setProcessing(false);
        if (results.data.length > 0) {
          setActiveStep(1);
        }
      },
      error: (error) => {
        setErrors([{ row: 0, field: "parse", message: error.message }]);
        setProcessing(false);
      },
    });
  };

  const validateData = (data: any[]) => {
    const validationErrors: ImportError[] = [];
    const template = getTemplate();

    data.forEach((row, index) => {
      // Check required fields based on type
      if (type === "teachers") {
        if (!row.Name?.trim()) {
          validationErrors.push({
            row: index + 2, // +2 because row 1 is headers
            field: "Name",
            message: "Name is required",
          });
        }
        if (!row.Email?.trim()) {
          validationErrors.push({
            row: index + 2,
            field: "Email",
            message: "Email is required",
          });
        } else if (!/\S+@\S+\.\S+/.test(row.Email)) {
          validationErrors.push({
            row: index + 2,
            field: "Email",
            message: "Invalid email format",
          });
        }
        if (!row.Subjects?.trim()) {
          validationErrors.push({
            row: index + 2,
            field: "Subjects",
            message: "At least one subject is required",
          });
        }
      }
      // Add similar validation for students and parents
    });

    setErrors(validationErrors);
  };

  const handleDownloadTemplate = () => {
    const template = getTemplate();
    const csvContent = [
      template.headers.join(","),
      ...template.sample.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${type}_import_template.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    if (errors.length > 0) {
      return;
    }
    setActiveStep(2);
    setProcessing(true);

    // Simulate processing
    setTimeout(() => {
      onImport(parsedData);
      setProcessing(false);
    }, 1500);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFile(null);
    setParsedData([]);
    setErrors([]);
    setProcessing(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box>
            <Alert severity="info" sx={{ mb: 3 }}>
              Download the template file, fill it with your data, and upload it
              back. Make sure to follow the exact format shown in the template.
            </Alert>

            <Box textAlign="center" py={3}>
              <Button
                variant="outlined"
                startIcon={<DownloadIcon />}
                onClick={handleDownloadTemplate}
                sx={{ mb: 3 }}
              >
                Download CSV Template
              </Button>

              <Divider sx={{ my: 3 }}>OR</Divider>

              <input
                ref={fileInputRef}
                type="file"
                accept=".csv"
                onChange={handleFileSelect}
                style={{ display: "none" }}
                id="csv-file-input"
              />
              <label htmlFor="csv-file-input">
                <Button
                  variant="contained"
                  component="span"
                  startIcon={<UploadIcon />}
                  size="large"
                >
                  Upload CSV File
                </Button>
              </label>

              {file && (
                <Box mt={2}>
                  <Chip
                    icon={<FileIcon />}
                    label={file.name}
                    onDelete={() => {
                      setFile(null);
                      setParsedData([]);
                      if (fileInputRef.current) {
                        fileInputRef.current.value = "";
                      }
                    }}
                  />
                </Box>
              )}
            </Box>

            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Template Format:
            </Typography>
            <TableContainer component={Paper} variant="outlined">
              <Table size="small">
                <TableHead>
                  <TableRow>
                    {getTemplate().headers.map((header) => (
                      <TableCell key={header}>{header}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {getTemplate().sample.map((row, index) => (
                    <TableRow key={index}>
                      {row.map((cell, cellIndex) => (
                        <TableCell key={cellIndex}>{cell}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        );

      case 1:
        return (
          <Box>
            {errors.length > 0 ? (
              <>
                <Alert severity="error" sx={{ mb: 2 }}>
                  Found {errors.length} error(s) in your data. Please fix them
                  and try again.
                </Alert>
                <List dense>
                  {errors.slice(0, 10).map((error, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <ErrorIcon color="error" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primary={`Row ${error.row}, ${error.field}`}
                        secondary={error.message}
                      />
                    </ListItem>
                  ))}
                  {errors.length > 10 && (
                    <ListItem>
                      <ListItemText
                        secondary={`... and ${errors.length - 10} more errors`}
                      />
                    </ListItem>
                  )}
                </List>
              </>
            ) : (
              <>
                <Alert severity="success" sx={{ mb: 2 }}>
                  <strong>Validation successful!</strong> Found{" "}
                  {parsedData.length} valid {type} to import.
                </Alert>
                <Typography variant="subtitle2" gutterBottom>
                  Preview (first 5 records):
                </Typography>
                <TableContainer
                  component={Paper}
                  variant="outlined"
                  sx={{ maxHeight: 300 }}
                >
                  <Table size="small" stickyHeader>
                    <TableHead>
                      <TableRow>
                        {parsedData.length > 0 &&
                          Object.keys(parsedData[0]).map((key) => (
                            <TableCell key={key}>{key}</TableCell>
                          ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {parsedData.slice(0, 5).map((row, index) => (
                        <TableRow key={index}>
                          {Object.values(row).map((value: any, cellIndex) => (
                            <TableCell key={cellIndex}>{value}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )}
          </Box>
        );

      case 2:
        return (
          <Box textAlign="center" py={3}>
            {processing ? (
              <>
                <LinearProgress sx={{ mb: 3 }} />
                <Typography variant="h6">Importing {type}...</Typography>
                <Typography variant="body2" color="text.secondary">
                  Please wait while we process your data
                </Typography>
              </>
            ) : (
              <>
                <CheckIcon
                  sx={{ fontSize: 64, color: "success.main", mb: 2 }}
                />
                <Typography variant="h6" gutterBottom>
                  Import Successful!
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Successfully imported {parsedData.length} {type}
                </Typography>
              </>
            )}
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            Bulk Import {type.charAt(0).toUpperCase() + type.slice(1)}
          </Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {renderStepContent()}
      </DialogContent>
      <DialogActions sx={{ px: 3, py: 2 }}>
        {activeStep > 0 && activeStep < 2 && (
          <Button onClick={handleReset} variant="outlined">
            Start Over
          </Button>
        )}
        {activeStep === 1 && errors.length === 0 && (
          <Button onClick={handleImport} variant="contained" color="primary">
            Import {parsedData.length} {type}
          </Button>
        )}
        {activeStep === 2 && !processing && (
          <Button onClick={onClose} variant="contained" color="primary">
            Close
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default BulkImportDialog;
