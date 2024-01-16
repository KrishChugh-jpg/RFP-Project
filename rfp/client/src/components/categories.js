import React, { useEffect, useState } from "react";
import { Autocomplete, TextField, Typography } from "@mui/material";
import Div from "./Shared/Div";
import { useSelector } from "react-redux";
import axios from "axios";
import AdminNavbar from "./adminNavbar";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { categoryCreate } from "../Api/login";
import { categoryValidations } from "../validations/createrfp";

const categoriesList = ["automobiles", "stationary", "Groceries", "Hardware"];

const Categories = () => {

  const emailFromRedux = useSelector((state) => state?.user?.userObject?.email);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getProfileData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/user/vendor`
        );
        console.log(response.data.data);

        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (emailFromRedux) {
      getProfileData();
    }
  }, [emailFromRedux]);




    const nav = useNavigate();
    const formik = useFormik({
      initialValues: {
        vendorCategory: "",
      },
      enableReinitialize: true,
      validationSchema: categoryValidations,
      onSubmit: async (value) => {
        console.log(emailFromRedux,"email is present")
        console.log(value);
        const body = {
          ...value,
          email:emailFromRedux,
        };
        const response = await categoryCreate(body);
        nav("/mainCategories");
      },
    });

  return (
    <>
      <AdminNavbar />

      <Div>
        <Div
          sx={{
            alignContent: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontSize: "25px",
              fontWeight: 700,
              mt: "30px",
              ml: "300px",
            }}
          >
            RFP Select Categories
          </Typography>

          <Typography
            sx={{
              color: "black",
              fontSize: "20px",
              fontWeight: 700,
              mt: "40px",
              mr: "50px",
            }}
          >
            Home / <Typography>RFP/ Categories</Typography>
          </Typography>
        </Div>

        <Div sx={{ml:"300px"}}>

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
            name="vendorCategory"
            value={formik.values.vendorCategory}
            onChange={(e, v) => formik.setFieldValue("vendorCategory", v)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Categories"
                name="vendorCategory"
                variant="outlined"
                margin="normal"
                sx={{
                  fontWeight: 700,
                  width: "700px",
                }}
                color="secondary"
                helperText={
                  formik.touched.vendorCategory && formik.errors.vendorCategory
                }
                error={
                  formik.touched.vendorCategory && formik.errors.vendorCategory
                }
              />
            )}
          />
        </Div>
        <Div
            sx={{
              display: "flex",
            }}
          >
            <LoadingButton
              type="submit"
              onClick={formik.handleSubmit}
           

              sx={{
                width: "150px",
                height: "40px",
                mt: "350px",
                mr:"20px",
                borderRadius: "6px",

                backgroundColor: "#3d8ef8",
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
              Submit
            </LoadingButton>
            <LoadingButton
              type="submit"
              onClick={()=>nav("/mainCategories")}
           

              sx={{
                width: "150px",
                height: "40px",
                mt: "350px",
                borderRadius: "6px",

                backgroundColor: "#7c8a96",
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
              Cancel
            </LoadingButton>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Categories;
