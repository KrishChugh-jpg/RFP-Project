import React from "react";
import { useTheme } from "@emotion/react";
import { TextField, Typography, Button, Box } from "@mui/material";
import Div from "./Shared/Div";

import { LoadingButton } from "@mui/lab";
import EastIcon from "@mui/icons-material/East";
import { useFormik } from "formik";
import { loginValidations } from "../validations/loginV";
import { useNavigate } from "react-router-dom";
import { login } from "../Api/login";
import { useDispatch } from "react-redux";
import { updateIsLogin } from "../Redux/Actions/AppActions";
import { updateUser, updateUserObj } from "../Redux/Actions/userActions";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    enableReinitialize: true,
    validationSchema: loginValidations,
    onSubmit: async (value) => {
      console.log(value);
      const response = await login({
        email: value?.email,
        password: value?.password,
      });
      console.log(response);
      if (response) {
        dispatch(updateUser(response?.name));
        dispatch(updateIsLogin(true));
        dispatch(updateUserObj(response));
        console.log("user logged in");
        nav("/home");
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
          mt: "100px",
          ml: "431px",
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
            height: "350px",
            padding: "36px",
            width: "600px",
          }}
        >
          <Typography
            sx={{
              ml: "5px",
              fontSize:"18px",
              fontWeight:700
            }}
          >
            Email
          </Typography>
          <TextField
            label="Enter Email"
            name="email"
            color="secondary"
            value={formik.values.email}
            onChange={formik.handleChange}
            variant="outlined"
            margin="normal"
            fullWidth
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Typography
            sx={{
              ml: "5px",
              fontSize:"18px",
              fontWeight:700
            }}
          >
            Password
          </Typography>
          <TextField
            label=" Enter Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            variant="outlined"
            margin="normal"
            fullWidth
            color="secondary"
            type="password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Div
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
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
              Login
              <EastIcon
                sx={{
                  ml: "10px",
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "34px",
                  letterSpacing: "0.07em",
                  textAlign: "left",
                  textTransform: "none",
                  color: "white",
                }}
              />
            </Button>
          </Div>
          <Div
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mt: "20px",
            }}
          >
            <Typography
              onClick={() => nav("/sign-up")}
              sx={{
                color: "#65acf9",
                textDecoration: "none",
                fontWeight: 700,
                display: "inline-block",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              {" "}
              Register as Vendor
            </Typography>
            <Typography
              sx={{
                color: "#65acf9",
                textDecoration: "none",
                fontWeight: 700,
                mt: "10px",
                display: "inline-block",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              {" "}
              Forget your password?
            </Typography>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Login;
