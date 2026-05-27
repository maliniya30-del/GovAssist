import React, { useState } from "react";
import "./IncomeCertificate.css";
import axios from "axios";
function IncomeCertificate(){
    const[fullName, setFullName] = useState("");
    const[income, setIncome] = useState("");
    const[occupation, setOccupation] = useState("");
    const[address, setAddress] = useState("");
    const handleSubmit =  async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/api/income-certificate/create",
                { fullName,income,occupation,address}
            );
            alert(response.data.message);
        } catch(error) {
            alert("Request submission failed")
            console.log(error);
        }
    };

    return (
        <div className="income-form-page">
          <div className="income-form-container">
            <h1>Income Certificate Request</h1>
            <form
              className="income-form"
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
                 type="number"
                 placeholder="Annual Income"
                 value={income}
                onChange={(e) =>
                    setIncome(e.target.value)
                }
              />
              <input
                 type="text"
                 placeholder="Occupation"
                 value={occupation}
                onChange={(e) =>
                    setOccupation(e.target.value)
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
    )
};
export default IncomeCertificate;
