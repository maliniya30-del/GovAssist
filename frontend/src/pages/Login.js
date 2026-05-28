import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";



function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            const response = await axios.post(
              "https://govassist-backend.onrender.com/api/auth/login",
              {
                email,
                password
              }
            );
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.role);
           
            alert(response.data.message); 
            navigate("/dashboard");
          } catch(error) {
              alert("Login failed");
          }
        }
    return(
        <div className="login-page">
          <div className="login-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
              <input
               type="email"
               placeholder="Enter your email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               />

               <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button></form>

            <Link to="/register"><p> don't have an account? Register</p>
            </Link>




          </div>
            
            
        </div>
    );
}
export default Login;