import React from "react";
import "./AboutSection.css";
import { Link } from "react-router-dom";
function AboutSection(){
    return(
      <section className="about">
        <div className="about-left">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4207/4207249.png"
              alt="About GovAssist"
            /></div>

        <div className="about-right">
            <h2>About GovAssist</h2>
            <p>GovAssist is a trusted platform where citizens get access to government 
             certificate services and brokerage assistance securely.</p>
            <button className="about-btn">
            <Link to="/learn-more">Learn More</Link>
            </button>
        </div>



      </section>
    );
}
export default AboutSection;