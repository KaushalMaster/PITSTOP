import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Avatar,
  Box,
  Container,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

// Create the theme with default breakpoints
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const Navbar = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // To check if it's a mobile screen size

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "transparent", // Transparent background
          backdropFilter: "blur(10px)", // Glassmorphism effect
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Slight shadow for depth
          zIndex: theme.zIndex.drawer + 1, // Ensure navbar is on top
          paddingX: 2, // Horizontal padding for spacing
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Left Side: Logo */}
            <img src="/assets/logo.png" alt="Logo" width={190} />

            {/* Right Side: Navigation and Avatar */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* Show Menu for Mobile */}
              {isMobile ? (
                <IconButton color="inherit" sx={{ mr: 2 }}>
                  <MenuIcon />
                </IconButton>
              ) : (
                <>
                  {/* Menu Items */}
                  <Button
                    color="inherit"
                    sx={{
                      marginRight: 2,
                      color: "black",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#ff0000",
                        color: "white",
                      },
                    }}
                  >
                    Services
                  </Button>
                  <Button
                    color="inherit"
                    sx={{
                      marginRight: 2,
                      color: "black",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#ff0000",
                        color: "white",
                      },
                    }}
                  >
                    About Us
                  </Button>
                  <Button
                    color="inherit"
                    sx={{
                      marginRight: 2,
                      color: "black",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#ff0000",
                        color: "white",
                      },
                    }}
                  >
                    Contact Us
                  </Button>
                </>
              )}

              {/* Avatar */}
              <IconButton>
                <Avatar alt="User" src="/static/images/avatar/1.jpg" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
