import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
  Grid,
  Box,
  Paper,
  Typography,
} from "@mui/material";

const ProblemUploadForm = () => {
  const [file, setFile] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Submit data to API or handle form submission
  };

  // Handle drag and drop functionality
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setValue("image", droppedFile); // Set the value of image field in react-hook-form
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setValue("image", selectedFile); // Set the value of image field in react-hook-form
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack vertically on mobile and horizontally on larger screens
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f4f8",
        padding: 3,
      }}
    >
      {/* Left Container with Illustration */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: { xs: 2, md: 0 }, // Margin for smaller screens
        }}
      >
        <img
          src="https://cbx-prod.b-cdn.net/COLOURBOX56574537.jpg?width=800&height=800&quality=70"
          alt="Illustration"
          style={{
            maxWidth: "100%",
            height: "auto",
            maxHeight: "400px", // Limit image height for large screens
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Right Container with Form */}
      <Box
        sx={{
          flex: 1,
          maxWidth: 600,
          padding: { xs: 2, md: 4 }, // Smaller padding for mobile devices
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <img
          src="/assets/logo.png"
          alt="Logo"
          width={200}
          style={{
            marginBottom: "24px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
        />
        <Typography
          variant="h5"
          sx={{ fontWeight: "600", marginBottom: "16px", textAlign: "center" }}
        >
          Report a Problem
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginBottom: "24px", textAlign: "center" }}
        >
          Please provide the details of the problem along with a relevant image.
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            {/* Owner Name */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Owner Name"
                variant="outlined"
                {...register("ownerName", {
                  required: "Owner name is required",
                })}
                error={!!errors.ownerName}
                helperText={errors.ownerName?.message}
                sx={{
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: 2,
                    },
                  },
                }}
              />
            </Grid>

            {/* Vehicle Type */}
            <Grid item xs={12}>
              <FormControl
                fullWidth
                error={!!errors.vehicleType}
                sx={{ borderRadius: 2 }}
              >
                <InputLabel>Vehicle Type</InputLabel>
                <Select
                  label="Vehicle Type"
                  {...register("vehicleType", {
                    required: "Vehicle type is required",
                  })}
                  defaultValue="car"
                  sx={{
                    borderRadius: 2,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: 2,
                      },
                    },
                  }}
                >
                  <MenuItem value="car">Car</MenuItem>
                  <MenuItem value="bike">Bike</MenuItem>
                  <MenuItem value="heavy-duty">Heavy Duty</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
                <FormHelperText>{errors.vehicleType?.message}</FormHelperText>
              </FormControl>
            </Grid>

            {/* Image Upload - Drag and Drop */}
            <Grid item xs={12}>
              <Paper
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 200,
                  border: "2px dashed",
                  borderColor: "#ccc",
                  borderRadius: 2,
                  backgroundColor: "#fafafa",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "black",
                  },
                }}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
              >
                <Box sx={{ textAlign: "center" }}>
                  {file ? (
                    <Typography variant="body2">{file.name}</Typography>
                  ) : (
                    <Typography variant="body2" color="textSecondary">
                      Drag & Drop Image or Click to Select
                    </Typography>
                  )}
                  <input
                    type="file"
                    style={{ display: "none" }}
                    {...register("image", {
                      required: "Image is required",
                      validate: (value) =>
                        (value && value.size <= 5 * 1024 * 1024) ||
                        "Image size must be less than 5MB",
                    })}
                    onChange={handleFileChange}
                  />
                </Box>
              </Paper>
              {errors.image && (
                <FormHelperText error>{errors.image?.message}</FormHelperText>
              )}
            </Grid>

            {/* Problem Description */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Describe Problem"
                variant="outlined"
                multiline
                rows={4}
                {...register("problemDescription", {
                  required: "Problem description is required",
                })}
                error={!!errors.problemDescription}
                helperText={errors.problemDescription?.message}
                sx={{
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: 2,
                    },
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
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "red",
                    color: "white",
                  },
                  padding: "12px 24px",
                  borderRadius: 2,
                  fontWeight: "600",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default ProblemUploadForm;
