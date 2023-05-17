import React, { useState } from 'react'
import "../navbar.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {AiFillHome} from "react-icons/ai"
import {FiVideo} from "react-icons/fi"
import {IoSettings} from "react-icons/io5"
import {TfiAnnouncement} from "react-icons/tfi"
import {ImBook, ImNewspaper} from "react-icons/im"
import { UserAuth } from '../context/AuthContext';
import {
  BsFillBagCheckFill,
  BsFillHouseFill,
  BsFillChatSquareFill,
  BsClockFill,
  BsGearFill,
} from "react-icons/bs";
const NavBar = () => {
const {value,setValue} = UserAuth()
const menus = [
  {
    icon: <BsFillHouseFill size={25} />,
    name: "Home",
    nav:"home"
  },
  {
    icon: <ImNewspaper size={25} />,
    name: "Test",
    nav: "test"
  },
  {
    icon: <ImBook size={25} />,
    name: "Books",
    nav:"videocall"
  },
 
  {
    icon: <TfiAnnouncement size={25} />,
    name: "Notice",
    nav:"notice"
  },
  {
    icon: <BsGearFill size={25} />,
    name: "Settings",
    nav:"settings"
  },
];

  
      const nav = useNavigate()
      return (
        <div className='botoom'>
          {/* <Box >
        <BottomNavigation
        className='b'
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          
          }}
        >
         
          
          <BottomNavigationAction onClick={() => nav("/home")} label="Home" icon={<AiFillHome   size={20} />} />
          
       
          <BottomNavigationAction onClick={() => nav("/test")} label="Test" icon={<ImNewspaper  size={20} />} />
          
          
          <BottomNavigationAction onClick={() => nav("/videocall")} label="Books" icon={<ImBook  size={20} />} />
          <BottomNavigationAction onClick={() => nav("/notice")} label="Notice" icon={<TfiAnnouncement   size={20}/>} />
          
          <BottomNavigationAction onClick={() => nav("/settings")} label="Settings" icon={<IoSettings  size={20} />} />
        </BottomNavigation>
      </Box> */}

<div className="navigation">
      <ul>
        {menus.map((val, index) => {
          return (
            <li
              onClick={() => {
                setValue(index)
                nav(`/${val.nav}`)
              }}
              key={index}
              className={index === value ? "active" : ""}
            >
              <div className="iconn">{val.icon}</div>
              <div className="name">{val.name}</div>
            </li>
          );
        })}
        <div className="menu-bg" />
      </ul>
    </div>

        </div>
      );
}

export default NavBar