import React, { useEffect, useState } from "react";
import { Autocomplete, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import Navbar from "./navbar";
import Div from "./Shared/Div";
import { rfpValidations } from "../validations/createrfp";
import { useNavigate } from "react-router-dom";
import { rfpCreate } from "../Api/login";

const VendorRfpCreate = () => {
  const nav = useNavigate();

  const emailFromRedux = useSelector((state) => state?.user?.userObject?.email);
  const [data, setData] = React.useState([]);
  const vendorOptions = data.map((vendor) => vendor.firstName);

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

  console.log(data);

  const formik = useFormik({
    initialValues: {
      vendorPrice: "",
      itemDesc: "",
      quantity: "",
      totalCost: "",
    },
    enableReinitialize: true,
    validationSchema: rfpValidations,
    onSubmit: async (value) => {
      console.log(value);
      const body = {
        ...value,
        email: emailFromRedux,
      };
      const response = await rfpCreate(body);
      nav("/rfpquotes");
    },
  });

  return (
    <>
      <Navbar />

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
            RFP Create
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
            Home / <Typography>RFP/ Quotes Create</Typography>
          </Typography>
        </Div>

        <Div sx={{ ml: "300px" }}>
          <Div
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Div
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Div>
                <Typography
                  sx={{
                    ml: "5px",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  Vendor Price*
                </Typography>
                <TextField
                  sx={{
                    fontWeight: 700,
                    width: "500px",
                  }}
                  label="Vendor Price"
                  name="vendorPrice"
                  color="secondary"
                  variant="outlined"
                  margin="normal"
                  value={formik.values.vendorPrice}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.vendorPrice && formik.errors.vendorPrice
                  }
                  error={
                    formik.touched.vendorPrice && formik.errors.vendorPrice
                  }
                />
              </Div>
              <Div>
                <Typography
                  sx={{
                    ml: "5px",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  Item Description*
                </Typography>
                <TextField
                  sx={{
                    fontWeight: 700,
                    width: "500px",
                  }}
                  label="Item Description"
                  name="itemDesc"
                  color="secondary"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={formik.values.itemDesc}
                  onChange={formik.handleChange}
                  helperText={formik.touched.itemDesc && formik.errors.itemDesc}
                  error={formik.touched.itemDesc && formik.errors.itemDesc}
                />
              </Div>
              <Div sx={{ display: "flex", gap: "100px" }}>
                <Div>
                  <Typography
                    sx={{
                      ml: "5px",
                      fontSize: "18px",
                      fontWeight: 700,
                    }}
                  >
                    Quantity*
                  </Typography>
                  <TextField
                    sx={{
                      fontWeight: 700,
                      width: "500px",
                    }}
                    label="Quantity"
                    name="quantity"
                    color="secondary"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={formik.values.quantity}
                    onChange={formik.handleChange}
                    helperText={
                      formik.touched.quantity && formik.errors.quantity
                    }
                    error={formik.touched.quantity && formik.errors.quantity}
                  />
                </Div>
                <Div>
                  <Typography
                    sx={{
                      ml: "5px",
                      fontSize: "18px",
                      fontWeight: 700,
                    }}
                  >
                    Total Cost*
                  </Typography>
                  <TextField
                    sx={{
                      fontWeight: 700,
                      width: "500px",
                    }}
                    label="Total Cost"
                    name="totalCost"
                    color="secondary"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={formik.values.totalCost}
                    onChange={formik.handleChange}
                    helperText={
                      formik.touched.totalCost && formik.errors.totalCost
                    }
                    error={formik.touched.totalCost && formik.errors.totalCost}
                  />
                </Div>
              </Div>
            </Div>
          </Div>
          <Div
            sx={{
              display: "flex",
              ml: "800px",
            }}
          >
            <LoadingButton
              onClick={formik.handleSubmit}
              type="submit"
              sx={{
                width: "150px",
                height: "40px",
                mt: "180px",
                mr: "20px",
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
              onClick={()=>nav("/rfpquotes")}
              sx={{
                width: "150px",
                height: "40px",
                mt: "180px",
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

export default VendorRfpCreate;
