import React from "react";
import "./ServicesSection.css";
function ServicesSection(){
    return(
        <section className="services">
          <h2 className="services-title">
              Our Services
          </h2>
          <div className="services-container">
             <div className="service-card">
                <h3>Birth Certificate</h3>
                <p>Easy  online assistance for birthcertificate applications</p>
            </div>

            <div className="service-card">
                <h3>Income Certificate</h3>
                <p> Apply and manage income certificate documentation securely</p>
            </div>
            <div className="service-card">
                <h3>Caste Certificate</h3>
                <p>You will get trusted caste certificate services here</p>
            </div>
            <div className="service-card">
                <h3>Residence Certificate</h3>
                <p>Fast and reliable residence certificate services</p>
            </div>
            <div className="service-card">
                <h3>PAN/Aadhaar Services</h3>
                <p>You will get secure identity card services</p>
            </div>




          </div>






        </section>
    );
}
export default ServicesSection;