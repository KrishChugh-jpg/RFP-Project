import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import axios from "axios";
import { Chip, Typography } from "@mui/material";
import moment from 'moment';
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.common.white,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const VendorQuotesTable = () => {
  const formatDate = (dateString) => {
    return moment(dateString).format('YYYY-MM-DD');
};
  const emailFromRedux = useSelector((state) => state?.user?.userObject?.email);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getProfileData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/user/admin`
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

  const isDataAvailable = Array.isArray(data) && data.length > 0 ;
  const nav = useNavigate();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>RFP No</StyledTableCell>
            <StyledTableCell>RFP Title</StyledTableCell>
            <StyledTableCell>RFP Last Date</StyledTableCell>
            <StyledTableCell>Minimum Amount</StyledTableCell>
            <StyledTableCell>Maximum Amount</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isDataAvailable ? (
            data
            .filter(vendor => vendor.rfpitemName) 
            .map((vendor, index) => (
              <StyledTableRow key={vendor.id || index}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell>{vendor.rfpitemName}</StyledTableCell>
                <StyledTableCell>{formatDate(vendor.rfplastDate)}</StyledTableCell>
                <StyledTableCell>{vendor.rfpmaxPrice}</StyledTableCell>
                <StyledTableCell>{vendor.rfpminPrice}</StyledTableCell>
                <StyledTableCell>
                  {" "}
                  <Chip label="Open" color="success"></Chip>
                </StyledTableCell>
                <StyledTableCell>
                  {/* add here */}
                  <Typography sx={{ color: "#0cc065", fontWeight: 700 }} onClick={() => nav("/vendor/rfpcreate")}>
                    {" "}
                    
                    Apply{" "}
                  </Typography>
                </StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <StyledTableRow>
              <StyledTableCell colSpan={6}>No data available</StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VendorQuotesTable;
