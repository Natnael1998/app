import { collection, getDocs, query, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./parent.css";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const Parent = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [code, setCode] = useState("");
  const [show, setShow] = useState("");
  const [item, setItem] = useState("marklist11A");

  const navigate = useNavigate();

  const GetData = async () => {
    onSnapshot(collection(db, item), (snapshot) =>
      setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  };
  useEffect(() => {
    GetData();
  }, [item]);
  const [nn,setNN] = useState(true)
  setInterval (() => {
    setNN(false)
  }
  
  , 1500)
  return (
    <div className="ParentContain">
<div className={nn ? "firstt" : "hidee"}>
<img className="first" src="https://th.bing.com/th/id/R.890d2fe7a1e7da935a61bab7dbbfad88?rik=C1ZVJZgYzIg2Fw&riu=http%3a%2f%2fwww.ethioparentsschool.com%2fwp-content%2fuploads%2f2015%2f04%2fethioparentsschool.com_.png&ehk=MSpfaO60Q9TLgfS7md48GDYYX9E4UiIG051S0UIViHU%3d&risl=&pid=ImgRaw&r=0"/>
<h3>Ethio-Parents</h3>

</div>

      <div className="Skinny">
        <div className="search">
          

         <div style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
         <input
            placeholder="Search your name"
            className="tyme"
            value={show}
            onChange={(e) => {
              setShow(e.target.value);
            }}
          ></input>
          <img style={{height:"55px"}} src="https://th.bing.com/th/id/R.890d2fe7a1e7da935a61bab7dbbfad88?rik=C1ZVJZgYzIg2Fw&riu=http%3a%2f%2fwww.ethioparentsschool.com%2fwp-content%2fuploads%2f2015%2f04%2fethioparentsschool.com_.png&ehk=MSpfaO60Q9TLgfS7md48GDYYX9E4UiIG051S0UIViHU%3d&risl=&pid=ImgRaw&r=0" />
         </div>

          <div>
            <select style={{marginBottom : "20px"}} name="" id="" onChange={(e) => setItem(e.target.value)}>
              <option value="">--Section--</option>
              <option value="marklist11A">11 A</option>
              <option value="marklist11B">11 B</option>
              <option value="marklist11C">11 C</option>
            </select>
          </div>
        </div>
        <div className="ItemsContain">
          {data
            .filter((val) => {
              if (show === "") {
                return val;
              } else if (val.name.toLowerCase().includes(show)) {
                return val;
              }
            })
            .map((i) => {
              return (
                <div class="popup">
                  <form class="formm">
                    <div class="note">
                      <label class="title">{i.name}</label>
                      <label htmlFor="">
                        please enter your code that was sent with your email
                      </label>
                    </div>
                    <input
                      placeholder="Enter your code"
                      onChange={(e) => {
                        setCode(e.target.value);
                      }}
                      title="Enter your e-mail"
                      name="email"
                      type="email"
                      class="input_field"
                    />
                    <button
                      onClick={(e) => {
                        if (code == i.password) {
                          navigate(`/result/${i.id}`);
                        } else {
                          alert("this code ain't right");
                        }
                      }}
                      class="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Parent;
