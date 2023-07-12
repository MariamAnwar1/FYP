import axios from "axios";
import React, { useState } from "react";
import "./signup.css";
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";
import serverPath from "../../../util/util";
function Signup() {

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    
  });

  function handleInputs(e) {
    const name = e.target.name, value = e.target.value;
    setUser({ ...user, [name]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
    await axios.post(`${serverPath}/api/signup`, user)
      .then(function (res) {
          console.log(res.data)
      })
      .catch(function (err) {
        console.log(err);
        alert("Error Occured");
      })
  }
  return (
    <>

      <section className="signup-section">
        <div className="signup-container">

          <h1 className="title">Create Account</h1>
          <form onSubmit={handleSubmit}>

          <div className="form">
            <PersonIcon className="icon" /><input type="text" placeholder="First Name" name="firstName"
             onChange={handleInputs} value={user.firstName} required   />
          </div>
          {/* <div className="form">
            <PersonIcon className="icon" /><input type="text" placeholder="First Name" name="lastName"
             onChange={handleInputs} value={user.lastName} required   />
          </div> */}
          <div className="form">
            <PhoneIcon className="icon" /><input type="tel" placeholder="Phone" name="phone"
             onChange={handleInputs} value={user.phone} required   />
          </div>
          
          <div className="form">
            <EmailIcon className="icon" /><input type="email" placeholder="example@gmail.com" name= "email"
            value={user.email} onChange={handleInputs}  required />
          </div>
          <div className="form">
            <LockIcon className="icon" /><input type="Password" placeholder="Password"
            name="password" onChange={handleInputs} value={user.password} required />
          </div>
          <div className="formButton">
            <button> SignUp </button>
          </div>
          <div className="bottom">
            <h3>Already have an Account? </h3><Link to="/login">Login</Link>
          </div>
</form>
          
        </div>
      </section>

    </>

  );

}
export default Signup;