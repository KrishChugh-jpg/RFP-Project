import React from "react";
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import Div from "./Shared/Div";

const DashBoard = () => {
  return (
    <>
    <Div >
   <Div sx={{alignContent:"center",display:"flex",justifyContent:"space-between"}}>
   <Typography sx={{
        color:"black",
        fontSize:"25px",
        fontWeight:700,
        mt:"30px",
        ml:"300px"
        
        
    }}>
        Dashboard
    </Typography>
   <Typography sx={{
        color:"black",
        fontSize:"20px",
        fontWeight:700,
        mt:"40px",
        mr:"50px"
        
        
        
    }}>
        Home
    </Typography>
      
      </Div>
      <Div sx={{
        width:"1200px",
        height:"50px",
        mt:"30px",
     
        bgcolor: "#8080802b",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          marginLeft:"290px"
      }}><Typography sx={{
        
        fontSize:"22px",
        fontWeight:500,
        ml:"20px",
        mt:"30px",
        alignItems:"center",
        display:"flex"
      }}>Welcome to RFP System.</Typography></Div>
      </Div>
    </>
  );
};

export default DashBoard;
