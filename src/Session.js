import React, { useCallback, useState, useEffect } from "react";

import "./video.css";
import {
  collection,
  setDoc,
  getDocs,
  query,
  onSnapshot,
} from "firebase/firestore";

import { db } from "./firebase";
import "./parent.css";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const Session = () => {
    const [mediaStream, setMediaStream] = useState(null);
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [item, setItem] = useState("11");
  const navigate = useNavigate();
  const handle = useCallback(async () => {
       
    navigate(`/room/${value}`);
  }, [navigate, value]);

  const GetData = async () => {
    onSnapshot(collection(db, "marklist11A"), (snapshot) =>
      setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    

    
    
  };
  useEffect(() => {
    GetData();
  }, [item]);
  return (
    <div class="input-group">
      <label class="label">enter the name of your room </label>
      <input
        autocomplete="off"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        name="Email"
        id="Email"
        class="input"
        type="email"
      />
      <button onClick={handle}>
        <div class="svg-wrapper-1">
          <div class="svg-wrapper">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <span>create room</span>
      </button>
      <div>
      
      </div>
    </div>
  );
};

export default Session;
