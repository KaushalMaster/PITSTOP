import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
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
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid"; // DataGrid component from MUI X
import { Link } from "react-router"; // To handle the navigation for sidebar
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger menu icon

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("My Complaints");
  const [openSidebar, setOpenSidebar] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detecting screen size

  // Handle Avatar Menu
  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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

  // Example data for the DataGrid (for My Payments)
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

  // Sidebar items
  const sidebarItems = [
    { text: "My Complaints", onClick: () => setSelectedTitle("My Complaints") },
    { text: "My Payments", onClick: () => setSelectedTitle("My Payments") },
  ];

  // Toggle sidebar on mobile
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            backgroundColor: "#2c3e50",
            color: "white",
            boxSizing: "border-box",
            paddingTop: 2,
            display: "flex",
            flexDirection: "column",
          },
        }}
        variant={isMobile ? "temporary" : "permanent"}
        open={openSidebar}
        onClose={toggleSidebar}
        ModalProps={{
          keepMounted: true, // Better performance on mobile
        }}
      >
        {/* Logo */}
        <Box sx={{ padding: 2, display: "flex", justifyContent: "center" }}>
          <Typography variant="h6" color="white">
            Pitstop
          </Typography>
        </Box>
        <Divider sx={{ backgroundColor: "#fff" }} />
        {/* Sidebar Menu Items */}
        <List sx={{ paddingTop: 2 }}>
          {sidebarItems.map((item) => (
            <ListItem button key={item.text} onClick={item.onClick}>
              <ListItemText
                primary={
                  <Typography variant="body1" color="white">
                    {item.text}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Container */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* AppBar */}
        <AppBar
          position="sticky"
          sx={{
            backgroundColor: "#f4f6f8",
            color: "#000",
            borderBottom: "1px solid #ccc",
            zIndex: theme.zIndex.drawer + 1, // Ensure it stays above the drawer
          }}
        >
          <Toolbar>
            {/* Hamburger Menu for Mobile */}
            {isMobile && (
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

            {/* Title */}
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                display: { xs: "none", sm: "block" },
              }}
            >
              {selectedTitle}
            </Typography>

            {/* Avatar and Dropdown */}
            <Box>
              <IconButton onClick={handleAvatarClick}>
                <Avatar alt="User" src="/static/images/avatar/1.jpg" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: 4,
            width: "100%",
          }}
        >
          <Paper sx={{ padding: 3 }}>
            <Typography
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                fontWeight: "bold",
                marginBottom: 2,
              }}
            >
              {selectedTitle}
            </Typography>

            {/* DataGrid with Pagination based on selected title */}
            <div style={{ height: 400, width: "100%", overflowX: "auto" }}>
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
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
