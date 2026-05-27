import React, { useState } from "react";
import "./BirthCertificate.css";
import axios from "axios";
function BirthCertificate() {
    const[fullName, setFullName] = useState("");
    const[dob, setDob] = useState("");
    const[gender, setGender] = useState("");
    const[address, setAddress] = useState("");
    const handleSubmit =  async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/api/birth-certificate/create",
                { fullName,dob,gender,address}
            );
            alert(response.data.message);
        } catch(error) {
            alert("Request submission failed")
        }
    };
    return (
        <div className="birth-form-page">
          <div className="birth-form-container">
            <h1>Birth Certificate Request</h1>
            <form
              className="birth-form"
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
                type="date"
                value={dob}
                onChange={(e) =>
                    setDob(e.target.value)
                }
              />
              <select
                value={gender}
                onChange={(e) =>
                    setGender(e.target.value)
                }
              >
                <option value="">
                    Select Gender
                </option>
                <option value="Male">
                    Male
                </option>
                <option value="Female">
                    Female
                </option>


              </select>
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
export default BirthCertificate;