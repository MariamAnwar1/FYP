import React from "react";
import "./card.css";
import { Link } from "react-router-dom";



function Card({ PostionTitel = "Deep Cleaning", Salary = "Rs.1200 (Fixed)", AccourdingTo = "Per Hour" }) {
    return (
        <>

            <section className="full">
                <div className="Card">
                <div className="group-card">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnym2-8fISoonEgPWYR8P4xmQLhCIT3rEw6w&usqp=CAU"/>
                  
                    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohnP_yI2s6WWzdtJab0flv1swpbqflnJ3cg&usqp=CAU"/> */}
                {/* </div> */}
                </div>

                <div className="group-card"><h1>{PostionTitel}</h1></div>
                <div className="group-card"><h4>{Salary}</h4></div>
                <div className="group-card"><p>{AccourdingTo}</p></div>
                <div className="group-card"><Link to="/ServicesDetail">
                <button>Book Now
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                </button></Link></div>
                </div>
            </section>
            



        </>
    )
}
export default Card