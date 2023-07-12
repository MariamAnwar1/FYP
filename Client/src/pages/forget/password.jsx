import React, { useState } from "react";
import axios from "axios";
import "./password.css";
import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
function Password() {
    const [user, setUser] = useState({
        email: "" ,  
       });
     
       function handleInputs(e) {
         const name = e.target.name, value = e.target.value;
         setUser({ ...user, [name]: value })
       }
     
       async function handleSubmit(e) {
         e.preventDefault();
         console.log(user);
         await axios.post("http://localhost:5000/api/login", user)
           .then(function (res) {
     
           })
           .catch(function (err) {
             console.log(err);
             alert("Error Occured");
           })
       }
    return (
        <>
            <section className="signup-section ">
                <div className="signup-container">
                    <h1 className="title">Forgot your password?</h1>
                    <form onSubmit={handleSubmit}>
                    <p className="para">Enter your email below to receive your password<br /> reset instrructions</p>
                    <div className="form">
                    <EmailIcon className="icon" /><input type="email" placeholder=" Email" 
                    name="email" onChange={handleInputs} value={user.email} required />
                       
                    </div>
                    <div className="formButton">
                        <button> Password Reset </button>
                    </div>
                    <div className="bottom">
                        <Link to="/login" >Back to Login Page</Link>
                    </div>
                    </form>
                </div>
            </section>
        </>

    );

}
export default Password;