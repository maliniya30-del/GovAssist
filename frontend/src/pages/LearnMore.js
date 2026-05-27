import React from "react";
import "./LearnMore.css";
function LearnMore() {
    return(
        <div className="learn-page">
          <div className="learn-container">
            <h1>About GovAssist</h1>
            <p>GovAssist is a digital government service platform
                designed to help citizens apply for important certificates
                and government services online quickly and securely
            </p>
            <div className="service-list">
                <h2>Our Services</h2>
                <ul>
                    <li>Birth Certificate</li>
                    <li>Income Certificate</li>
                    <li>Caste Certificate</li>
                    <li>Residence Certificate</li>
                </ul>
            </div>
            <div className="features">
                <h2>platform Features</h2>
                <ul>
                    <li>Secure user login</li>
                    <li>Online certificate requests</li>
                    <li>Request status tracking</li>
                    <li>Admin approval system</li>
                    <li>Modern digital interface</li>
                </ul>
            </div>
          </div>
        </div>
    );
}
export default LearnMore;