import React from 'react'
import { UserAuth } from '../context/AuthContext';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './NavBar';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase';
import { useEffect } from 'react';
import {FaDownload} from "react-icons/fa"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { v4 } from 'uuid';
import {HiFilter} from "react-icons/hi"
const Books = () => {
    const { user } = UserAuth();
    const [searchText,setSearchText] = useState("")

    const n = useParams();
    const [p, setP] = useState();
    const [row,setRow] = useState([])
    const [l,setl] = useState(true)
    const [sel,setsel] = useState(n.id)

    const getdata = () => {
      const q = query(collection(db, sel));
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
       <div className="topnav">
        <p>Resources</p>
        <div className="account">
          <p>{user?.email.slice(0, 1).toUpperCase()}</p>
        </div>
      </div>
      <div className='Notice'>
        
        
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
    <MenuItem value={`${n.id}gerji`}>Gerji</MenuItem>
    <MenuItem value={`${n.id}gullele`}>Gullele</MenuItem>
    <MenuItem value={`${n.id}gurdshola`}>GurdShola</MenuItem>
  </Select>
</FormControl>
</div>
        </div>
        
      


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
<a className='Dow' href={i.doc} target='__blank'><FaDownload  color='dodgerblue' size={25} /></a>
        </div>
      })}
     
    </div>
    <div className='gh' ></div>
      <NavBar />

    </>
  )
}

export default Books