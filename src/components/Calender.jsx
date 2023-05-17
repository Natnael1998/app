import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import NavBar from './NavBar';
import { UserAuth } from '../context/AuthContext';
import { Alert } from '@mui/material';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase';
import { useEffect } from 'react';

const Calender = () => {
  const [date, setDate] = useState(new Date());
  const [row, setRow] = useState([]);
  const [show, setShow] = useState(false);
  const [text,setText] = useState("")
   
  useEffect(() => {
    const q = query(collection(db, "cal"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setRow(list);
    
    });
  },[])
  const getData =  (e) => {
   
row.map((i) => {

  if(e.toDateString() == i.date){
    setText(i.text)
    setShow(true)
    setInterval(() => {setShow(false)},2500)
    
 }
 else{
    return
    
 }
})


  }

  const {user} = UserAuth()

  
  return (
<>
<div className='topnav'>
   
   <p>Calender</p>
   <div className='account'>
  <p >{user.email.slice(0,1).toUpperCase()}</p>

   </div>
 </div>
{show &&  <Alert variant="filled" severity="info">
    <p style={{fontSize:"15px"}}>{text}</p>
  </Alert>}
<div className='appp'>
      <h1 className='text-center'>School Calendar</h1>
      <div className='calendar-container'>
        <Calendar  className="jh" onClickDay={getData} onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>

<NavBar />
</>
  )
}

export default Calender
