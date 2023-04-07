import { collection, getDocs, onSnapshot, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {AiFillFileText} from "react-icons/ai"
import { db } from './firebase'

const GetAssigment = () => {
  const [n,setN]  = useState([])
  const getdata =  () => {
   
    getDocs(collection(db, "assignments"))
    .then((res) => {
      setN(res.docs.map((i) => { return i.data()}))
      
    })
    
    
    

    
  };
  useEffect(() => {getdata()},[])

  return (
    <>
    <div className="workContain">
<div className="work">
{n.map((i)=> {
            
            return<div className="na">
            <h1>Subject: {i.subject}</h1>
            <h1>Due Date: {i.date}</h1>
            <h1>Comment: {i.comment}</h1>
            
            
            <div className='nnn'>
              <div>
              <h2 >Download Assignment</h2>
              <a href={`${i.doc}`} >
              
              <AiFillFileText size={35} color="white"/>
            </a>

           

              </div>
            
            

            
            </div>
             
            
              </div>
            
          
            
          
           
        })
        
              
}

</div>
    </div>
    
    </>
  )
}

export default GetAssigment