// import React from 'react'
import "./PostServices.css";
import axios from "axios";
import React, { useState } from "react";
function PostServices() {
  const [user, setUser] = useState({

    name: "",
    phone: "",
    address: "",
    email:"",
    city:"",
    zipcode:"",
    birthday:"",
    gender:"",
    professional:"",
    positiontitle:"",
    salary:"",
    hours:"",
    time:"",
    days:"",  

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
   
    <section className="main_container">
    <div className='form-main'>
    <form onSubmit={handleSubmit}>
    <div className='group_form'>
      <h2>Add Services</h2>
    </div>
      <div className='group_form'>
        <h1>Client Information</h1>
      </div>
      <div className="group_form">
        <div>
          <label >Full Name*</label>
        </div>
        <input type="text" name="name" onChange={handleInputs} value={user.name} required/>
      </div>

      <div className="group_form">
        <div>
          <label >Phone Number*</label>
        </div>
        <input type="tel" name="phone" onChange={handleInputs} value={user.phone} required/>
      </div>
      <div className="group_form">
        <div>
          <label >Email*</label>
        </div>
        <input type="Email" name="email" onChange={handleInputs} value={user.email} required />
      </div>
     
      
      <div className="group_form">
        <div>
          <label >City*</label>
        </div>
        <input type="text" name="city" onChange={handleInputs} value={user.city} required />
      </div>
      <div className="group_form">
        <div>
          <label >Address*</label>
        </div>
        <input type="text" name="address" onChange={handleInputs} value={user.address} required/>
      </div>
      <div className="group_form">
        <div>
          <label >Zip Post Code*</label>
        </div>
        <input type="text" name="zipcode" onChange={handleInputs} value={user.zipcode} required />
      </div>
      <div className="group_form">
        <div>
          <label >Birthday*</label>
        </div>
        <input type="date" name="birthday" onChange={handleInputs} value={user.birthday} required />
      </div>
      <div className="group_form">
        <div>
          <label >Gender*</label>
        </div>
        <select name="gender" onChange={handleInputs} value={user.gender} required>
        <option>---select---</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>
      <div className='group_form'>
        <h1>Work Information</h1>
      </div>
      <div className="group_form">
        <div>
          <label >Professional Cleaner*</label>
        </div>
        <input type="text" name="professional" onChange={handleInputs} value={user.professional} required/>
      </div>
      <div className="group_form">
        <div>
          <label >Position Title*</label>
        </div>
        <input type="text" name="positiontitle" onChange={handleInputs} value={user.positiontitle} required  />
      </div>
      <div className="group_form">
        <div>
          <label >Salary Start*</label>
        </div>
        <input type="number" name="salary" onChange={handleInputs} value={user.salary} required />
      </div>
      <div className="group_form">
        <div>
          <label >How Many hours Do you want to work per Week?*</label>
        </div>
        <input type="number"  placeholder='0-10'  name="hours" onChange={handleInputs} value={user.hours} required/>
      </div>
      <div className="group_form">
        <div>
          <label >What Days Are You Most Interested In Working?*</label>
        </div>
        <select  name="time" onChange={handleInputs} value={user.time} required>
        <option>---select---</option>
          <option>Mornings</option>
          <option>Afternoons</option>
          <option>Evening</option>
        </select>
      </div>
      <div className="group_form">
        <div>
          <label >What Times of Days Are You Most Interested In Working?*</label>
        </div>
        <select  name="days" onChange={handleInputs} value={user.days} required>
        <option>---select---</option>
          <option>Weekdays</option>
          <option>Weekends</option>
          <option>All Time</option>
        </select>
      </div>
<div className='group-form'>
  <button>Apply</button>
</div>
</form>
</div>
    </section>





  );

}

export default PostServices
