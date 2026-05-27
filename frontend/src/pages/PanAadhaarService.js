import React, { useState } from "react";
import "./PanAadhaarService.css";
import axios from "axios";
function PanAadhaarService(){
    const[formData, setFormData] = useState({
        fullName: "",
        serviceType: "",
        aadhaarNumber: "",
        panNumber: "",
        address: ""
    });
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response=await axios.post(
                "http://localhost:5000/api/pan-aadhaar/create",
                 formData,
                
            );
            alert(response.data.message);
        } catch(error){
            console.log(error);
            alert("Error submitting request");
        }
    };

    return (
        <div className="pan-page">
          <div className="pan-container">
             <h1>PAN/Aadhaar Service</h1>
             <div className="service-info">
                <h3>Required Documents</h3>
                <ul>
                    <li>Aadhaar Card Copy</li>
                    <li>passport Size Photo</li>
                    <li>Address Proof</li>
                </ul>
               
                <h3>Service Charges</h3>
                <p>₹ 150 Service Fee</p>
            
             </div>
             <form
               className="pan-form"
               onSubmit={handleSubmit}>
                <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                onChange={handleChange}
                required 
                />
                <select 
                  name="serviceType"
                  onChange={handleChange}
                  required
                >
                  <option value="">
                     Select Service
                  </option>
                  <option value="New PAN Card">
                    New Pan Card
                  </option>
                  <option value="PAN Correction">
                     PAN Correction
                  </option>
                  <option value="New Aadhaar">New Aadhaar</option>
                  <option value="Aadhaar Update">Aadhaar Update</option>
                </select>
                <input
                  type="text"
                  name="aadhaarNumber"
                  placeholder="Enter Aadhaar Number"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="panNumber"
                  placeholder="Enter PAN Number"
                  onChange={handleChange}
                />

                <input 
                  type="file"
                  name="document"/>
                <textarea
                  name="address"
                  placeholder="Enter Address"
                  onChange={handleChange}
                  required
                />
                <button type="submit">Submit Request</button>






             </form>


          </div>


        </div>
    );


}
export default PanAadhaarService;