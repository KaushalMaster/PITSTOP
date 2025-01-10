import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Tooltip,
  AppBar,
  Toolbar,
  ListItemIcon,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

// Create the theme with Roboto font
const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Set the font family
  },
});

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("My Complaints");
  const [openSidebar, setOpenSidebar] = useState(true);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Handle Avatar Menu
  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Sidebar items with icons
  const sidebarItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      onClick: () => {
        setSelectedTitle("Dashboard");
        if (isMobile) toggleSidebar(); // Close the sidebar on mobile
      },
    },
    {
      text: "My Complaints",
      icon: <AccountCircleIcon />,
      onClick: () => {
        setSelectedTitle("My Complaints");
        if (isMobile) toggleSidebar(); // Close the sidebar on mobile
      },
    },
    {
      text: "My Payments",
      icon: <ExitToAppIcon />,
      onClick: () => {
        setSelectedTitle("My Payments");
        if (isMobile) toggleSidebar(); // Close the sidebar on mobile
      },
    },
  ];

  // Toggle sidebar on mobile
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  // Example data for the DataGrid (for My Complaints)
  const complaintColumns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "complaint", headerName: "Complaint", width: 250 },
    { field: "status", headerName: "Status", width: 150 },
  ];

  const complaintRows = [
    { id: 1, complaint: "Complaint 1", status: "Pending" },
    { id: 2, complaint: "Complaint 2", status: "Resolved" },
    { id: 3, complaint: "Complaint 3", status: "In Progress" },
  ];

  const paymentColumns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "paymentId", headerName: "Payment ID", width: 180 },
    { field: "amount", headerName: "Amount", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
  ];

  const paymentRows = [
    { id: 1, paymentId: "12345", amount: "$50", status: "Completed" },
    { id: 2, paymentId: "12346", amount: "$150", status: "Pending" },
    { id: 3, paymentId: "12347", amount: "$200", status: "Failed" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ display: "flex", height: "100vh", backgroundColor: "#f9f9f9" }}
      >
        {/* Sidebar */}
        <Drawer
          sx={{
            width: 240,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 240,
              backgroundColor: "#ffffff",
              color: "#333",
              boxSizing: "border-box",
              paddingTop: 3,
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid #ddd",
              transition: "all 0.3s ease",
            },
          }}
          variant={isMobile ? "temporary" : "permanent"}
          open={openSidebar}
          onClose={toggleSidebar}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Box
            sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}
          >
            <img src="/assets/logo.png" alt="" width={150} />
          </Box>
          <Divider sx={{ backgroundColor: "#ddd" }} />
          <List sx={{ paddingTop: 2 }}>
            {sidebarItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={item.onClick}
                sx={{
                  "&:hover": { backgroundColor: "#f1f1f1" },
                  cursor: "pointer",
                  "&:selected": { backgroundColor: "yellow" },
                }}
              >
                <ListItemIcon sx={{ color: "#333" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: "#333" }} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Main Content */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
          }}
        >
          {/* AppBar */}
          <AppBar
            position="fixed"
            sx={{
              top: 0,
              left: 0,
              right: 0,
              marginBottom: 2,
              backgroundColor: "transparent",
              color: "#333",
              boxShadow: "none",
              zIndex: theme.zIndex.drawer + 1,
              display: "flex",
              justifyContent: "flex-end", // Aligning avatar icon to the right
            }}
          >
            <Toolbar>
              {!openSidebar && isMobile && (
                <Tooltip title="Open Sidebar">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleSidebar}
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Tooltip>
              )}
              <Box sx={{ flexGrow: 1 }} /> {/* Push Avatar to the right */}
              <IconButton onClick={handleAvatarClick}>
                <Avatar />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>

          {/* Hero Section */}
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: 4,
              width: "100%",
              backgroundColor: "#ffffff",
              borderRadius: 2,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              marginTop: "80px", // Ensure content doesn't hide behind the fixed AppBar
              overflowY: "auto", // Enable vertical scrolling on content
              height: "calc(100vh - 80px)", // Full height minus AppBar
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginBottom: 2, // Spacing at the bottom of the title
                color: "#333",
                display: "flex",
                justifyContent: "flex-start", // Align title at the start
              }}
            >
              {selectedTitle}
            </Typography>

            {/* DataGrid with Pagination based on selected title */}
            <div style={{ height: 400, width: "100%" }}>
              {selectedTitle === "My Complaints" ? (
                <DataGrid
                  rows={complaintRows}
                  columns={complaintColumns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  pagination
                  checkboxSelection
                />
              ) : (
                <DataGrid
                  rows={paymentRows}
                  columns={paymentColumns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  pagination
                  checkboxSelection
                />
              )}
            </div>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
