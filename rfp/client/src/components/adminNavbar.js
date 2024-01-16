import React from "react";
import { Typography } from "@mui/material";
import Div from "./Shared/Div";
import { useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import velocity from "../images/velocity.png";
import ArticleIcon from "@mui/icons-material/Article";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NewspaperIcon from '@mui/icons-material/Newspaper';
const AdminNavbar = (data) => {
  const nameFromRedux = useSelector((state) => state?.user?.firstName);
  const IsloginFromRedux = useSelector((state) => state?.app?.isLogin);
  const theme = useTheme();
  const nav = useNavigate();
  console.log(IsloginFromRedux);

  return (
    <>
      <Div
        sx={{
          bgcolor: "white",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <Div
          top={0}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bgcolor="rgba(255, 239, 244, 0.95)"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
          p={2}
          sx={{
            height: "79px",
          }}
        >
          <Div
            sx={{
              minHeight: "100vh",
              width: "250px",
              backgroundColor: "#27333a",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Div
              sx={{
                ml: "20px",
                mt: "10px",
              }}
            >
              <img src={velocity} alt="Velocity" height={"80px"} />
            </Div>
            <Div
              sx={{
                display: "flex",
                mt: "30px",
              }}
            >
              <ArticleIcon
                sx={{ color: "#46565f", mt: "2px", mr: "10px", ml: "30px" }}
              />
              <Typography
                onClick={() => nav("/home")}
                sx={{
                  color: "#46565f",
                  fontSize: "20px",
                  fontWeight: 700,
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                Dashboard
              </Typography>
            </Div>
            <Div
              sx={{
                display: "flex",
                mt: "30px",
              }}
            >
              <NewspaperIcon
                sx={{ color: "#46565f", mt: "2px", mr: "10px", ml: "30px" }}
              />
              <Typography
                onClick={() => nav("/vendors")}
                sx={{
                  color: "#46565f",
                  fontSize: "20px",
                  fontWeight: 700,
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                Vendors
              </Typography>
            </Div>
            <Div
              sx={{
                display: "flex",
                mt: "30px",
              }}
            >
              <CopyAllIcon
                sx={{ color: "#46565f", mt: "2px", mr: "10px", ml: "30px" }}
              />
              <Typography
                onClick={() => nav("/rfpList")}
                sx={{
                  color: "#46565f",
                  fontSize: "20px",
                  fontWeight: 700,
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                RFP List
              </Typography>
            </Div>
            <Div
              sx={{
                display: "flex",
                mt: "30px",
              }}
            >
              <AssignmentIcon
                sx={{ color: "#46565f", mt: "2px", mr: "10px", ml: "30px" }}
              />
              <Typography
                onClick={() => nav("/rfpQuotes/admin")}
                sx={{
                  color: "#46565f",
                  fontSize: "20px",
                  fontWeight: 700,
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                RFP Quotes
              </Typography>
            </Div>
            <Div
              sx={{
                display: "flex",
                mt: "30px",
              }}
            >
              <DocumentScannerIcon
                sx={{ color: "#46565f", mt: "2px", mr: "10px", ml: "30px" }}
              />
              <Typography
                onClick={() => nav("/mainCategories")}
                sx={{
                  color: "#46565f",
                  fontSize: "20px",
                  fontWeight: 700,
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                Categories
              </Typography>
            </Div>
          </Div>
        </Div>

        <Div
          sx={{
            display: "flex",

            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Div
            sx={{
              margin: "0 30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Div>
              <Typography
                onClick={() => nav(`${nameFromRedux ? "/" : ""}`)}
                sx={{
                  fontFamily: theme.typography.fontFamily,
                  fontSize: "24px",
                  fontWeight: "300",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                {nameFromRedux ? `Welcome ${nameFromRedux}` : ""}
              </Typography>
            </Div>
            <Typography
              onClick={() => nav("/login")}
              sx={{
                fontFamily: theme.typography.fontFamily,
                fontSize: "24px",
                fontWeight: "300",
                color: "blue",
                ml: "20px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              {nameFromRedux ? `Logout` : ""}
            </Typography>
            <Div
              sx={{
                ml: "10px",
              }}
            ></Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default AdminNavbar;
