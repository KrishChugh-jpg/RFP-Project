import React, { useEffect, useState } from "react";
import { Autocomplete, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
import AdminNavbar from "./components/adminNavbar";
import Div from "./components/Shared/Div";
import { useFormik } from "formik";
import { categoryRfpCreate } from "./Api/login";
import { useNavigate } from "react-router-dom";

const RfpCreate = () => {
  const nav = useNavigate();
    const emailFromRedux = useSelector((state) => state?.user?.userObject?.email);
    const [data, setData] = React.useState([]);
    const vendorOptions = data.map(vendor => vendor.firstName);

    React.useEffect(() => {
      const getProfileData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:4000/api/user/vendor`
          );
          console.log(response.data.data)
  
          setData(response.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      if (emailFromRedux) {
        getProfileData();
      }
    }, [emailFromRedux]);
  
    console.log(data)

  const formik = useFormik({
    initialValues: {
      itemName: "",
      itemDesc: "",
      quantity: "",
      lastDate: "",
      maxPrice: "",
      minPrice: "",
      vendor: "",
    },
    enableReinitialize: true,
    onSubmit: async (value) => {
      console.log(emailFromRedux)
      console.log(value);
      const body = {
        ...value,
        email:emailFromRedux,
      };
      const response = await categoryRfpCreate(body);
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
            Home / <Typography>RFP/ RFP Create</Typography>
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
                gap: "120px",
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
                  Item Name*
                </Typography>
                <TextField
                  sx={{
                    fontWeight: 700,
                  }}
                  label="Item Name"
                  name="itemName"
                  color="secondary"
                  variant="outlined"
                  margin="normal"
                  value={formik.values.itemName}
                  onChange={formik.handleChange}
                  helperText={formik.touched.itemName && formik.errors.itemName}
                  error={formik.touched.itemName && formik.errors.itemName}
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
                  }}
                  label="Quantity"
                  name="quantity"
                  color="secondary"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={formik.values.quantity}
                  onChange={formik.handleChange}
                  helperText={formik.touched.quantity && formik.errors.quantity}
                  error={formik.touched.quantity && formik.errors.quantity}
                />
              </Div>
            </Div>
            <Div sx={{ display: "flex", mt: "15px" }}>
              <Typography
                sx={{
                  ml: "5px",
                  fontSize: "18px",
                  fontWeight: 700,
                  mt: "30px",
                  mr: "10px",
                }}
              >
                Last Date*
              </Typography>
              <TextField
                type="date"
                sx={{
                  fontWeight: 700,
                }}
                label="Last Date"
                name="lastDate"
                color="secondary"
                variant="outlined"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                value={formik.values.lastDate}
                onChange={formik.handleChange}
                helperText={formik.touched.lastDate && formik.errors.lastDate}
                error={formik.touched.lastDate && formik.errors.lastDate}
              />
              <Div
                sx={{
                  ml: "300px",
                }}
              >
                <Typography
                  sx={{
                    ml: "5px",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  Minimum Price*
                </Typography>
                <TextField
                  sx={{
                    fontWeight: 700,
                    mt: "5px",
                  }}
                  label="Minimum Price"
                  name="minPrice"
                  color="secondary"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={formik.values.minPrice}
                  onChange={formik.handleChange}
                  helperText={formik.touched.minPrice && formik.errors.minPrice}
                  error={formik.touched.minPrice && formik.errors.minPrice}
                />
              </Div>
            </Div>
            <Div sx={{display:"flex"}}>

            <Div >
              <Typography
                sx={{
                  ml: "5px",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                Maximum Price*
              </Typography>
              <TextField
                sx={{
                  fontWeight: 700,
                  mt: "5px",
                }}
                label="Maximum Price"
                name="maxPrice"
                color="secondary"
                variant="outlined"
                margin="normal"
                value={formik.values.maxPrice}
                onChange={formik.handleChange}
                helperText={formik.touched.maxPrice && formik.errors.maxPrice}
                error={formik.touched.maxPrice && formik.errors.maxPrice}
              />
            </Div>
            <Div sx={{display:"flex",flexDirection:"column",ml:"350px"}}>
            <Typography
            sx={{
              ml: "5px",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
           Vendors*
          </Typography>

          <Autocomplete
            disablePortal
            options={vendorOptions}
            color="secondary"
            name="vendor"
            value={formik.values.vendor}
            onChange={(e, v) => formik.setFieldValue("vendor", v)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Vendors"
                name="vendor"
                variant="outlined"
                margin="normal"
                sx={{
                  fontWeight: 700,
                  width: "250px",
                  mt:"5px"
                }}
                color="secondary"
              />
            )}
          />
          </Div>

            </Div>
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
              onClick={()=>nav("/mainCategories")}
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

export default RfpCreate;
