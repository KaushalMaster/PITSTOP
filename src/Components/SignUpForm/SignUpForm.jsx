import React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Paper,
  Box,
} from "@mui/material";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Centers horizontally
        alignItems: "center", // Centers vertically
        height: "100vh", // Full viewport height
        backgroundColor: "#f4f6f8", // Optional background color
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", alignItems: "center" }}
        >
          {/* Left Part: Illustration */}
          <Grid item xs={12} sm={6}>
            <Box
              component="img"
              src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?t=st=1736235479~exp=1736239079~hmac=f0449808275dfab0cc0eb56cddf7c62a4b9603a44fa3293ae4c7aef1cd6e35ce&w=740" // Signup illustration
              alt="Signup Illustration"
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: 500,
                margin: "0 auto",
              }}
            />
          </Grid>

          {/* Right Part: Sign Up Form */}
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={6}
              sx={{
                padding: 4,
                borderRadius: 3,
                backgroundColor: "#ffffff",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Box sx={{ marginBottom: 4 }}>
                <img src="/assets/logo.png" alt="" width={190} />
              </Box>

              <Typography
                variant="h4"
                align="center"
                sx={{
                  marginBottom: 3,
                  fontWeight: "bold",
                  fontSize: "2rem",
                  color: "#333",
                }}
              >
                Create an Account
              </Typography>

              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Grid container spacing={2}>
                  {/* Username Field */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Username"
                      variant="outlined"
                      {...register("username", {
                        required: "Username is required",
                        minLength: {
                          value: 3,
                          message: "Username must be at least 3 characters",
                        },
                      })}
                      error={!!errors.username}
                      helperText={
                        errors.username ? errors.username.message : ""
                      }
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Grid>

                  {/* Email Field */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email address",
                        },
                      })}
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ""}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Grid>

                  {/* Password Field */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Password"
                      type="password"
                      variant="outlined"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      error={!!errors.password}
                      helperText={
                        errors.password ? errors.password.message : ""
                      }
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Grid>

                  {/* Contact Number Field */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Contact Number"
                      variant="outlined"
                      type="tel"
                      {...register("contactNumber", {
                        required: "Contact number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Invalid contact number",
                        },
                      })}
                      error={!!errors.contactNumber}
                      helperText={
                        errors.contactNumber ? errors.contactNumber.message : ""
                      }
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Grid>

                  {/* Submit Button */}
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: "black",
                        color: "white",
                        marginTop: 2,
                        borderRadius: 2,
                        "&:hover": {
                          backgroundColor: "#ff0000", // Slightly different color on hover
                          color: "white",
                        },
                      }}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SignUpForm;
