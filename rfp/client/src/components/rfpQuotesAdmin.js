import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import Div from "./Shared/Div";
import { useSelector } from "react-redux";
import axios from "axios";
import AdminNavbar from "./adminNavbar";
import VendorTable from "./vendorTable";
import QuotesTable from "./quotesTable";

const RfpQuotesAdmin = () => {
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
           RFP Quotes
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
            Home / <Typography>RFP Quotes</Typography>
          </Typography>
   
        </Div>
        <Div sx={{
          width:"1190px",
          ml:"300px",
          mt:"40px"
        }}>
        <QuotesTable />
      </Div>
      </Div>
    </>
  );
};

export default RfpQuotesAdmin;
