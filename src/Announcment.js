import React, { useState, useEffect } from 'react'
import { collection,setDoc,doc,addDoc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import './ann.css'
import { useNavigate } from 'react-router-dom';
import { Tune } from '@mui/icons-material';


const Announcment = () => {
    const [password,setPassword]=useState('')
    const [data, setData] = useState([]);
 
    const [show, setShow] = useState(false);
      const navigate = useNavigate();
    

      const GetData = async () => {
       onSnapshot(collection(db, "marklist"), (snapshot) =>
         setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
       )
      };
      

     useEffect(() => {
       GetData();
     }, []);
    const submit = async(e) => {
      e.preventDefault();
     const citiesRef = collection(db, "announcment");

     // Add a new document with a generated id
     const docRef = await addDoc(citiesRef, {
       text:password
     });
     data.map((datas) => {
      const config = {
        Host: "smtp.elasticemail.com",
        Username: "naol937.bak@gmail.com",
        Password: "38C137EF07D60A995237304E9141CA45A97F",
        To: datas.email,
        port: 2525,
        From: "naol937.bak@gmail.com",
        Subject: "ETHIO-PARENTS-SCHOOL",
        Body: password,
      };
      window.Email.send(config).then()
 

})
        

        
           
               
          
        
            


        
    }
    
    
    return (
    <>
    
      {show ?   <div class="AnnouncmentForm">
      <textarea
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={submit} >submit</button>
    </div> :  <form class="formms">
      <span class="titlee">Director</span>
      <p class="description">Enter the code provided by the admins.</p>
      <div>
        <input
        
          placeholder="Enter Your code"
          id="email-address"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
              />
              
        <button
          onClick={(e) => {
            e.preventDefault()
            if (password == "1234") {
             setShow(!show)
            } else {
              alert("the password ain't right ");
            }
          }}
        >
          Submit
        </button>
      </div>
    </form>}
      
    </>
    );
 
}

export default Announcment