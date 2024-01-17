import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Chip, Typography } from '@mui/material';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.common.white,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CategoriesTable= () => {
  const emailFromRedux = useSelector((state) => state?.user?.userObject?.email);
  const [data, setData] = React.useState([]);
  const [val, setVal] = React.useState("Decativate");
  React.useEffect(() => {
    const getProfileData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/category`
        );
        console.log(response.data)

        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

      getProfileData();
  }, []);

  console.log(data)

  const isDataAvailable = Array.isArray(data) && data.length > 0;


  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>S.No</StyledTableCell>
          <StyledTableCell>Categories Name</StyledTableCell>
          <StyledTableCell>Status</StyledTableCell>
          <StyledTableCell>Action</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {isDataAvailable ? (
         data.map((admin, index) => (
          <StyledTableRow key={admin.id || index}>
            <StyledTableCell component="th" scope="row">{index + 1}</StyledTableCell>
            <StyledTableCell>{admin.categoryName}</StyledTableCell>
            <StyledTableCell> <Chip label={admin.isActive?"Active":"Deactivate"} color={val==="Deactivate"?"primary":"success"}></Chip></StyledTableCell>
            <StyledTableCell ><Typography sx={{color:"red", fontWeight:700,}}
            onClick = {() => {
              if(val === "Deactivate"){
                setVal("Active")
              }else{
                setVal("Deactivate")
              }
            }}
            > {val} </Typography ></StyledTableCell>
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
}

export default CategoriesTable;
