import { TextField } from "@mui/material";
// import React from "react";
import axios from "axios";
import React, { useState } from "react";
import "./ServicesDetail.css"
function ServicesDetail() {
    
  const [user, setUser] = useState({
    date: "",
    time: "",
    file: "",
    text: "",

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
    function bookNow() {
        document.getElementById("myForm").style.display = "block";
    }
    function cancelForm() {
        document.getElementById("myForm").style.display = "none";
    }
    
    return (
        <section className="service-container">
            <div className="services-detail">
                <div className="services-info">
                    <h1>Services Detail</h1>
                </div>
                <div className="services-info">
                <h2>Client Information</h2>
                </div>
                <div className="service-info">
                    <label>Full Name:</label>
                    <p> Ayesha Hammad</p>
                </div>
                <div className="service-info">
                    <label>Phone Number:</label>
                    <p> 030023456987</p>
                </div>
                <div className="service-info">
                    <label>Email:</label>
                    <p> ayesha@gmail.com</p>
                </div>
                <div className="service-info">
                    <label>City:</label>
                    <p> kasur</p>
                </div>
                <div className="service-info">
                    <label>Address:</label>
                    <p> Saleem Town</p>
                </div>
                <div className="service-info">
                    <label>Zip Post Code:</label>
                    <p> 550551</p>
                </div>
                <div className="service-info">
                    <label>Birthday: </label>
                    <p>1-2-2003</p>
                </div>
                <div className="service-info">
                    <label>Gender:</label>
                    <p> Female</p>
                </div>
                <div className="services-info">
                    <h2>Work Information</h2>
                </div>
                <div className="service-info">
                    <label>Professional Cleaner:</label>
                    <p> Deep Cleaing</p>
                </div>
                <div className="service-info">
                    <label>Position Title:</label>
                    <p> Sofa Cleaing and Dry</p>
                </div>
                <div className="service-info">
                    <label>Salary start:</label>
                    <p>  250Rs/-  (Per Seat)</p>
                </div>
                <div className="service-info">
                    <label>How Many hours Do you want to work per Week?:</label>
                    <p>  10-20</p>
                </div>
                <div className="service-info">
                    <label>What Days Are You Most Interested In Working?:</label>
                    <p>  Weekdays</p>
                </div>
                <div className="service-info">
                    <label>What Times Of Days Are You Most Interested In Working?:</label>
                    <p>  Mornings</p>
                </div>
                <div className='group-form'>
                    <button  onClick={bookNow}>Book Now</button>
                </div>
            </div>
            {/* ///////popup pages */}
            <section className="form-popup" id="myForm">
            
            <form    onSubmit={handleSubmit}  className="form-container">
                <h1 className="text2">Professional Cleaing</h1>
                <label for="date"><b>Select Date</b></label>
                <input type="date"  name="date" onChange={handleInputs} value={user.date} required />
                <label for="time"><b>Select Time</b></label>
                <input type="time"  name="time" onChange={handleInputs} value={user.time} required/>
                <label for="file"><b>Upload images</b></label>
                <input type="file" name="file" onChange={handleInputs} value={user.file} required />
                <label for="text"><b>Work Description</b></label>
                <textarea type="text"  name="text" onChange={handleInputs} value={user.text} required />

                <button type="submit" class="btn">Send</button>
                <button type="button" class="btn cancel"  onClick={cancelForm}>Cancel</button>
            </form>
            </section>

        </section>

        //    pop-up modal



    );
}
export default ServicesDetail