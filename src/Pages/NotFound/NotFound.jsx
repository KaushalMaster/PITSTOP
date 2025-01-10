import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

// For adding a nice animation to the 404 number
import { keyframes } from "@mui/system";

// Define animation for 404
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "black", // Set black background
        color: "white", // White text color
        textAlign: "center",
        padding: 2,
      }}
    >
      {/* Illustration (Optional, if you have an image) */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <img
          src="/assets/404.png" // Make sure this is a valid image path
          alt="404 Illustration"
          style={{
            maxWidth: "100%",
            height: "auto",
            maxHeight: "250px",
          }}
        />
      </Box>

      {/* Animated 404 */}
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          fontSize: "120px",
          animation: `${pulseAnimation} 1.5s infinite`,
          marginBottom: 2,
        }}
      >
        404
      </Typography>

      {/* Description */}
      <Typography variant="h5" sx={{ marginBottom: 4, fontWeight: "400" }}>
        Oops! The page you're looking for doesn't exist.
      </Typography>

      {/* Go to Home Button */}
      <Button
        variant="contained"
        color="error" // Use red color for the button
        onClick={goHome}
        sx={{
          padding: "12px 24px",
          fontSize: "16px",
          fontWeight: "500",
          borderRadius: "25px",
          backgroundColor: "#ff5e5e", // Red background color
          color: "white", // White font color
          "&:hover": {
            backgroundColor: "#ff4040", // Darker red on hover
            transform: "scale(1.05)",
            transition: "transform 0.2s ease-in-out",
          },
        }}
      >
        Go to Home Page
      </Button>
    </Box>
  );
};

export default NotFound;
