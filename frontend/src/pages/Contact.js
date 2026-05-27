import React from "react";
import "./Contact.css";
function Contact(){
    return (
        <div className="contacct-page">
         <h1 className="contact-title">Contact Us</h1>
         <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Email: support_govassist@gmail.com</p>
            <p>Phone: +91 9012345670</p>
            <p>Address: Kolkata, India</p>
          </div>
          <div className="contact-form">
            <form>
                <input
                type="text"
                placeholder="Enter your name"
                />
                <input
                type="email"
                placeholder="Enter your email"
                />
                <textarea
                placeholder="Enter your message"
                rows="6"></textarea>
                <button type="submit">Send Message</button>
            </form>
          </div>
         </div>
        </div>
    );
}
export default Contact;
