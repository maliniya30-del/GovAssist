import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { Link } from "react-router-dom";


function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleSubmit = async (e) => {
          e.preventDefault();
          if(password !== confirmPassword) {
              alert("Passwords do not match");
              return;
          }
          try {
            const response = await axios.post(
              "https://govassist-backend.onrender.com/api/auth/register",
              {
                name,
                email,
                password
              }
            );
            alert(response.data.message);
          } catch(error) {
              alert("Registration failed");
          }
    };


    return(
        <div className="register-page">
          <div className="register-container">
             <h1>Create account</h1>
             <form className="register-form" onSubmit={handleSubmit}>
               <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}
               />
               <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}
               />
               <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} 
               />
               <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} 
               />
               <button type="submit">Register</button>
             </form>
             <Link to="/login"><p>Already have an account? Login</p></Link>


          </div>
            
            
        </div>
    );
}
export default Register;