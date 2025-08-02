import React, { createContext, useContext, useState, useCallback } from "react";
import { Snackbar, Alert, AlertColor, Slide, SlideProps } from "@mui/material";

interface Notification {
  id: string;
  message: string;
  severity: AlertColor;
  duration?: number;
}

interface NotificationContextType {
  notify: (message: string, severity?: AlertColor, duration?: number) => void;
  success: (message: string, duration?: number) => void;
  error: (message: string, duration?: number) => void;
  warning: (message: string, duration?: number) => void;
  info: (message: string, duration?: number) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

interface NotificationProviderProps {
  children: React.ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [open, setOpen] = useState(false);
  const [currentNotification, setCurrentNotification] =
    useState<Notification | null>(null);

  const processQueue = useCallback(() => {
    if (notifications.length > 0) {
      setCurrentNotification(notifications[0]);
      setNotifications((prev) => prev.slice(1));
      setOpen(true);
    }
  }, [notifications]);

  React.useEffect(() => {
    if (notifications.length > 0 && !currentNotification) {
      processQueue();
    }
  }, [notifications, currentNotification, processQueue]);

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setCurrentNotification(null);
    processQueue();
  };

  const notify = useCallback(
    (
      message: string,
      severity: AlertColor = "info",
      duration: number = 5000
    ) => {
      const id = `${Date.now()}-${Math.random()}`;
      setNotifications((prev) => [
        ...prev,
        { id, message, severity, duration },
      ]);
    },
    []
  );

  const success = useCallback(
    (message: string, duration?: number) => {
      notify(message, "success", duration);
    },
    [notify]
  );

  const error = useCallback(
    (message: string, duration?: number) => {
      notify(message, "error", duration);
    },
    [notify]
  );

  const warning = useCallback(
    (message: string, duration?: number) => {
      notify(message, "warning", duration);
    },
    [notify]
  );

  const info = useCallback(
    (message: string, duration?: number) => {
      notify(message, "info", duration);
    },
    [notify]
  );

  return (
    <NotificationContext.Provider
      value={{ notify, success, error, warning, info }}
    >
      {children}
      {currentNotification && (
        <Snackbar
          open={open}
          autoHideDuration={currentNotification.duration || 5000}
          onClose={handleClose}
          TransitionComponent={SlideTransition}
          TransitionProps={{ onExited: handleExited }}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity={currentNotification.severity}
            variant="filled"
            elevation={6}
            sx={{ width: "100%" }}
          >
            {currentNotification.message}
          </Alert>
        </Snackbar>
      )}
    </NotificationContext.Provider>
  );
};
