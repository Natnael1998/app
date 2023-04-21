import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./AuthContext";
import { BsShieldFillExclamation } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./auth.css";

import {AiOutlineLoading3Quarters} from "react-icons/ai"
const Authe = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { logIn } = UserAuth();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true)
    try {
      await logIn(email, password);
      navigate("/result");
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)

      setError(true);
      setInterval(() => {setError(false)},2500)
    }
  };
  return (
    <div className="loginContainer">
      <img className="image" src="https://th.bing.com/th/id/R.890d2fe7a1e7da935a61bab7dbbfad88?rik=C1ZVJZgYzIg2Fw&riu=http%3a%2f%2fwww.ethioparentsschool.com%2fwp-content%2fuploads%2f2015%2f04%2fethioparentsschool.com_.png&ehk=MSpfaO60Q9TLgfS7md48GDYYX9E4UiIG051S0UIViHU%3d&risl=&pid=ImgRaw&r=0" alt="" />
      <div>
        {error ? (
          <div className="LoginError">
            <BsShieldFillExclamation size={25} />
            <div>
              <p >Error: 0</p>
              <p>Credentials does not match</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="loginForm">
        <p className="loginSubTitle">Log In</p>
        <p className="loginDetails">(Student or Parent Sign In)</p>

        <form onSubmit={handle}>
          <div className="formContain">
            <label htmlFor="">Your Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="email@address.com"
              required
            />
            <div>
              <label htmlFor="">Your Password</label>
            </div>
            <input
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="+6 characters required"
            />

           

            <button className="SignInButton">{loading ? <AiOutlineLoading3Quarters className="LoginLoading" size={25}/> : <p>Enter</p>}</button>
          </div>
        </form>
      </div>
        <p className="pp">Developed by NBN</p>
    </div>
  );
};

export default Authe;
