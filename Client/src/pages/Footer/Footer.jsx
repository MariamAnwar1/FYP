import React from "react";
import "./Footer.css"
import { FaFacebookF } from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
function Footer(){
    return(
<>
 
  <footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
        {/* <img src="images/logo1.png"/> */}
          <span class="logo_name">Sweeper Services</span>
        </div>
        <div class="media-icons">
          <a href="#"><FaFacebookF></FaFacebookF></a>
          <a href="#"><FaTwitter></FaTwitter></a>
          <a href="#"><FaInstagram></FaInstagram></a>
          <a href="#"><FaLinkedinIn></FaLinkedinIn></a>
          <a href="#"><FaYoutube></FaYoutube></a>
        </div>
      </div>
      <div class="link-boxes">
        <ul class="box">
          <li class="link_name">Company</li>
          <li><a href="/">Home</a></li>
          <li><a href="/">Contact us</a></li>
          <li><a href="/">About us</a></li>
          <li><a href="/">Get started</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Top Services</li>
          <li><a href="#">Sofa Cleaning</a></li>
          <li><a href="#">House Cleaning</a></li>
          <li><a href="#">Office Cleaning</a></li>
          <li><a href="#">Same Day Cleaning</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Account</li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="Personal">Personal Info</a></li>
          <li><a href="change">Security</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
        {/* <ul class="box">
          <li class="link_name">Courses</li>
          <li><a href="#">HTML & CSS</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">Photography</a></li>
          <li><a href="#">Photoshop</a></li>
        </ul> */}
        <ul class="box input-box">
          <li class="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Subscribe"/></li>
        </ul>
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2023 <a href="#">Sweeper Services.</a>All rights reserved</span>
        <span class="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
  </>
  );
    }
export default Footer;