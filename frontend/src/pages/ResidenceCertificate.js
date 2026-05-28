import React, { useState } from "react";
import "./ResidenceCertificate.css";
import axios from "axios";
function ResidenceCertificate() {
    const[fullName, setFullName] = useState("");
    const[residenceType, setResidenceType] = useState("");
    const[yearsStayed, setYearsStayed] = useState("");
    const[address, setAddress] = useState("");
    const handleSubmit =  async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://govassist-backend.onrender.com/api/residence-certificate/create",
                { fullName,residenceType,yearsStayed,address,user:localStorage.getItem("userId")}
            );
            alert(response.data.message);
        } catch(error) {
            alert("Request submission failed")
        }
    };
    return (
        <div className="residence-form-page">
          <div className="residence-form-container">
            <h1>Residence Certificate Request</h1>
            <form
              className="residence-form"
              onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) =>
                    setFullName(e.target.value)
                }
              />
              <input
                type="text"
                 placeholder="ResidenceType"
                value={residenceType}
                onChange={(e) =>
                    setResidenceType(e.target.value)
                }
              />
              <input
                type="text"
                placeholder="YearsStayed"
                value={yearsStayed}
                onChange={(e) =>
                    setYearsStayed(e.target.value)
                }
              />
              
              <textarea
                 placeholder="Enter-Address"
                 value={address}
                 onChange={(e) =>
                    setAddress(e.target.value)
                 }
              />
              <button type="submit">Submit Request</button>



              </form>
          </div>
        </div>
    );

}
export default ResidenceCertificate;