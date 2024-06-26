import React, { useState } from "react";
import "../Style/ForgotPassword.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import EmailIcon from "@mui/icons-material/Email";
function ForgotPassword() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://project-backend-tan.vercel.app/api/resetpassword",
        {
          email,
          password,
        }
      );
      console.log(response);
      setMessage("Password reset link has been sent to your email.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="User-sign-container">
      <h2 className="forgot_head">Retrieve Password</h2>
      <div className="signinline"></div>
      <h3 className="forgot-contents">
        Enter the Username and E-mail ID to receive instructions for resetting
        your Password
      </h3>
      <form className="form-sign" onSubmit={handleSubmit}>
        <span>
          <EmailIcon className="forgotEmailIcon" />
        </span>
        <input
          className="signin-Email"
          type="text"
          name="email"
          placeholder="Email Id"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <br></br>
        <input
          className="forgotPass-Password "
          type="password"
          name="email"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        {/* className="forgotPassword-btn" */}
        <div>
          <button className="forgotPassword-btns" type="submit">
            Send Me!
          </button>
        </div>
      </form>
      <Link to={"/"}>
        <ArrowRightAltIcon className="forgetPasswordArrow" />
        <h4 className="forgetPassword">back To Login </h4>
      </Link>
      {message && <p className="forgotPasswordmessage">{message} </p>}
    </div>
  );
}

export default ForgotPassword;
