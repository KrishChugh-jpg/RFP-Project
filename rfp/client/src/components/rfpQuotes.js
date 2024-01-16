import React from "react";

import { Typography } from "@mui/material";
import Div from "./Shared/Div";
import Navbar from "./navbar";
import VendorQuotesTable from "./quotesTableVendor";
import { LoadingButton } from "@mui/lab";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

const RfpQuotes = () => {
  const nav = useNavigate();

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
          <Div sx={{display:"flex",flexDirection:"column"}}>
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
          
          {/* <LoadingButton
              type="submit"
              onClick={() => nav("/vendor/rfpcreate")}
          
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
             
              Quotes Create
              <AddIcon sx={{ml:"5px"}} />
            </LoadingButton> */}
            </Div>

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
        <VendorQuotesTable />
      </Div>
      </Div>
    </>
  );
};

export default RfpQuotes;
