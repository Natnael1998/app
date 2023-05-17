import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import NavBar from "./NavBar";
import { useNavigate, useParams } from "react-router-dom";
import "../Result.css";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { ImInfo } from "react-icons/im";
import { Legend, RadialBar, RadialBarChart, Tooltip } from "recharts";

const Result = () => {
  const { user } = UserAuth();
  const nav = useNavigate()
  const n = useParams();
  const [p, setP] = useState();
  const dataa = [
    {
      "name": "18-24",
      "uv": 31.47,
      "pv": 2400,
      "fill": "#8884d8"
    },
    {
      "name": "25-29",
      "uv": 26.69,
      "pv": 4567,
      "fill": "#83a6ed"
    },
    {
      "name": "30-34",
      "uv": -15.69,
      "pv": 1398,
      "fill": "#8dd1e1"
    },
    {
      "name": "35-39",
      "uv": 8.22,
      "pv": 9800,
      "fill": "#82ca9d"
    },
    {
      "name": "40-49",
      "uv": -8.63,
      "pv": 3908,
      "fill": "#a4de6c"
    },
    {
      "name": "50+",
      "uv": -2.63,
      "pv": 4800,
      "fill": "#d0ed57"
    },]
  const [data, setData] = useState({
    math: "",
    biology: "",
    chemistry: "",
    civics: "",
    english: "",
    it: "",
  });
  const getdata = async () => {
   
    if (n.id === "Mid") {
      setP(12.5);
    } else if (n.id === "mock") {
      setP(12.5);
    }
    
    
    else if (n.id === "Final") {
      setP(25);
    } else if (n.id === "Avg") {
      setP(50);
    }
    const docRef = doc(db, n.id, user.email);
    const docSnap = await getDoc(docRef);
      setData(docSnap.data())
  };
  useEffect(() => {
    getdata();
  }, []);



  return (
    <>
      <div className="topnav">
        <p>{n.id} Results</p>
        <div >
        <button onClick={() => nav("/home")} className="buttonn">
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
  <span>Back</span>
</button>
        </div>
      </div>

      <div className="Results">
           <div className="gg">
          <ImInfo size={25} color="dodgerblue" />
          <p>
            {Math.round(
              (p * 2 -
                parseInt(data.chemistry) +
                (p * 2 - parseInt(data.math)) +
                (p * 2 - parseInt(data.civics)) +
                (p * 2 - parseInt(data.english)) +
                (p * 2 - parseInt(data.it)) +
                (p * 2 - parseInt(data.biology))) /
                6
            )}{" "}
            is deducted from total Average
          </p>
         
        </div>
        <div className="gg">
          <ImInfo size={25} color="red" />
          <p>
            {Math.round(
              (p * 2 -
                parseInt(data.chemistry) +
                (p * 2 - parseInt(data.math)) +
                (p * 2 - parseInt(data.civics)) +
                (p * 2 - parseInt(data.english)) +
                (p * 2 - parseInt(data.it)) +
                (p * 2 - parseInt(data.biology))) 
            )}{" "}
 score lost in total
          </p>
         
        </div>
      
        <div  className="h"></div>
        <div className={data.chemistry > p ? "green" : "red"}>
          <p>Chemistry</p>
          <div className="rr">
            <p>
            {data.chemistry} /

          </p>
           {p * 2}%
            
          </div>
        </div>
        <div className={data.math > p ? "green" : "red"}>
          <p>Mathemathics</p>
          <div className="rr">
            <p>
            {data.math} /

          </p>
           {p * 2}%
            
          </div>
        </div>
        <div className={data.biology > p ? "green" : "red"}>
          <p>Biology</p>
          <div className="rr">
            <p>
            {data.biology} /

          </p>
           {p * 2}%
            
          </div>
        </div>

        <div className={data.civics > p ? "green" : "red"}>
          <p>Civics</p>
          <div className="rr">
            <p>
            {data.civics} /

          </p>
           {p * 2}%
            
          </div>
        </div>

        <div className={data.english > p ? "green" : "red"}>
          <p>English</p>
          <div className="rr">
            <p>
            {data.english} /

          </p>
           {p * 2}%
            
          </div>
        </div>

        <div className={data.it > p ? "green" : "red"}>
          <p>Biology</p>
          <div className="rr">
            <p>
            {data.it} /

          </p>
           {p * 2}%
            
          </div>
        </div>

        <div className="hh"></div>

     
      </div>

      <NavBar />
    </>
  );
};

export default Result;
