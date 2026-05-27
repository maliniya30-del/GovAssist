import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
function Services() {
    return (
        <div className="services-page">

         <h1 className="services-page-title"> Government Services Page</h1>
         <div className="services-page-container">
           <div className="services-page-card">
             <h2>Birth Certificate</h2>
             <p>Apply online for birth certificate assistance and documentation</p>
             <Link to="/birth-certificate"><button>Apply Now</button></Link>
             
           </div>
           <div className="services-page-card">
             <h2>Income Certificate</h2>
             <p>Get help with income certificate applications and approvals</p>
             <Link to="/income-certificate"><button>Apply Now</button></Link>
             
           </div>
           <div className="services-page-card">
            <h2>Caste Certificate</h2>
            <p>Trusted caste certificate processing support</p>
            <Link to="/caste-certificate"><button>Apply Now</button></Link>
            
           </div>
           <div className="services-page-card">
            <h2>Residence Certificate</h2>
            <p>Easy residence certificate application assistance</p>
            <Link to="/residence-certificate"><button>Apply Now</button></Link>
            
           </div>
           <div className="services-page-card">
            <h2>PAN/Aadhaar Services</h2>
            <p>Get help with secure identity card services</p>
            <Link to="/pan-aadhaar"><button>Apply Now</button></Link>
            
           </div>


         </div>
        </div>
    );
}
export default Services;