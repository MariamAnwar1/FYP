import React, { useState } from "react";
import axios from "axios"; // npm i axios
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { FaUserAlt } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa';
function Login({setIsUserLoggedIn}) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",

  });

  function handleInputs(e) {
    const name = e.target.name, value = e.target.value;
    setUser({ ...user, [name]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Called")
    try{
      let res = await axios.post("http://localhost:9000/api/signin", user);
      console.log("Res", res.data);
    } catch(err){
      console.log(err);
    }

  }

  return (
    <>
      <section className="signup-section">
        <div className="signup-container">
          <h1 className="title"> Login </h1>
          <form onSubmit={handleSubmit}>
            <div className="form">
              <FaUserAlt className="icon" /> 
              <input type="email" placeholder="Username"
                name="email" onChange={handleInputs} value={user.email} required />
            </div>
            <div className="form">
              <FaKey className="icon" />
              <input type="password" placeholder="Password"
                name="password" onChange={handleInputs} value={user.password} required />



            </div>
            <div className="link">
              <Link to="/forget" >Forgot password?</Link>
            </div>
            <div className="formButton">
            <button>Login</button>
            </div>
            <div className="bottom">
              <h3>Don't have an account?</h3><Link to="/signup" >Register</Link>
            </div>
          </form>
        </div>
      </section>

    </>
  )
}

export default Login;




