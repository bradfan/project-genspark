import React, { useState } from "react";

function Dashboard() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
   console.log("Name:", firstName);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="dashboard">
      <div className="dashboard-input">
        <input
          className="input-dashboard"
          type="text"
          value={firstName}
          onChange={handleInputChange}
          placeholder="Enter first name here"
        ></input>

      
        <input
          className="input-dashboard"
          type="text"
          value={lastName}
          onChange={handleInputChange}
          placeholder="Enter last name here"
        ></input>

        
        <input
          className="input-dashboard"
          type="text"
          value={phoneNumber}
          onChange={handleInputChange}
          placeholder="Enter phone number here"
        ></input>

        <button
          className="btn btn-dashboard btn-submit"
          value={phoneNumber}
          onClick={(e) => {
            if (firstName === "") {
              return alert("Please enter your phone number.");
            }
            onSubmit(e);
          }}
          type="submit"
        >
          SUBMIT
        </button>

      </div>

      <div className="container">
        <div className="box box-one">
          <h1>{firstName}</h1>
        </div>
        <div className="box box-two">
        <h1>{lastName}</h1>
        </div>
        <div className="box box-three">
          <h1>{phoneNumber}</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
