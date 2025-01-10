import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  createTheme,
  ThemeProvider,
} from "@mui/material";

// Create a custom theme to apply the Roboto font globally
const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", sans-serif', // Apply Roboto font
  },
});

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ mt: 8, mb: 8 }}>
        <Grid container alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 4,
              }}
            >
              <img
                src="https://media.istockphoto.com/id/1170514506/vector/racing-car-on-pit-stop-flat-vector-illustration.jpg?s=612x612&w=0&k=20&c=vGPC8b-L30b6hXOZv3_RsXjZv4RP3Az8FgxcJnJVNgA="
                alt="About-Us content Image"
                style={{
                  maxWidth: "450px",
                  borderRadius: "10px",
                }}
              />
            </Box>
          </Grid>

          {/* Content Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "left", ml: 2 }}>
              <Typography
                variant="h4"
                component="h1"
                sx={{ fontWeight: 600, mb: 2 }}
              >
                About Us
              </Typography>

              <Box
                variant="body1"
                sx={{
                  marginLeft: "-40px",
                }}
              >
                <img src="/assets/logo.png" alt="Logo" width={210} />
              </Box>
              <Typography sx={{ fontSize: 26, mb: 2, fontWeight: 720 }}>
                Vehicle Service & Repair
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, fontWeight: 230 }}>
                At our service center, we provide top-notch car repair and
                maintenance services to keep your vehicle in peak condition.
                With a team of experienced professionals and state-of-the-art
                tools, we ensure that your car receives the best treatment it
                deserves. Our mission is to deliver exceptional customer service
                and high-quality results every time.
              </Typography>

              <Typography variant="body1" sx={{ mb: 2 }}>
                ✅ We Offer Multiple Services <br />
                ✅ Fast and Reliable Repairs <br />
                ✅ Affordable Prices <br />✅ Experienced Technicians
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default About;
