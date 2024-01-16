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
import { Chip } from "@mui/material";

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

const QuotesTable = () => {
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

  console.log(data);

  const isDataAvailable = Array.isArray(data) && data.length > 0;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>S.no</StyledTableCell>
            <StyledTableCell>RFP No</StyledTableCell>
            <StyledTableCell>Item Name</StyledTableCell>
            <StyledTableCell>Vendor ID</StyledTableCell>
            <StyledTableCell>Vendor Price</StyledTableCell>
            <StyledTableCell>Quantity</StyledTableCell>
            <StyledTableCell>Total Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isDataAvailable ? (
            data
              .filter((vendor) => vendor.vendorItemDesc)
              .map((vendor, index) => (
                <StyledTableRow key={vendor.id || index}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell>{index+10}</StyledTableCell>
                  <StyledTableCell>{vendor.firstName}</StyledTableCell>
                  <StyledTableCell>{vendor.email}</StyledTableCell>
                  <StyledTableCell>{vendor.vendorPrice}</StyledTableCell>
                  <StyledTableCell>{vendor.vendorItemQuantity}</StyledTableCell>
                  <StyledTableCell>{vendor.vendorTotalCost}</StyledTableCell>
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

export default QuotesTable;
