import React from "react";
import "./Notification.css"
import { BsSearch } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
function Notification(){
    return(
        <section className="Notification">
        <div className="Notification-Container">
        <div>
        {/* <div className="search-notification">
           <input type="search" placeholder="Search Conversation"/> 
           <button><BsSearch/></button>
           </div> */}
           </div>
            <div className="group-notification">
            <FaUserAlt  className="font"/>
                <h3>Qasim</h3>
                <p>Are you interested for this job and said I 'm available</p>
            </div>
            <div className="group-notification">
            <FaUserAlt  className="font"/>
                <h3>Ali</h3>
                <p>i'm not interested.......</p>
            </div>
            <div className="group-notification">
            <FaUserAlt  className="font"/>
                <h3>Maryam</h3>
                <p>Call me later!</p>
            </div>
            <div className="group-notification">
            <FaUserAlt  className="font"/>
                <h3>Hamza</h3>
                <p>Are you interested for this job and said I 'm available</p>
            </div>
           
           
        </div>
     
        </section>
    );
}
export default Notification