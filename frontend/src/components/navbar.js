import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar(){
    return (
        <nav className="navbar">
          <div className="navbar-logo">
            <h2>GovAssist</h2>
          </div>

          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
           
            
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <div className="navbar-buttons">
            <Link to="/login">
             <button className="login-btn">Login</button>
            </Link>
            <Link to="/register"><button className="register-btn">Register</button></Link>
            
          </div>
        </nav>
    );
}
export default Navbar;