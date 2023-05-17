import React from 'react'
import { UserAuth } from '../context/AuthContext'
import NavBar from '../components/NavBar'
import { arrayUnion, collection, doc, getDoc, getDocs, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useEffect } from 'react'
import { useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../index.css"
import { async } from '@firebase/util'
const Attend = () => {
  const {user} = UserAuth()

  const [data, setData] = useState([
  ]);
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
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  useEffect(() => {
   
    onSnapshot(doc(db, 'attendance', user?.email), (doc) => { setData(doc.data()?.savedShows);
    });
  }, [user?.email]);


console.log(data)

  return (
  <>
   <div className='topnav'>
      <p>Attendance</p>
      <div className='account'>
     <p >{user?.email.slice(0,1).toUpperCase()}</p>

      </div>
    </div>
  
    <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.date}>
              <StyledTableCell align="left">
                <p  className={row.status == "present" ? "pre" : "abs"}> {row.status}</p>
               </StyledTableCell>
         
              <StyledTableCell align="left">{row.date}</StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <NavBar />

  </>
  )
}

export default Attend