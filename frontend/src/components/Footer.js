import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer(){
    return(
        <footer className="footer">
          <div className="footer-container">
             <div className="footer-section">
                <h2>GovAssist</h2>
                <p>Trusted platform for online government certificate assistance services</p>
            </div>
            <div className="footer-section">
               <h3>Quick Links</h3>
               <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/services"><li>Services</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
               </ul>
            </div>

            <div className="footer-section">
                <h3>Contact Us</h3>
                <p>Email: support_govassist@gmail.com</p>
                <p>Phone: +91 9012345670</p>
            </div>



          </div>

          <div className="footer-bottom">
            <p>© 2026 GovAssist. All rights reserved</p>
          </div>


        </footer>
    );





}
export default Footer;