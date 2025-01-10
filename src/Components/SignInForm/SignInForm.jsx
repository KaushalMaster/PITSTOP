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
import { Link } from "react-router"; // Import Link for navigation

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission, for example, authentication.
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
              src="https://img.freepik.com/free-photo/3d-render-secure-login-password-illustration_107791-16640.jpg?t=st=1736235406~exp=1736239006~hmac=b7884b8db36310f4c144a4f211dfd5a0edd1e5e1b62d6c166751dfa0c19942fe&w=740" // Placeholder image
              alt="Login Illustration"
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: 400,
                margin: "0 auto",
              }}
            />
          </Grid>

          {/* Right Part: Sign In Form */}
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={6}
              sx={{ padding: 4, borderRadius: 3, backgroundColor: "#f9f9f9" }}
            >
              <Box sx={{ marginBottom: 4 }}>
                <img src="/assets/logo.png" alt="" width={190} />
              </Box>

              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Grid container spacing={2}>
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

                  {/* Submit Button */}
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor:"black",
                        color:"white",
                        marginTop: 2,
                        borderRadius: 2,
                        "&:hover": {
                          backgroundColor: "#ff0000", // Slightly different color on hover
                          color: "white"
                        },
                      }}
                    >
                      Sign In
                    </Button>
                  </Grid>
                </Grid>
              </form>

              {/* Sign-Up Link */}
              <Box sx={{ marginTop: 2, textAlign: "center" }}>
                <Typography variant="body2" color="text.secondary">
                  Don't have an account?{" "}
                  <Link
                    to="/user/register/sign-up" // Link to the Sign-Up page
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Sign Up
                  </Link>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SignInForm;
