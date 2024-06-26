import React, { useState } from "react";
import "../Style/Login.css";
import axios from "axios";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://project-backend-tan.vercel.app/api/login",
        formData
      );

      const { token } = response.data;
      localStorage.setItem("token", token);
      console.log(response);

      window.location.href =
        "https://www.behance.net/search/projects/e-commerce%20website";
    } catch (error) {
      console.log(error);
    }
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
      <h2 className="Signins">Login</h2>
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
          value={formData.email}
          onChange={handleChange}
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
          value={formData.password}
          onChange={handleChange}
        ></input>

        <div className="signinline2"></div>
        <h2 className="signinSubtitle1">Password cannot be blank.</h2>
        <button className="signup-btn" type="submit">
          Secure Login
        </button>
      </form>

      <h3 className="loginllc"> Powered By KG Hawes, LLC.</h3>
    </div>
  );
}

export default Login;
