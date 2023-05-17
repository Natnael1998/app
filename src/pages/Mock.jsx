import React from 'react'
import { UserAuth } from '../context/AuthContext'
import NavBar from '../components/NavBar'
import { useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useState } from 'react'

const Mock = () => {
    const {user} = UserAuth()
    const [data, setData] = useState({
        math: "",
        biology: "",
        chemistry: "",
        civics: "",
        english: "",
        it: "",
      });
      const [data2, setData2] = useState({
        math: "",
        biology: "",
        chemistry: "",
        civics: "",
        english: "",
        it: "",
      });
      const [data3, setData3] = useState({
        math: "",
        biology: "",
        chemistry: "",
        civics: "",
        english: "",
        it: "",
      });
      const [data4, setData4] = useState({
        math: "",
        biology: "",
        chemistry: "",
        civics: "",
        english: "",
        it: "",
      });
      const [dataM, setDataM] = useState({
        math: "",
        biology: "",
        chemistry: "",
        civics: "",
        english: "",
        it: "",
      });
      const getdata = async () => {
       
      
        const docRef = doc(db, "mockExam1", user.email);
        const docSnap = await getDoc(docRef || "");
        

        const docReff2 = doc(db, "mockExam2", user.email);
        const docSnapp2 = await getDoc(docReff2 || "");
        
        const docReff3 = doc(db, "mockExam3", user.email);
        const docSnapp3 = await getDoc(docReff3 || "");
        
        

        const docReff4 = doc(db, "mockExam4", user.email);
        const docSnapp4 = await getDoc(docReff4 || "");
        
        
      
        
        const docRef2 = doc(db, "model1", user.email);
        const docSnap2 = await getDoc(docRef2 || "");
        
        
        
        
     
        
       
        setData(docSnap.data())
        setDataM(docSnap2.data())


        setData2(docSnapp2.data())
        setData3(docSnapp3.data()) 
        setData4(docSnapp4.data())

      };
      useEffect(() => {
        getdata();
      }, []);
    
console.log(user.email)

  return (
 <>
  <div className='topnav'>
   
   <p>Mock and Model</p>
   <div className='account'>
  <p >{user.email.slice(0,1).toUpperCase()}</p>

   </div>
 </div>
 
 <div className='mock'>

 <div className='cardd'>
<p>Mock Exam 1</p>
<p>Chemistry      {data.chemistry} / 25%</p>

 </div>
 <div className='cardd'>
<p>Mock Exam 2</p>
<p>Chemistry {data2.chemistry } / 25%</p>
 </div>
 <div className='cardd'>
<p>Mock Exam 3</p>
<p>Chemistry {data3.chemistry} / 25%</p>
 </div>
 <div className='cardd'>
<p>Mock Exam 4</p>
<p>Chemistry {data4.chemistry} / 25%</p>
 </div>
 <div className='cardd'>
<p>Mock Exam 5</p>
<p>Chemistry {data.chemistry} / 25%</p>
 </div>


 <div className='cardd'>
<p>Model 1</p>
<p>Chemistry {dataM.chemistry} / 25%</p>
 </div>
 </div>
 <div className='hh'></div>
 
 
 <NavBar />
 </>


  )
}

export default Mock