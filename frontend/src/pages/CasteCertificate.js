import React, { useState } from "react";
import "./CasteCertificate.css";
import axios from "axios";
function CasteCertificate() {
    const[fullName, setFullName] = useState("");
    const[caste, setCaste] = useState("");
    const[religion, setReligion] = useState("");
    const[address, setAddress] = useState("");
    const handleSubmit =  async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/api/caste-certificate/create",
                { fullName,caste,religion,address}
            );
            alert(response.data.message);
        } catch(error) {
            alert("Request submission failed")
        }
    };
    return (
        <div className="caste-form-page">
          <div className="caste-form-container">
            <h1>Caste Certificate Request</h1>
            <form
              className="caste-form"
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
                 placeholder="Caste"
                value={caste}
                onChange={(e) =>
                    setCaste(e.target.value)
                }
              />
              <input
                type="text"
                 placeholder="Religion"
                value={religion}
                onChange={(e) =>
                    setReligion(e.target.value)
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
export default CasteCertificate;