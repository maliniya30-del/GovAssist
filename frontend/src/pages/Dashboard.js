import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFileAlt, FaMoneyCheckAlt,FaHistory} from "react-icons/fa";
import "./Dashboard.css";
import { Link } from "react-router-dom";
function Dashboard() {
     const navigate = useNavigate();
     const handleLogout = () => {
          localStorage.removeItem("token");
          navigate("/login")
     };
     return(
          <div className="dashboard">
            <h1>Welcome to GovAssist Dashboard </h1>
            <p>Access all government services and brokerage assistance here</p>
            <div className="dashboard-cards">
               <Link to="/birth-certificate"
                className="dashboard-link"><div className="dashboard-card">
                    <FaFileAlt className="dashboard-icon" />
                    <h2>Birth Certificate</h2>
                    <p>Apply for birth certificates online</p>
               </div></Link>
              
               <Link to="/income-certificate"
                className="dashboard-link"> 
               <div className="dashboard-card">
                    <FaMoneyCheckAlt className="dashboard-icon" />
                    <h2>Income Certificate</h2>
                    <p>Manage income certificate request</p>
               </div></Link>
               

               <Link to="/caste-certificate"
                className="dashboard-link"> 
               <div className="dashboard-card">
                    <FaFileAlt className="dashboard-icon" />
                    <h2>Caste Certificate</h2>
                    <p>Manage caste certificate request</p>
               </div></Link>
              
               <Link to="/residence-certificate"
                className="dashboard-link"> 
               <div className="dashboard-card">
                    <FaFileAlt className="dashboard-icon" />
                    <h2>Residence Certificate</h2>
                    <p>Manage residence certificate request</p>
               </div></Link>
               
               <Link to="/pan-aadhaar"
                className="dashboard-link"> 
               <div className="dashboard-card">
                    <FaFileAlt className="dashboard-icon" />
                    <h2>PAN/Aadhaar</h2>
                    <p>Apply for PAN & Aadhaar services</p>
               </div></Link>


                <Link to="/request-history"
                className="dashboard-link"> 
               <div className="dashboard-card">
                    <FaHistory className="dashboard-icon" />
                    <h2>Request History</h2>
                    <p>Track your submitted requests</p>
               </div></Link>
               
               
               
               
               
            </div>
            <button onClick={handleLogout}>Logout</button>
          </div>
     );
}
export default Dashboard;