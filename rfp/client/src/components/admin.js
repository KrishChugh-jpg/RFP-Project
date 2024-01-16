import React from "react";
import { Autocomplete, TextField, Typography } from "@mui/material";
import Div from "./Shared/Div";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import { adminValidations } from "../validations/partnerV";
import { signUp } from "../Api/login";
import { useNavigate } from "react-router-dom";

const categoriesList = ["abc", "abcd", "Groceries", "Hardware"];


const Admin = () => {

  
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      employees:"",
      revenue: "",
      gst: "",
      pan: "",
      phone: "",
      categories: "",
      role:"Admin"
    },
    enableReinitialize: true,
    validationSchema: adminValidations,
    onSubmit: async (value) => {
      console.log(value);
      const response = await signUp({
        email: value?.email,
        firstName: value?.firstName,
        lastName: value?.lastName,
        password: value?.password,
        employees:value?.employees,
      revenue:value?.revenue ,
      gst: value?.gst,
      pan: value?.pan,
      phone: value?.phone,
      categories: value?.categories,
      role:value?.role
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
          mb: "50px",
          ml: "423px",
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
            mb: "70px",
          }}
        >
          <Div
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
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
                First Name*
              </Typography>
              <TextField
                sx={{
                  fontWeight: 700,
                  width: "120%",
                }}
                label="Enter First Name"
                name="firstName"
                color="secondary"
                variant="outlined"
                margin="normal"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                helperText={formik.touched.firstName && formik.errors.firstName}
                error={formik.touched.firstName && formik.errors.firstName}
              />
            </Div>
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
                Last Name*
              </Typography>
              <TextField
                sx={{
                  fontSize: "26px",
                  width: "100%",
                  mr: "50px",
                }}
                label=" Enter Last Name"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                variant="outlined"
                margin="normal"
                color="secondary"
                helperText={formik.touched.lastName && formik.errors.lastName}
                error={formik.touched.lastName && formik.errors.lastName}
              />
            </Div>
          </Div>
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
            label="Enter Email"
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
              justifyContent: "space-between",
            }}
          >
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
                Password*
              </Typography>

              <TextField
                sx={{
                  fontWeight: 700,
                  width: "120%",
                }}
                label="Enter Password "
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
            </Div>
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
                Confirm Password*
              </Typography>

              <TextField
                sx={{
                  fontSize: "26px",
                  width: "100%",
                  mr: "50px",
                }}
                label="Enter Confirm Password "
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                error={formik.touched.confirmPassword && formik.errors.confirmPassword}
                variant="outlined"
                margin="normal"
                fullWidth
                color="secondary"
                type="password"
              />
            </Div>
          </Div>

          <Div
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
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
                Revenue ( Last 3 Years in Lacks )*
              </Typography>

              <TextField
                sx={{
                  fontWeight: 700,
                  width: "97%",
                }}
                label="Enter Revenue"
                name="revenue"
                color="secondary"
                variant="outlined"
                margin="normal"
                type="number"
                value={formik.values.revenue}
                onChange={formik.handleChange}
                helperText={formik.touched.revenue && formik.errors.revenue}
                error={formik.touched.revenue && formik.errors.revenue}
              />
            </Div>
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
                No of Employees*
              </Typography>

              <TextField
                sx={{
                  fontWeight: 700,
                  width: "100%",
                  mr: "50px",
                }}
                label="Enter No of Employees"
                name="employees"
                color="secondary"
                variant="outlined"
                margin="normal"
                type="number"
                value={formik.values.employees}
                onChange={formik.handleChange}
                helperText={formik.touched.employees && formik.errors.employees}
                error={formik.touched.employees && formik.errors.employees}
              />
            </Div>
          </Div>
          <Div
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
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
                GST No*
              </Typography>

              <TextField
                sx={{
                  fontWeight: 700,
                  width: "120%",
                }}
                label="Enter GST No"
                name="gst"
                color="secondary"
                variant="outlined"
                margin="normal"
                value={formik.values.gst}
                onChange={formik.handleChange}
                helperText={formik.touched.gst && formik.errors.gst}
                error={formik.touched.gst && formik.errors.gst}
              />
            </Div>
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
                PAN No*
              </Typography>

              <TextField
                sx={{
                  fontWeight: 700,
                  width: "100%",
                  mr: "50px",
                }}
                label="Enter PAN No"
                name="pan"
                color="secondary"
                variant="outlined"
                margin="normal"
                value={formik.values.pan}
                onChange={formik.handleChange}
                helperText={formik.touched.pan && formik.errors.pan}
                error={formik.touched.pan && formik.errors.pan}
              />
            </Div>
          </Div>
          <Div
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
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
                  width: "120%",
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
                Categories*
              </Typography>

              <Autocomplete
                disablePortal
                options={categoriesList}
                color="secondary"
                name="categories"
                value={formik.values.categories}
                onChange={(e, v) => formik.setFieldValue("categories", v)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Categories"
                    name="categories"
                    variant="outlined"
                    margin="normal"
                    sx={{
                      fontWeight: 700,
                      width: "260px",
                    }}
                    helperText={
                      formik.touched.categories && formik.errors.categories
                    }
                    error={
                      formik.touched.categories && formik.errors.categories
                    }
                    color="secondary"
                  />
                )}
              />
            </Div>
          </Div>
          <Div
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <LoadingButton
              type="submit"
              onClick={formik.handleSubmit}
              sx={{
                width: "200px",
                height: "40px",
                mt: "15px",
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
              Register
            </LoadingButton>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Admin;
