import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import "../notice.css"
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from '../context/AuthContext';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { v4 } from 'uuid';
import {HiFilter} from "react-icons/hi"
const Notice = () => {
  const {user} = UserAuth()
  const id = v4()
  const [row,setRow] = useState([])
  const [sel,setsel] = useState([])
  const [place,setPlace] = useState("announcment")
  const [l,setl] = useState(true)
  const getdata = () => {
    const q = query(collection(db, place));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setRow(list);
      setl(false)
    });
 
  };
  useEffect(() => {
    getdata();
  }, [place,sel]);
  const handleChange = (event) => {
    setsel(event.target.value);
    setPlace(event.target.value)
    console.log(place)
  };
  return (
    <>
    <div className='topnav'>
      <p>Notice</p>
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
    <MenuItem value="announcmentgerji">Gerji</MenuItem>
    <MenuItem value="announcmentgullele">Gullele</MenuItem>
    <MenuItem value="announcmentgurdshola">GurdShola</MenuItem>
  </Select>
</FormControl>
</div>
    <div className='Notice'>

      {l && <svg viewBox="25 25 50 50">
  <circle r="20" cy="50" cx="50"></circle>
</svg>}


      {row.map((i) => {
        return  <div className='cardd'>
<p>Time : {i.date}</p>
<p> {i.text}</p>
        </div>
      })}
     
    </div>
    <div className="hh"></div>

    
    <NavBar />
    </>
  )
}

export default Notice