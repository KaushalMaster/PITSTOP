import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router";

const services = [
  {
    title: "Emergency Vehicle Pickup",
    description:
      "Our emergency vehicle pickup service ensures that your car is quickly towed to the nearest service station for immediate repairs.",
    imageUrl:
      "https://img.freepik.com/free-vector/car-transportation-towing-flat-vector-illustration_178650-4631.jpg?ga=GA1.1.511780213.1736504319&semt=ais_hybrid",
  },
  {
    title: "Engine Service and Oil Change",
    description:
      "We provide high-quality engine services and oil change to keep your vehicle running smoothly for years.",
    imageUrl:
      "https://cdni.iconscout.com/illustration/premium/thumb/mechanic-changing-oil-of-car-engine-illustration-download-in-svg-png-gif-file-formats--change-oiling-repairman-pack-people-illustrations-2289768.png",
  },
  {
    title: "Tyre Change and Repair",
    description:
      "Our tyre change and repair services ensure that your car has the best tyres for safety, performance, and longevity.",
    imageUrl:
      "data:image/jpeg;base64,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",
  },
  {
    title: "Full Vehicle Service",
    description:
      "Comprehensive vehicle service for all your car needs, from engine diagnostics to brake checks and everything in between.",
    imageUrl:
      "https://yi-files.yellowimages.com/products/788000/788969/1344202-full.jpg",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 8, mb: 8 }}>
      {/* Title */}
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 600,
          textAlign: "center",
          mb: 4,
          color: "black",
        }}
      >
        Our Services
      </Typography>

      {/* Grid of Services Cards */}
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={3} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: "black", // Set the card background to black
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                overflow: "hidden",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)", // Slight scaling on hover
                },
              }}
            >
              {/* Card Image */}
              <CardMedia
                component="img"
                height="200"
                image={service.imageUrl}
                alt={service.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontWeight: 600,
                    color: "#ff4c4c", // Red color for title
                    textAlign: "left",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", mt: 1, textAlign: "left" }}
                >
                  {service.description}
                </Typography>
                {/* Proceed Button */}
                <Box sx={{ mt: 2, textAlign: "left" }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#ff0000", // Red background for button
                      color: "white",
                      fontWeight: 500,
                      "&:hover": {
                        backgroundColor: "#cc0000", // Darker red on hover
                      },
                    }}
                    onClick={() => navigate("/user/vehicle/problem")}
                  >
                    Proceed
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
