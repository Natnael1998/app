import React from "react";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  updatedoc,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PushNotifications } from '@capacitor/push-notifications';

import "./admin.css";
import { useNavigate } from "react-router-dom";
import "./mid.css";
const Final = () => {
  const [show, setShow] = useState(true);
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [subjecta, setSubjecta] = useState("");
  const [biology, setBiolgy] = useState([]);
  const [chemistry, setChemistry] = useState("");
  const [physics, setPhysics] = useState("");
  const [mathes, setMathes] = useState(false);
  const [chemo, setChemo] = useState(false);
  const codem = 1;
  const codec = 1;
  const codep = 1;
  const codee = 1;
  const codeh = 1;
  const codei = 1;
  const codea = 1;
  const [sliced, setSliced] = useState(
    ""
  );
  const codeb = 1;

  const [math, setMath] = useState();
  const [classe, setClasse] = useState("marklist11A");
  const [data, setData] = useState([]);
    const [dataa, setDataa] = useState([]);
  const GetData = async () => {
    onSnapshot(collection(db, classe.slice(0, 11)), (snapshot) =>
      setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  };
    const GetDataa = async () => {
      onSnapshot(collection(db, "Final11"), (snapshot) =>
        setDataa(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
    };



  const handle = (e) => {
    setMathes(!mathes);
    if (codem == password) {
      setShow();
      if (mathes) {
        setMath(subject);
      }
    } else {
    }
  };
  const handleb = (e) => {
    setChemo(!chemo);

    if (codeb == password) {
      setShow();
      if (chemo) {
        setChemistry(subjecta);
      }
    } else {
    }
  };

  useEffect(() => {
    GetData();
    GetDataa();
     handleb();

    handle();
  }, [classe, subject]);
  console.log(data);
  const navigate = useNavigate();

  return (
    <>
      {show ? (
        <div className="bn">
          <div class="card">
            <span class="card__title">Math</span>
            <p class="card__content">enter the code provided by admin</p>
            <div class="card__form">
              <input
                placeholder="Your code"
                type="text"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                class="sign-up"
                onClick={() => {
                  if (codem == password) {
                    setShow();

                    setSliced("math");
                  } else {
                  }
                }}
              >
                {" "}
                submit
              </button>
            </div>
          </div>
          <div class="card">
            <span class="card__title">chemistry</span>
            <p class="card__content">enter the code provided by admin</p>
            <div class="card__form">
              <input
                placeholder="Your code"
                type="text"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                class="sign-up"
                onClick={() => {
                  if (codec == password) {
                    setShow();
                    setSliced("chemistry");
                  } else {
                    alert("incorrect password");
                  }
                }}
              >
                {" "}
                submit
              </button>
            </div>
          </div>
          <div class="card">
            <span class="card__title">biology</span>
            <p class="card__content">enter the code provided by admin</p>
            <div class="card__form">
              <input
                placeholder="Your code"
                type="text"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                class="sign-up"
                onClick={() => {
                  if (codeb == password) {
                    setShow();
                    setSliced("biology");
                  } else {
                    alert("incorrect password");
                  }
                }}
              >
                {" "}
                submit
              </button>
            </div>
          </div>
          <div class="card">
            <span class="card__title">english</span>
            <p class="card__content">enter the code provided by admin</p>
            <div class="card__form">
              <input
                placeholder="Your code"
                type="text"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                class="sign-up"
                onClick={() => {
                  if (codee == password) {
                    setShow();
                    setSliced("english");
                  } else {
                    alert("incorrect password");
                  }
                }}
              >
                {" "}
                submit
              </button>
            </div>
          </div>
          <div class="card">
            <span class="card__title">IT</span>
            <p class="card__content">enter the code provided by admin</p>
            <div class="card__form">
              <input
                placeholder="Your code"
                type="text"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                class="sign-up"
                onClick={() => {
                  if (codei == password) {
                    setShow();
                    setSliced("it");
                  } else {
                    alert("incorrect password");
                  }
                }}
              >
                {" "}
                submit
              </button>
            </div>
          </div>
          <div class="card">
            <span class="card__title">HPE</span>
            <p class="card__content">enter the code provided by admin</p>
            <div class="card__form">
              <input
                placeholder="Your code"
                type="text"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                class="sign-up"
                onClick={() => {
                  if (codeh == password) {
                    setShow();
                    setSliced("hpe");
                  } else {
                    alert("incorrect password");
                  }
                }}
              >
                {" "}
                submit
              </button>
            </div>
          </div>
          <div class="card">
            <span class="card__title">amharic</span>
            <p class="card__content">enter the code provided by admin</p>
            <div class="card__form">
              <input
                placeholder="Your code"
                type="text"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                class="sign-up"
                onClick={() => {
                  if (codea == password) {
                    setShow();
                    setSliced("amharic");
                  } else {
                    alert("incorrect password");
                  }
                }}
              >
                {" "}
                submit
              </button>
            </div>
          </div>
          <div class="card">
            <span class="card__title">civics</span>
            <p class="card__content">enter the code provided by admin</p>
            <div class="card__form">
              <input
                placeholder="Your code"
                type="text"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                class="sign-up"
                onClick={() => {
                  if (codec == password) {
                    setShow();
                    setSliced("civics");
                  } else {
                    alert("incorrect password");
                  }
                }}
              >
                {" "}
                submit
              </button>
            </div>
          </div>
          <div class="card">
            <span class="card__title">physics</span>
            <p class="card__content">enter the code provided by admin</p>
            <div class="card__form">
              <input
                placeholder="Your code"
                type="text"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                class="sign-up"
                onClick={() => {
                  if (codep == password) {
                    setShow();
                    setSliced("physics");
                  } else {
                    alert("incorrect password");
                  }
                }}
              >
                {" "}
                submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <select name="" id="" onChange={(e) => setClasse(e.target.value) }>
            <option value="">--Section--</option>
            <option value="marklist11A Mid11">11 A</option>
            <option value="marklist11B Mid11">11 B</option>
            <option value="marklist11C Mid11">11 C</option>
          </select>
          <div>
            <div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead className="h">
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="left">Mid (25%)</TableCell>

                      <TableCell align="left">Submit</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>

                        <TableCell align="left">
                          <input
                            type="text"
                            name={(e) => {
                              setSubjecta(e.target.value);
                            }}
                            onChange={(e) => setSubject(e.target.value)}
                          />
                        </TableCell>

                        <TableCell>
                          <button
                            className="TableButton"
                            onClick={async function n(e) {
                              e.preventDefault();
                               
                                  
                                   await updateDoc(doc(db, "Final11", row.email), {
                                      
                                       uid: row.email,
                                       email: row.email,

                                       [sliced]: subject,

                                       name: row.name,
                                     }).then(navigate("/"));
                                   
                                    }} 
            

                            
                          >
                            Submit
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Final;
