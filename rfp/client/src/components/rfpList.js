import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import Div from "./Shared/Div";
import { useSelector } from "react-redux";
import axios from "axios";
import AdminNavbar from "./adminNavbar";
import VendorTable from "./vendorTable";
import RfpTable from "./rfpTable";
import { LoadingButton } from "@mui/lab";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
const RfpList = () => {
  const nav = useNavigate();
  return (
    <>
      <AdminNavbar />

      <Div >
        <Div
          sx={{
            alignContent: "center",
            display: "flex-box",
            flexDirection: "initial",
            justifyContent:"normal"
          }}
          // sx={{display:"flex",flexDirection:"column",justifyContent: "space-between",}}
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
            RFP List
          </Typography>
          <LoadingButton
              type="submit"
              onClick={() => nav("/categories/rfpcreate")}
          
              sx={{
                width: "170px",
                height: "40px",
                mt: "10px",
                ml:"300px",
                borderRadius: "6px",

                backgroundColor: "#0cc065",
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
             
              Add RFP
              <AddIcon sx={{ml:"5px"}} />
            </LoadingButton>
          <Typography
            sx={{
              color: "black",
              fontSize: "20px",
              fontWeight: 700,
              mt: "40px",
              mr: "50px",
            }}
          >
            Home / <Typography>RFP List</Typography>
          </Typography>
   
        </Div>
        <Div sx={{
          width:"1190px",
          ml:"300px",
          mt:"40px"
        }}>
        <RfpTable />
        
      </Div>
      </Div>
    </>
  );
};

export default RfpList;
