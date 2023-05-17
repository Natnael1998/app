import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import "../notice.css"
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from '../context/AuthContext';
import {FaDownload} from "react-icons/fa"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { v4 } from 'uuid';
import {HiFilter} from "react-icons/hi"
const HomeWork = () => {
  const [searchText,setSearchText] = useState("")

  const {user} = UserAuth()
  const [row,setRow] = useState([])
  const [l,setl] = useState(true)
  const [sel,setsel] = useState("assignment")

  const getdata = () => {
    const q = query(collection(db,sel ));
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
  }, [sel]);


  const handleChange = (event) => {
    setsel(event.target.value);
    
  };


  return (
    <>
    <div className='topnav'>
      <p>Assignments</p>
      <div className='account'>
     <p >{user.email.slice(0,1).toUpperCase()}</p>

      </div>
      </div>

      <div className='df'>

<input className='search' type="text" name="" id="" 
placeholder='Search Subject'
value={searchText}
onChange={(e) => setSearchText(e.target.value)}
/>

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
<MenuItem value={`assignmentgerji`}>Gerji</MenuItem>
<MenuItem value={`assignmentgullele`}>Gullele</MenuItem>
<MenuItem value={`assignmentgurdshola`}>GurdShola</MenuItem>
</Select>
</FormControl>
</div>
</div>

    <div className='Notice'>
      {l && <svg viewBox="25 25 50 50">
  <circle r="20" cy="50" cx="50"></circle>
</svg>}
      {row.filter((val) => {
            if (searchText === "") {
                return val
            } else if (
                val.subject.toLowerCase().includes(searchText.toLowerCase())
            ){
                return val
            }
          }).map((i) => {
        return  <div className='cardd'>
<p>Subject : {i.subject}</p>
<p> {i.text}</p>
<a className='Dow' href={i.doc} target='__blank'><FaDownload  color='white' size={25} /></a>
        </div>
      })}
     
    </div>
    <div className="hh"></div>
    
    <NavBar />
    </>
  )
}

export default HomeWork