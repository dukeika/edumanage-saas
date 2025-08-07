import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Alert,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import {
  Close as CloseIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
  Error as ErrorIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";

export interface ConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void | Promise<void>;
  title: string;
  message: string | React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  severity?: "info" | "warning" | "error" | "success";
  loading?: boolean;
  showAlert?: boolean;
  alertMessage?: string;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
}

const severityIcons = {
  info: <InfoIcon />,
  warning: <WarningIcon />,
  error: <ErrorIcon />,
  success: <CheckCircleIcon />,
};

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  severity = "info",
  loading = false,
  showAlert = false,
  alertMessage,
  maxWidth = "sm",
  fullWidth = true,
}) => {
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleConfirm = async () => {
    setIsProcessing(true);
    try {
      await onConfirm();
      onClose();
    } catch (error) {
      console.error("Confirmation error:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const getSeverityColor = () => {
    switch (severity) {
      case "error":
        return "error.main";
      case "warning":
        return "warning.main";
      case "success":
        return "success.main";
      default:
        return "primary.main";
    }
  };

  const getConfirmButtonColor = () => {
    switch (severity) {
      case "error":
        return "error";
      case "warning":
        return "warning";
      case "success":
        return "success";
      default:
        return "primary";
    }
  };

  return (
    <Dialog
      open={open}
      onClose={!isProcessing && !loading ? onClose : undefined}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      aria-labelledby="confirm-dialog-title"
      aria-describedby="confirm-dialog-description"
    >
      <DialogTitle id="confirm-dialog-title">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={1}>
            <Box sx={{ color: getSeverityColor(), display: "flex" }}>
              {severityIcons[severity]}
            </Box>
            <Typography variant="h6">{title}</Typography>
          </Box>
          {!isProcessing && !loading && (
            <IconButton aria-label="close" onClick={onClose} size="small">
              <CloseIcon />
            </IconButton>
          )}
        </Box>
      </DialogTitle>
      <DialogContent>
        {showAlert && alertMessage && (
          <Alert severity={severity} sx={{ mb: 2 }}>
            {alertMessage}
          </Alert>
        )}
        <DialogContentText id="confirm-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          onClick={onClose}
          disabled={isProcessing || loading}
          variant="outlined"
        >
          {cancelText}
        </Button>
        <Button
          onClick={handleConfirm}
          disabled={isProcessing || loading}
          variant="contained"
          color={getConfirmButtonColor()}
          autoFocus
        >
          {isProcessing || loading ? "Processing..." : confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Hook for easier usage
export const useConfirmDialog = () => {
  const [dialogConfig, setDialogConfig] = React.useState<Omit<
    ConfirmDialogProps,
    "open" | "onClose"
  > | null>(null);

  const confirm = (
    config: Omit<ConfirmDialogProps, "open" | "onClose" | "onConfirm">
  ) => {
    return new Promise<boolean>((resolve) => {
      setDialogConfig({
        ...config,
        onConfirm: () => {
          resolve(true);
          setDialogConfig(null);
        },
      });
    });
  };

  const close = () => {
    setDialogConfig(null);
  };

  return {
    confirm,
    close,
    ConfirmDialogComponent: dialogConfig && (
      <ConfirmDialog open={true} onClose={close} {...dialogConfig} />
    ),
  };
};
