import axios from "axios";
import React, { useState } from "react";
import { Multiselect } from 'multiselect-react-dropdown';
import "./Profile.css"
import { Link } from "react-router-dom";
import profileicon from "../../../dist/assets/profileicon.png"

function Profile() {

  const [tab, setTab] = useState("Profile")

  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: "",
    services: "",
    description: "",

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


  const options = [
    { value: "home cleaning service", label: "Home Cleaning Service" },
    { value: "kitchen cleaning service", label: "Kitchen Cleaning Service" },
    { value: "car cleaning service", label: "Car Cleaning Service" },
    { value: "garden cleaning service", label: "Garden Cleaning Service" },
    { value: "curtain cleaning service", label: "Curtain Cleaning Service" },
    { value: "sofa cleaning service", label: "Sofa Cleaning Service" },
    { value: "window cleaning service", label: "Window Cleaning Service" },
    { value: "hospital cleaning service", label: "Hospital Cleaning Service" },
    { value: "office cleaning service", label: "Office Cleaning Service" },
  ]
  const [value, setValue] = useState(null)

  return (
    <>

      <section className="main_container">
        <section className="container_top">
          <div className="group_top">
            <button onClick={() => setTab("Profile")}>Profile</button>
          </div>
          <div className="group_top">
            <button onClick={() => setTab("Personal")}>Personal Info</button>
          </div>
          <div className="group_top">
            <button onClick={() => setTab("change")}>security</button>
          </div>
          <div className="group_top">
            <button onClick={() => setTab("logout")}>Log Out</button>
          </div>
        </section>
        {/* profile */}


        <section className="container_bottom">
          {
            tab === "Profile" &&
            <>
              <form onSubmit={handleSubmit}>
                <div className="group_bottom">
                  <h1>Profile</h1>
                </div>
                <div className="group_bottom">
                  <img src={profileicon} />
                  <input type="file" hidden id="user-image" accept="image/*" />
                  {/* <FaUserAlt className="user" size="10em" /> */}
                </div>
                <div className="group_bottom">
                  <button  onClick={()=>document.getElementById("user-image").click()}>Change Image</button>
                </div>
                <div className="group_bottom">
                  <button>Remove Image</button>
                </div>
              </form>
            </>
          }
          {/* personal info */}
          {
            tab === "Personal" &&
            <>
              <form onSubmit={handleSubmit}>
                <div className="group_bottom">
                  <h1>Personal Info</h1>
                </div>
                <div className="group_bottom">
                  <input type="text" name="name" onChange={handleInputs} value={user.name} required />
                  <span>Name</span>
                </div>
                <div className="group_bottom">
                  <input type="tel" name="phone" onChange={handleInputs} value={user.phone} required />
                  <span>Phone Number</span>
                </div>
                <div className="group_bottom">

                  <input type="text" name="address" onChange={handleInputs} value={user.address} required />
                  <span>Address</span>
                </div>
                <div className="group_bottom">
                  <textarea name="description" onChange={handleInputs} value={user.description} required />
                  <span>Description</span>
                </div>
                {/* <div className="group_bottom">
                <span>Service Provider</span>                </div> */}

                <div className="multi-class" >
                  <div className="app">
                    <Multiselect options={options} displayValue="value" placeholder="Select Service" onChange={setValue} />
                  </div>
                </div>

                <div className="group_bottom">
                  <button>Save</button>
                </div>
              </form>
            </>
          }
          {/* security */}
          {
            tab === "change" &&
            <>
              <form onSubmit={handleSubmit}>
                <div className="group_bottom">
                  <h1>Security</h1>
                </div>
                <div className="group_bottom">
                  <div>
                    <label >Current Password</label>
                  </div>
                  <input type="password" name="Name" onChange={handleInputs} value={user.currentpassword} required />
                </div>
                <div className="group_bottom">
                  <div>
                    <label >New Password</label>
                  </div>
                  <input type="password" name="Name" onChange={handleInputs} value={user.newpassword} required />
                </div>
                <div className="group_bottom">
                  <div>
                    <label >Confirm Password</label>
                  </div>
                  <input type="password" name="" onChange={handleInputs} value={user.confirmpassword} required />
                </div>


                <div className="group_bottom">
                  <button>Change Password</button>
                </div>

              </form>
            </>

          }

        </section>
      </section>
    </>
  );
}
export default Profile;
