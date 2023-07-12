import React from "react";
import "./mainpage.css";
import { Link } from "react-router-dom";
function Mainpage() {
    return (
        <>
            <section className="group-main">
                <div className="main-page">
                    <h1>A full-service Professional <br />cleaning Website</h1>
                    <p className="para">If you want some help around the house occasionally to keep everything<br /> spick and span, hiring a cleaning service is a good option. We Provide<br />different services to make your life happy & easier</p>
                    <div className="start-btn"> <Link to="/Services">
                        <button className="button-86"> View all Services </button></Link>
                    </div>
                </div>

                <div className="heading"><h1>Top Latest Cleaning Services</h1></div>
                <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap",}}>

                    <div class="responsive">
                        <div class="gallery">
                            <img src="images/home.png" width="600" height="400" />
                            <div class="desc">Home Cleaning Service</div>
                        </div>
                    </div>
                    <div class="responsive">
                        <div class="gallery">
                            <img src="images/kitcheen.png" width="600" height="400" />
                            <div class="desc">kitchen Cleaning Service</div>
                        </div>
                    </div>
                    <div class="responsive">
                        <div class="gallery">
                            <img src="images/window.png" width="600" height="400" />
                            <div class="desc">Window Cleaning Service</div>
                        </div>
                    </div>
                    <div class="responsive">
                        <div class="gallery">
                            <img src="images/officee.png" width="600" height="400" />
                            <div class="desc">Office Cleaning Service</div>
                        </div>
                    </div>
                    <div class="responsive">
                        <div class="gallery">
                            <img src="images/hospital.png" width="600" height="400" />
                            <div class="desc">Hospital Cleaning Service</div>
                        </div>
                    </div>
                    <div class="responsive">
                        <div class="gallery">
                            <img src="images/sofaa.png" width="600" height="400" />
                            <div class="desc">Sofa Cleaning Service</div>
                        </div>
                    </div>
                    <div class="responsive">
                        <div class="gallery">
                            <img src="images/garden.png" width="600" height="400" />
                            <div class="desc">Garden Cleaning Service</div>
                        </div>
                    </div>
                    <div class="responsive">
                        <div class="gallery">
                            <img src="images/curtain.png" width="600" height="400" />
                            <div class="desc">Curtain Cleaning Service</div>
                        </div>
                    </div>
                    <div class="responsive">
                        <div class="gallery">
                            <img src="images/carpet.png" width="600" height="400" />
                            <div class="desc">Carpet Cleaning Service</div>
                        </div>
                    </div>
                    <div class="responsive">
                        <div class="gallery">
                            <img src="images/street.png" width="600" height="400" />
                            <div class="desc">Road Cleaning Service</div>
                        </div>
                    </div>
                </div>

            </section>
        </>

    );
}
export default Mainpage;