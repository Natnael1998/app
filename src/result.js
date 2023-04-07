import { collection, getDocs, query, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams,useNavigate } from "react-router-dom";
import "./result.css";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { UserAuth } from "./AuthContext";
const Result = () => {
  const [data,setData] =  useState({})
  const [avg, setAvg] = useState({biology:"",chemistry:"",math:"",hpe:"",it:""});
  const [mid, setMid] = useState({biology:"",chemistry:"",math:"",hpe:"",it:""});
  const [final, setFinal] = useState({biology:"",chemistry:"",math:"",hpe:"",it:""});
  const [code, setCode] = useState("");
  const [show, setShow] = useState(false);
  const [showMid, setShowMid] = useState(true);
  const [showFinal, setShowFinal] = useState(false);
  const [online, setOnline] = useState(false);
  const [color, setColor] = useState("")
  const [message,setMessege]=useState("")
  const [showAverage, setShowAverage] = useState(false);
  const { user} = UserAuth();
  
  
  

  const navigate = useNavigate();
  const p = useParams();

  const GetData = async () => {
      const docRef = doc(db, "marklist",user.email);
     
    const docSnap = await getDoc(docRef);
    setData(docSnap.data());
  };
  const co = () => {
    if (average >= 90) {
      setColor("you did great job");
    } else if (average >= 80) {
      setColor("very good");
    } else if (average >= 70) {
      setColor("good");
    } else if (average >= 60) {
      setColor("you have to read ");
    }
    
  }
  useEffect(() => {
    GetData();

  }, []);

  
  const GetData2 = async () => {
    const docRef = doc(db, "Mid11", user.email);
   
  const docSnap = await getDoc(docRef);
  
  const docRef2 = doc(db, "Final11", user.email);
   
  const docSnap2 = await getDoc(docRef2);
  
  const docRef3 = doc(db, "Avg11", user.email);
   
  const docSnap3 = await getDoc(docRef3);
if(docSnap.data()){

  setMid(docSnap.data());
}
if(docSnap2.data()){

  
  setFinal(docSnap2.data());
}
if(docSnap3.data()){

 
  setAvg(docSnap3.data());
}

};
useEffect(() => {
  GetData2();
}, []);
  
  const handle = (e, event) => {
    console.log(e);
  };
  const average =
    Math.floor(
    (parseFloat(avg.math) +
      parseFloat(avg.chemistry) +
      parseFloat(avg.physics)) /
    
    3);


    return (
      <>
        {show ? (
          
          <div >
        <div className="bc">

        <button  className="b" onClick={() =>{ 
      setShowMid(true) 
    setShowAverage(false) 
    setShowFinal(false)
    }} key="one">Mid  result</button>
    <button  className="b" onClick={() =>{ 
      setShowMid(false) 
      setShowAverage(false) 
     setShowFinal(true) } } key="two">Final  result</button>
    <button className="b"  onClick={() =>{ 
      setShowAverage(true) 
      setShowFinal(false)
      setShowMid(false)
    }} key="three">Average result</button>
        </div>

            {showMid ? (
              
              <div class="pack_card">
                <div className="btn" >
                  <button
                    onClick={(e) => {
                      setShow(!show);
                    }}
                  >
                    <svg
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 1024 1024"
                    >
                      <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                    </svg>
                    <span>Back</span>
                  </button>
                </div>
                <div class="banner">
                  <span class="banner">{mid.name}</span>
                </div>
                <div class="pack_name">your results</div>

                <div class="lists">
                  <div class="list">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>biology:{mid.biology}</span>
                  </div>
                  <div class="list">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>english:{mid.english}</span>
                  </div>
                  <div class="list">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>

                    <span>math:{mid.math}</span>
                  </div>
                  <div class="list">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>

                    <span>physics:{mid.physics}</span>
                  </div>
                  <div class="list">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>chemistry:{mid.chemistry}</span>
                  </div>
                </div>
               
              </div>
            ) : null}
            {showFinal ? (
              <div class="pack_card">
                <div className="btn">
                  <button
                    onClick={(e) => {
                      setShow(!show);
                    }}
                  >
                    <svg
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 1024 1024"
                    >
                      <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                    </svg>
                    <span>Back</span>
                  </button>
                  
                </div>
                <div class="banner">
                  <span class="banner_tag">{final.name}</span>
                </div>
                <div class="pack_name">your results</div>

                <div class="lists">
                  <div class="list">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>biology:{final.biology}</span>
                  </div>
                  <div class="list">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>english:{final.english}</span>
                  </div>
                  <div class="list">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>

                    <span>math:{final.math}</span>
                  </div>
                  <div class="list">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>

                    <span>physics:{final.physics}</span>
                  </div>
                  <div class="list">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>chemistry:{final.chemistry}</span>
                  </div>
                </div>
             
                </div>
             
            ) : null}
            {showAverage ? (
              <div class="pack_card">
                <div className="btn">
                  <button
                    onClick={(e) => {
                      setShow(!show);
                    }}
                  >
                    <svg
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 1024 1024"
                    >
                      <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                    </svg>
                    <span>Back</span>
                  </button>
                </div>
                <div class="banner">
                  <span class>{avg.name}</span>
                </div>
                <div class="pack_name">your result</div>

                <div class="lists">
                  <div class="list">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>biology:{avg.biology}</span>
                  </div>
                  <div class="list">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>english:{avg.english}</span>
                  </div>
                  <div class="list">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>

                    <span>math:{avg.math}</span>
                  </div>
                  <div class="list">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>

                    <span>physics:{avg.physics}</span>
                  </div>
                  <div class="list">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>chemistry:{avg.chemistry}</span>
                  </div>
                </div>
               
              </div>
            ) : null}
          </div>
        ) : (
          <div>
            <div>
              <div className="tile">Hey {data.name}</div>

              <div class="card">
                <button
                  class="item item--1"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      fill="rgba(149,149,255,1)"
                      d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                    ></path>
                  </svg>
                  <span class="quantity"> your </span>
                  <span class="text text--1">result </span>
                </button>
                <button
                  class="item item--2"
                  onClick={() => {
                    navigate("/get-post");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0L24 0 24 24 0 24z"></path>
                    <path
                      d="M16 16c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm10 6c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM6 14c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm8.5-12C17.538 2 20 4.462 20 7.5S17.538 13 14.5 13 9 10.538 9 7.5 11.462 2 14.5 2zm0 2C12.567 4 11 5.567 11 7.5s1.567 3.5 3.5 3.5S18 9.433 18 7.5 16.433 4 14.5 4z"
                      fill="rgba(252,161,71,1)"
                    ></path>
                  </svg>{" "}
                  <span class="quantity"> your</span>
                  <span class="text text--2">assignments</span>
                </button>
                <button
                  class="item item--3"
                  onClick={() => {
                    navigate("/announcment");
                  }}
                >
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      fill="rgba(66,193,110,1)"
                      d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                    ></path>
                  </svg>
                  <span class="quantity"> school </span>
                  <span class="text text--3"> announcment </span>
                </button>
                <button
                  class="item item--4"
                  onClick={() => {
                    navigate("/onlineclass");
                  }}
                >
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      fill="rgba(220,91,183,1)"
                      d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                    ></path>
                  </svg>
                  <span class="quantity"> online</span>
                  <span class="text text--4"> class</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
};

export default Result;
