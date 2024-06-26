import React, { useState } from "react";
import "../Style/Signup.css";
import axios from "axios";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LockIcon from "@mui/icons-material/Lock";

import PersonIcon from "@mui/icons-material/Person";

import { Link, useNavigate } from "react-router-dom";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://project-backend-tan.vercel.app/api/signup",
        {
          email,
          password,
        }
      );
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const handleLinkClick = () => {
    window.open("https://kghawes.com/", "_blank");
  };

  return (
    <div className="User-sign-container">
      <div className="signin-Header">
        <img
          className="siginup-Image"
          src="https://analytics.voiztrail.com/themes/voiztrail/assets/images/logo-375-89.png"
          alt="signuplogo"
        ></img>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL_db62k8JH_uZuQi3IWja7VdudVSJAf6fIC7bPadex8GmodDpBFO7MLHpquflN_KS0o&usqp=CAU"
        alt="userimg"
        className="UserIcons"
      />
      <h2 className="Signins"> Sign In</h2>
      <div className="signinline"></div>
      <form className="form-sign" onSubmit={handleSubmit}>
        <span>
          <PersonIcon className="personIcon" />
        </span>
        <input
          className="signin-Email"
          type="text"
          name="email"
          placeholder="Username"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <h2 className="signinSubtitle">Username cannot be blank.</h2>
        <span>
          <LockIcon className="lockicon" />
        </span>
        <input
          className="signin-Password "
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>

        <div className="signinline2"></div>
        <h2 className="signinSubtitle1">Password cannot be blank.</h2>
        <span>
          <img
            className="keyimg"
            src="https://cdn-icons-png.flaticon.com/512/1224/1224242.png"
          ></img>
        </span>
        <button className="signup-btn" type="submit">
          Secure Login
        </button>
      </form>

      <Link to={"/resetPassword"}>
        <KeyboardBackspaceIcon className="signinarrow" />
        <h4 className="forgetPasswords"> I forgot my password</h4>
      </Link>

      <h3 className="signinllc" onClick={handleLinkClick}>
        Powered By KG Hawes, LLC.
      </h3>
    </div>
  );
}

export default Signup;
