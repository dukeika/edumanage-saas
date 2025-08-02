import React from "react";
import { Box, CircularProgress, Typography, Fade } from "@mui/material";

interface LoadingScreenProps {
  message?: string;
  fullScreen?: boolean;
  size?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = "Loading...",
  fullScreen = true,
  size = 60,
}) => {
  const content = (
    <Fade in timeout={800}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          p: 3,
        }}
      >
        <CircularProgress
          size={size}
          thickness={4}
          sx={{
            color: "primary.main",
          }}
        />
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontWeight: 300,
            letterSpacing: 0.5,
          }}
        >
          {message}
        </Typography>
      </Box>
    </Fade>
  );

  if (fullScreen) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          zIndex: 9999,
        }}
      >
        {content}
      </Box>
    );
  }

  return content;
};

export default LoadingScreen;
