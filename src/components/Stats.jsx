import React from 'react'
import NavBar from './NavBar'
import { UserAuth } from '../context/AuthContext'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import { useState } from 'react'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { v4 } from 'uuid';
import {HiFilter} from "react-icons/hi"
import "./Stats.css"
const Stats = () => {
    const {user} = UserAuth()
  const [sel,setsel] = useState("Avg")

    const [dataS, setDataS] = useState({
        math: "",
        biology: "",
        chemistry: "",
        civics: "",
        english: "",
        it: "",
      });




      const handleChange = (event) => {
        setsel(event.target.value);
      
      };
      const getdata = async () => {
       
        
        const docRef = doc(db, sel, user.email);
        const docSnap = await getDoc(docRef);
          setDataS(docSnap.data())
      };
      useEffect(() => {
        getdata();
      }, [sel]);
    
    const data = [
        {
          "name": "Chem",
        
          "subject": dataS.chemistry
        },
        {
          "name": "Bio",
         
          "subject": dataS.biology
        },
        {
          "name": "Maths",
        
          "subject": dataS.math
        },
        {
          "name": "ICT",
         
          "subject": dataS.it
        },
        {
          "name": "Civics",
         
          "subject": dataS.civics
        },
        
      ]

  return (
    <>
     <div className='topnav'>
   
   <p>Statistics</p>
   <div className='account'>
  <p >{user.email.slice(0,1).toUpperCase()}</p>

   </div>
 </div>

 <div className='filter'>
        <HiFilter className='filterIcon'  color='gray' size={30}/>
      <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label" >Filter</InputLabel>
  <Select
  className='gh'
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={sel}
    label="Filter"
    onChange={handleChange}
  >
    <MenuItem value="Avg">Average</MenuItem>
    <MenuItem value="Mid">Mid</MenuItem>
    <MenuItem value="Final">Final</MenuItem>
  </Select>
</FormControl>
</div>

 <div className='Bar'>


 <BarChart width={340} height={400} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
 
  <Bar dataKey="subject" fill="#8884d8" />
</BarChart>

 </div>
    
    <NavBar />
    </>
  )
}

export default Stats