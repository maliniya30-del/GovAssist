import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RequestHistory.css";
function RequestHistory() {
        const [birthRequests, setBirthRequests] = useState([]);
        const [incomeRequests, setIncomeRequests] = useState([]);
        const [casteRequests, setCasteRequests] = useState([]);
        const [residenceRequests, setResidenceRequests] = useState([]);
        const [panRequests, setPanRequests] = useState([]);
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
                "http://localhost:5000/api/birth-certificate/all"
            );
            setBirthRequests(response.data);
        } catch(error) {
            console.log(error);
        }
    };
     const fetchIncomeRequests = async () => {
        try {
            
            const response = await axios.get(
                "http://localhost:5000/api/income-certificate/all"
            );
            setIncomeRequests(response.data);
        } catch(error) {
            console.log(error);
        }
    };
    const fetchCasteRequests = async () => {
        try {
            
            const response = await axios.get(
                "http://localhost:5000/api/caste-certificate/all"
            );
            setCasteRequests(response.data);
        } catch(error) {
            console.log(error);
        }
    };
    const fetchResidenceRequests = async () => {
        try {
           
            const response = await axios.get(
                "http://localhost:5000/api/residence-certificate/all"
            );
            setResidenceRequests(response.data);
        } catch(error) {
            console.log(error);
        }
    };
    const fetchPanRequests = async () => {
        try {
            
            const response = await axios.get(
                "http://localhost:5000/api/pan-aadhaar/all"
            );
            setPanRequests(response.data);
        } catch(error) {
            console.log(error);
        }
    };
    return(
        <div className="history-page">
            <h1>Request History</h1>
            <div className="request-list">
              <h2>Birth certificate Requests</h2>
                {

                    birthRequests.map((request) => (
                        <div className="request-card"
                                key={request._id}>
                            <h2>{request.fullName}</h2>
                            <p>Dob:{request.dob}</p>
                            <p>Gender: {request.gender}</p>
                            <p>Address: {request.address}</p>
                            <p>Status:{request.status}</p>

                        </div>
                    ))
                }
                <h2>Income certificate Requests</h2>
                {

                    incomeRequests.map((request) => (
                        <div className="request-card"
                                key={request._id}>
                            <h2>{request.fullName}</h2>
                            <p>Income:{request.income}</p>
                            <p>Occupation: {request.occupation}</p>
                            <p>Address: {request.address}</p>
                            <p>Status:{request.status}</p>

                        </div>
                    ))
                }
                <h2>Caste certificate Requests</h2>
                {

                    casteRequests.map((request) => (
                        <div className="request-card"
                                key={request._id}>
                            <h2>{request.fullName}</h2>
                            <p>Caste:{request.caste}</p>
                            <p>Religion: {request.religion}</p>
                            <p>Address: {request.address}</p>
                            <p>Status:{request.status}</p>

                        </div>
                    ))
                }
                <h2>Residence certificate Requests</h2>
                {

                    residenceRequests.map((request) => (
                        <div className="request-card"
                                key={request._id}>
                            <h2>{request.fullName}</h2>
                            <p>Residence Type: {request.dob}</p>
                            <p>Years Stayed: {request.gender}</p>
                            <p>Address: {request.address}</p>
                            <p>Status: {request.status}</p>

                        </div>
                    ))
                }
                <h2>PAN/Aadhaar Requests</h2>
                {

                    panRequests.map((request) => (
                        <div className="request-card"
                                key={request._id}>
                            <h2>{request.fullName}</h2>
                            <p>ServiceType: {request.serviceType}</p>
                            <p>Aadhaar Number: {request.aadhaarNumber}</p>
                            <p>PAN Number: {request.panNumber}</p>
                            <p>Address: {request.address}</p>
                            <p>Status: {request.status}</p>

                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default RequestHistory;