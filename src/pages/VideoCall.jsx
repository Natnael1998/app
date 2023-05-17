import React from 'react'
import NavBar from '../components/NavBar'
import "../book.css"
import { UserAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
const VideoCall = () => {
  const {user,logOut} = UserAuth()

  return (
   <>
     <div className='topnav'>
      <p>Books</p>
      <div className='account'>
     <p >{user?.email.slice(0,1).toUpperCase()}</p>

      </div>
    </div>


<div className='Books'>
<Link className='Book' to="/book/textBook">

<div >
  <p>Text Books</p>
</div>
</Link>

<Link className='Book' to="/book/powerpoint">

<div >
  <p>Power Point</p>
</div>
</Link>

<Link className='Book' to="/book/centnote">

<div >
  <p>Centralized Note</p>
</div>
</Link>
</div>

   <NavBar/>
   </>
  )
}

export default VideoCall