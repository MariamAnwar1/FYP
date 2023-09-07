import React from "react";
import { FaBars } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import "./Navebar.css"
import logoIcon from "../../../dist/assets/logoicon.png"
function Navebar({ isUserLoggedIn, setIsUserLoggedIn }) {
  return (

    <>
      <nav>
        <div class="logo"><NavLink to="/"><img src={logoIcon} /></NavLink></div>
        <input type="checkbox" id="click" />
        <label for="click" class="menu-btn">
          <FaBars className="i" />
        </label>
        <ul>
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/Services" activeClassName="active">Services</NavLink></li>
          {
            isUserLoggedIn &&
            <>
              <li><NavLink to="/profile" activeClassName="active">Account Info</NavLink></li>
              <li><NavLink to="/Notification" activeClassName="active">Notification</NavLink></li>
              {/* <li><NavLink to="/PostServices" activeClassName="active">Add Services</NavLink></li> */}
              <li><NavLink to="/Response" activeClassName="active">Services Order</NavLink></li>
            </>
          }
          <div class="dropdown">
            <button class="dropbtn"><FaUser></FaUser></button>
            <div class="dropdown-content">
              {
                isUserLoggedIn === false ?
                  <>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup">Sign up</NavLink>
                  </>
                  /* else */
                  :
                  <>
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/" onClick={() => setIsUserLoggedIn(false)}>Log out</NavLink>
                  </>
              }
            </div>
          </div>
        </ul>
      </nav>
    </>
  );

}
export default Navebar




{/* <nav>
<div class="logo"><img src="images/logo1.png"/></div>
<input type="checkbox" id="click"/>
<label for="click" class="menu-btn">
  <FaBars className="i"/>
</label>
<div className ="list">
<ul>
  <li><Link to="/" class="active">Home</Link></li>
  <li><Link to="/Services">Services</Link></li>
  <li><Link to="/profile">Account Info</Link></li>
  <li><Link to="/Notification">Notification</Link></li>
  <li><Link to="/PostServices">Add Services</Link></li>
  <li><Link to="/Response">Booking Response</Link></li>
</ul>
</div>
</nav> */}