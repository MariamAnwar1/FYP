import React from "react";
import "./Services.css"
import Card from "../card/card";
import { Grid } from "@mui/material";
import { BsSearch } from 'react-icons/bs';
function Services() {
    return (
         <>
        <section className="main-servicesContainer">
            <div className="main-services">
                <div class="services-group">
                    <h3>Make your Life Easier!!!</h3>
                    </div>
            <div className="services-group">
           <input type="search"/> 
           
      <button className="searchbtn"><BsSearch/></button>
      </div>
          </div>
        </section>
<div className="show-services"><h1>professional cleaning service</h1></div>
            <div className="services-card">
                <Grid container spacing={2} rowGap={3} sx={{ p: 5 }}>
                    <Grid item xs={12} sm={4} lg={3} xl={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={12} sm={4} lg={3} xl={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={12} sm={4} lg={3} xl={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={12} sm={4} lg={3} xl={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={12} sm={4} lg={3} xl={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={12} sm={4} lg={3} xl={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={12} sm={4} lg={3} xl={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={12} sm={4} lg={3} xl={4}>
                        <Card />
                    </Grid>
                </Grid>
                
            </div>
</>

    );
}
export default Services

