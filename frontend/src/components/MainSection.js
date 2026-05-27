import React from "react";
import { Link } from "react-router-dom";
import "./MainSection.css";
 function MainSection(){
    return(
        <div className="mainsection">
            <div className="main-content">
              <h1>Simplifying Government Services for Everyone</h1>
              <p>Fast,secure and trusted online government assistance </p>
            
            <div className="main-buttons">
                <Link to="/login"><button className="apply-btn">Apply Now</button></Link>
            </div>
            </div>

        </div>
        
    );
 }
  export default MainSection;
