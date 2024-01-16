import React from "react";
import { TextField, Typography } from "@mui/material";
import Div from "./Shared/Div";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import { signUp } from "../Api/login";
import { signUpValidations } from "../validations/loginV";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const nav = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      email: "",
      phone: "",
      role: "Vendor",
    },
    enableReinitialize: true,
    validationSchema: signUpValidations,
    onSubmit: async (value) => {
      console.log(value);
      const response = await signUp({
        email: value?.email,
        firstName: value?.firstName,
        lastName: value?.lastName,
        password: value?.password,

        phone: value?.phone,
        role: value?.role,
      });
      console.log(response);
      if (response) {
        console.log("user created and logged in");
        nav("/login");
      }
    },
  });
  return (
    <>
      <Div
        sx={{
          backgroundColor: "rgba(206,227,253,255)",
          border: "1px solid rgba(206,227,253,255)",
          height: "60px",
          padding: "36px",
          width: "600px",
          mt: "50px",
          ml: "423px",
          mb: "40px",
          display: "flex",
        }}
      >
        <Typography
          sx={{
            color: "#65acf9",
            fontWeight: "bold",
            fontSize: "30px",
            mr: "280px",
          }}
        >
          Welcome to RFP System!
          <Typography sx={{ ml: "5px" }}>Sign in to continue</Typography>
        </Typography>
      </Div>
      <Div
        sx={{
          display: "flex",
          maxHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Div
          sx={{
            backgroundColor: "white",
            border: "1px solid rgba(206,227,253,255)",
            height: "700px",
            padding: "36px",
            width: "600px",
            mb: "50px",
          }}
        >
          <Typography
            sx={{
              ml: "5px",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            First Name*
          </Typography>
          <TextField
            sx={{
              fontWeight: 700,
            }}
            label="Enter First Name"
            name="firstName"
            color="secondary"
            variant="outlined"
            margin="normal"
            fullWidth
            value={formik.values.firstName}
            onChange={formik.handleChange}
            helperText={formik.touched.firstName && formik.errors.firstName}
            error={formik.touched.firstName && formik.errors.firstName}
          />
          <Typography
            sx={{
              ml: "5px",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            Last Name*
          </Typography>
          <TextField
            sx={{
              fontSize: "26px",
            }}
            label=" Enter Last Name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            variant="outlined"
            margin="normal"
            color="secondary"
            fullWidth
            helperText={formik.touched.lastName && formik.errors.lastName}
            error={formik.touched.lastName && formik.errors.lastName}
          />
          <Typography
            sx={{
              ml: "5px",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            Email*
          </Typography>
          <TextField
            label="Enter E-Mail"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            variant="outlined"
            margin="normal"
            color="secondary"
            fullWidth
            helperText={formik.touched.email && formik.errors.email}
            error={formik.touched.email && formik.errors.email}
          />
          <Div
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                ml: "5px",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              Phone No*
            </Typography>

            <TextField
              sx={{
                fontWeight: 700,
                width: "100%",
              }}
              label="Enter Phone No "
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              helperText={formik.touched.phone && formik.errors.phone}
              error={formik.touched.phone && formik.errors.phone}
              variant="outlined"
              margin="normal"
              fullWidth
              color="secondary"
              type="number"
            />
          </Div>
          <Typography
            sx={{
              ml: "5px",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            Password*
          </Typography>

          <TextField
            label="Password "
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            helperText={formik.touched.password && formik.errors.password}
            error={formik.touched.password && formik.errors.password}
            variant="outlined"
            margin="normal"
            fullWidth
            color="secondary"
            type="password"
          />
          <Typography
            sx={{
              ml: "5px",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            Confirm Password*
          </Typography>

          <TextField
            label="Confirm Password "
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            variant="outlined"
            margin="normal"
            fullWidth
            color="secondary"
            type="password"
          />

          <Div
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <LoadingButton
              type="submit"
              onClick={formik.handleSubmit}
              sx={{
                width: "580px",
                height: "40px",
                mt: "30px",
                borderRadius: "6px",

                backgroundColor: "blue",
                "&:hover": {
                  backgroundColor: "black",
                },

                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "34px",
                letterSpacing: "0.07em",
                textAlign: "left",
                textTransform: "none",
                color: "white",
                p: 0,
              }}
              variant="contained"
            >
              Sign Up
            </LoadingButton>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default SignUp;
