import React from "react";
import "./Response.css";
import { IoLogoWhatsapp } from 'react-icons/io';
function Response() {
    return (
        <>
            <section className="main_container">
                <div className="table-group">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service Order</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>Ayesha</td>
                            <td>khalidayesha@gmail.com</td>
                            <td>Laundary</td>
                           <td><a href="https://wa.me/2348100000000" target="_blank" className="icon-action"> <IoLogoWhatsapp  /></a></td>
                        </tr>
                        <tr>
                            <td>Megha</td>
                            <td>Megha098@gmail.com</td>
                            <td>Deep Cleaning</td>
                           <td><a href="https://wa.me/2348100000000" target="_blank" className="icon-action"> <IoLogoWhatsapp  /></a></td>
                        

                        </tr>
                        <tr>
                            <td>Subham</td>
                            <td>muzamsuban@gmail.com</td>
                            <td>window Cleaning</td>
                            <td><a href="https://wa.me/2348100000000" target="_blank" className="icon-action"> <IoLogoWhatsapp  /></a></td>
                        </tr>
                    </table>
                </div>
            </section>
        </>
    );
}
export default Response