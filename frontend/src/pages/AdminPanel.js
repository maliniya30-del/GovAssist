import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminPanel.css";
function AdminPanel() {
    const [birthrequests, setBirthRequests] = useState([]);
    const [incomerequests, setIncomeRequests] = useState([]);
    const [casterequests, setCasteRequests] = useState([]);
    const [residencerequests, setResidenceRequests] = useState([]);
    const [panrequests, setPanRequests] = useState([]);
    


    useEffect(() => {
            fetchBirthRequests();
            fetchIncomeRequests();
            fetchCasteRequests();
            fetchResidenceRequests();
            fetchPanRequests();

        }, []);
    const fetchBirthRequests = async () => {
        try {
            const response = await axios.get(
                "https://govassist-backend.onrender.com/api/birth-certificate/all"
            );
            setBirthRequests(response.data);
        } catch(error) {
            console.log(error);
        }
    };
    const fetchIncomeRequests = async () => {
        try {
            const response = await axios.get(
                "https://govassist-backend.onrender.com/api/income-certificate/all"
            );
            setIncomeRequests(response.data);
        } catch(error) {
            console.log(error);
        }
    };
    const fetchCasteRequests = async () => {
        try {
            const response = await axios.get(
                "https://govassist-backend.onrender.com/api/caste-certificate/all"
            );
            setCasteRequests(response.data);
        } catch(error) {
            console.log(error);
        }
    };
    const fetchResidenceRequests = async () => {
        try {
            const response = await axios.get(
                "https://govassist-backend.onrender.com/api/residence-certificate/all"
            );
            setResidenceRequests(response.data);
        } catch(error) {
            console.log(error);
        }
    };
    const fetchPanRequests = async () => {
        try {
            const response = await axios.get(
                "https://govassist-backend.onrender.com/api/pan-aadhaar/all"
            );
            setPanRequests(response.data);
        } catch(error) {
            console.log(error);
        }
    };




    const updateStatus = async (endpoint,id,status,fetchFunction) => {
        try {
            await axios.put(
                    `${endpoint}/update-status/${id}`,
                     { status }
            );
            fetchFunction();
        } catch(error) {
            console.log(error);
        }
    };
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/login");
    };
   
    return (
        <div className="admin-page">
            <h1>Admin Panel</h1>
            <div className="admin-list">
                <h2>Birth certificate requests</h2>
                { birthrequests.map((request) => (
                    <div className="admin-card"
                         key={request._id}>
                          <h2>{request.fullName}</h2>
                          <p>Dob: {request.dob}</p>
                          <p>Gender: {request.gender}</p>
                          <p>Address: {request.address}</p>
                          <div
                             className={`status ${request.status.toLowerCase()}`}>
                                {request.status}
                            </div>
                          <button onClick={() =>
                             updateStatus(
                                "https://govassist-backend.onrender.com/api/birth-certificate",
                                request._id,
                                "Approved",
                                fetchBirthRequests
                             )
                          }>Approve</button>
                          <button onClick={() =>
                             updateStatus(
                                "https://govassist-backend.onrender.com/api/birth-certificate",
                                request._id,
                                "Rejected",
                                fetchBirthRequests

                             )
                          }>Reject</button>
                    </div>
                  ))
                }
                <h2>Income certificate requests</h2>
                { incomerequests.map((request) => (
                    <div className="admin-card"
                         key={request._id}>
                          <h2>{request.fullName}</h2>
                          <p>Income: {request.income}</p>
                          <p>Occupation: {request.occupation}</p>
                          <p>Address: {request.address}</p>
                          <div
                             className={`status ${request.status.toLowerCase()}`}>
                                {request.status}
                            </div>
                          <button onClick={() =>
                             updateStatus(
                                "https://govassist-backend.onrender.com/api/income-certificate",
                                request._id,
                                "Approved",
                                fetchIncomeRequests
                             )
                          }>Approve</button>
                          <button onClick={() =>
                             updateStatus(
                                "https://govassist-backend.onrender.com/api/income-certificate",
                                request._id,
                                "Rejected",
                                fetchIncomeRequests
                             )
                          }>Reject</button>
                    </div>
                  ))
                }
                <h2>Caste certificate requests</h2>
                { casterequests.map((request) => (
                    <div className="admin-card"
                         key={request._id}>
                          <h2>{request.fullName}</h2>
                          <p>Caste: {request.caste}</p>
                          <p>Religion: {request.religion}</p>
                          <p>Address: {request.address}</p>
                          <div
                             className={`status ${request.status.toLowerCase()}`}>
                                {request.status}
                            </div>
                          <button onClick={() =>
                             updateStatus(
                                "https://govassist-backend.onrender.com/api/caste-certificate",
                                request._id,
                                "Approved",
                                fetchCasteRequests
                             )
                          }>Approve</button>
                          <button onClick={() =>
                             updateStatus(
                                "https://govassist-backend.onrender.com/api/caste-certificate",
                                request._id,
                                "Rejected",
                                fetchCasteRequests
                             )
                          }>Reject</button>
                    </div>
                  ))
                }
                <h2>Residence certificate requests</h2>
                { residencerequests.map((request) => (
                    <div className="admin-card"
                         key={request._id}>
                          <h2>{request.fullName}</h2>
                          <p>ResidenceType: {request.residenceType}</p>
                          <p>YearsStayed: {request.yearsStayed}</p>
                          <p>Address: {request.address}</p>
                          <div
                             className={`status ${request.status.toLowerCase()}`}>
                                {request.status}
                            </div>
                          <button onClick={() =>
                             updateStatus(
                                "https://govassist-backend.onrender.com/api/residence-certificate",
                                request._id,
                                "Approved",
                                fetchResidenceRequests
                             )
                          }>Approve</button>
                          <button onClick={() =>
                             updateStatus(
                                "https://govassist-backend.onrender.com/api/residence-certificate",
                                request._id,
                                "Rejected",
                                fetchResidenceRequests
                             )
                          }>Reject</button>
                    </div>
                  ))
                }
                <h2>PAN/Aadhaar requests</h2>
                { panrequests.map((request) => (
                    <div className="admin-card"
                         key={request._id}>
                          <h2>{request.fullName}</h2>
                          <p>ServiceType: {request.serviceType}</p>
                          <p>AadhaarNumber: {request.aadhaarNumber}</p>
                          <p>panNumber: {request.panNumber}</p>
                          <p>Address: {request.address}</p>
                          <div
                             className={`status ${request.status.toLowerCase()}`}>
                                {request.status}
                            </div>
                          <button onClick={() =>
                             updateStatus(
                                "https://govassist-backend.onrender.com/api/pan-aadhaar",
                                request._id,
                                "Approved",
                                fetchPanRequests
                             )
                          }>Approve</button>
                          <button onClick={() =>
                             updateStatus(
                                "https://govassist-backend.onrender.com/api/pan-aadhaar",
                                request._id,
                                "Rejected",
                                fetchPanRequests
                             )
                          }>Reject</button>
                    </div>
                  ))
                }
                

            </div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
    
}
export default AdminPanel;