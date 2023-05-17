import React, { useEffect, useState } from 'react'
import "../home.css"
import NavBar from '../components/NavBar';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { UserAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import { FiVideo } from 'react-icons/fi';
import {GoGraph} from 'react-icons/go'
import {BsCalendar, BsPencilSquare} from "react-icons/bs"

import {BiMenuAltRight} from "react-icons/bi"


const Home = () => {
 
  const [show,setShow] = useState(false)

  const {user} = UserAuth()


  const [data,setData] = useState({name:"",email:"",password:""})
  const getdata = async () => {
    const docRef = doc(db, "marklist", user.email);
    const docSnap = await getDoc(docRef);
    setData(docSnap.data())
  };
  useEffect(() => {
    getdata();
  }, []);

 
 
  return (
  <div className='Homee'>
  <div className='topnav'>
   
      <p>Hello, <p className='Nnn'>{data.name}</p></p> 
      <div>
      <div onClick={() => setShow(!show)} style={{position:"relative"}}>
  <BiMenuAltRight size={35}/>

      </div>
     {show &&  <div className='menuHome'>
<div className='center '> 
<a className='Link ' href='https://school-video-chat.netlify.app' target='_blank'>
 <div className='hoverr' style={{marginBottom:"10px"}}>
    
<p>Video Call</p>
  </div>
 </a>

 
<Link className='Link ' to="/assignment">


 
 
    <div className='hoverr'>

    <p>Assigments</p>
    </div>

</Link>

</div>
</div>
     }


      </div>


    </div>
    

    <div className='Home'>




     
<div className='Homescroll'>


<Link className='Link' to="/result/Mid">
<div className='carde card1'>
<p>Mid Exams</p>
<div className='circle'>
<h1>25%</h1>
</div>

</div>
</Link>

<Link className='Link' to="/result/Final">
<div className='carde card2'>
<p>Final Exams</p>
<div className='circle'>
<h1>50%</h1>
</div>

</div>
</Link>



<Link className='Link' to="/mock">
<div className='carde card5'>
<p>Mock and Model</p>
<div className='circle'>
<h1>50%</h1>
</div>

</div>
</Link>
<Link className='Link' to="/result/Avg">
<div className='carde card3'>
<p>Average</p>
<div className='circle'>
<h1>100%</h1>
</div>

</div>
</Link>
</div>


<Link className='Link' to="/attend">
<div className='boxContain'>
<div className='c'>
<FaCalendarAlt  size={25}/>
</div>
<p>Attendance</p>

</div>
</Link>


<Link className='Link' to="/stats">
<div className='boxContain'>
<div className='c'>
<GoGraph size={25}/>
</div>
<p>Statistics</p>

</div>
</Link>

<Link className='Link' to="/cal">
<div className='boxContain'>
<div className='c'>
<BsCalendar size={25}/>
</div>
<p>Calender</p>

</div>
</Link>



{/* <div className='ma'>

<a className='Link' href='https://school-video-chat.netlify.app' target='_blank'>
 <div className='boxContain'>
    <FiVideo size={25}/>
<p>Video Call</p>
  </div>
 </a>

 
<Link className='Link' to="/assignment">


  <div className='boxContain'>
   <BsPencilSquare  size={25}/>
    <p>Assigments</p>
  </div>
</Link>




<Link className='Link' to="/attend">
<div className='boxContain'>
<div className='c'>
<FaCalendarAlt  size={25}/>
</div>
<p>Attendance</p>

</div>
</Link>


<Link className='Link' to="/stats">
<div className='boxContain'>
<div className='c'>
<GoGraph size={25}/>
</div>
<p>Statistics</p>

</div>
</Link>

<Link className='Link' to="/cal">
<div className='boxContainn'>
<div className='c'>
<BsCalendar size={25}/>
</div>
<p>Calender</p>

</div>
</Link>


</div> */}


<div className='hh'></div>
    </div>

  

  <NavBar />
  </div>
  )
}

export default Home;