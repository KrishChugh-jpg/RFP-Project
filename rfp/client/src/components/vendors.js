import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import Div from "./Shared/Div";
import { useSelector } from "react-redux";
import axios from "axios";
import AdminNavbar from "./adminNavbar";
import VendorTable from "./vendorTable";

const VendorList = () => {
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
            Vendor List
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
            Home / <Typography>Vendors</Typography>
          </Typography>
   
        </Div>
        <Div sx={{
          width:"1190px",
          ml:"300px",
          mt:"40px"
        }}>
        <VendorTable />
      </Div>
      </Div>
    </>
  );
};

export default VendorList;
