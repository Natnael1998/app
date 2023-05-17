import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import "../settings.css"
import {CgProfile} from "react-icons/cg"
import {AiOutlineMail} from "react-icons/ai"
import {RiLockPasswordLine} from "react-icons/ri"
import {BiExit} from "react-icons/bi"
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
  const nav = useNavigate()
  const {user,logOut} = UserAuth()
  const [data,setData] = useState({name:"",email:"",password:""})
  const getdata = async () => {
    const docRef = doc(db, "marklist", user.email);
    const docSnap = await getDoc(docRef);
    setData(docSnap.data())
  };
  useEffect(() => {
    getdata();
  }, []);
  const handle = async() => {
    await logOut()
    nav("/")

  }
  return (
    <>
    <div className='topnav'>
      <p>User Settings</p>
      <div className='account'>
     <p >{user.email.slice(0,1).toUpperCase()}</p>

      </div>
    </div>
    <div className='Settings'>
      <div className='SettingsItems'>
        <CgProfile className='icon' size={35}/>
        <input value={data.name} type="text" />
      </div>
      <div className='SettingsItems'>
        <AiOutlineMail className='icon' size={35}/>
        <input value={data.email} type="text" />
      </div>
      <div className='SettingsItems'>
        <RiLockPasswordLine className='icon' size={35}/>
        <input value={data.password} type="text" />
      </div>
      <div className='line'></div>
      <div className='SettingsItemss' onClick={handle}>
        <BiExit className='icon' color='red' size={35}/>
        <button>Change User</button>
      </div>
    </div>
   <NavBar/>
   </>
  )
}

export default Settings