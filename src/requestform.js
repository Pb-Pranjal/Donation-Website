import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // Import the CSS file for styling

export default function Requestform() {
  // State management for form fields
  const [Requestername, setRequesterName] = useState("");
  const [Age, setAge] = useState("");
  const [Methods, setMethods] = useState("individual");
  const [Qtyneed, setQtyneed] = useState("");
  const [Address, setAddress] = useState("");
  const [Descr, setDescr] = useState("");
  const [Neededby, setNeededby] = useState("");
  const navigate = useNavigate();

  // Function to handle form submission
  async function submitData(e) {
    e.preventDefault();

    try {
      let formData = {
        Requestername,
        Age,
        Methods,
        Qtyneed,
        Address,
        Descr,
        Neededby,
      };
      // const navigate = useNavigate();

      console.log(formData);

      // Send the form data to the backend API
      let res = await fetch("http://localhost:5000/requestedreg", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // alert(data.msg || "Submission not successful!");

      let data = await res.json();
      console.log(data);
      navigate("/requestlist");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "70%",
          background: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "50%",
            backgroundImage:
              "url('https://community.ableaura.com/uploads/default/original/1X/40ebb682164307b34f7c48f717453cc9f1bafbc9.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          style={{
            width: "50%",
            padding: "20px",
            backgroundColor: "#f0f4f7",
          }}
        >
          <h1
            style={{
              fontSize: "1.8em",
              color: "#26a69a",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Share you need
          </h1>
          <form onSubmit={submitData}>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ fontWeight: "bold", color: "#555" }}>
                Full Name
              </label>
              <input
                type="text"
                value={Requestername}
                onChange={(e) => setRequesterName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
                placeholder="Enter your full name"
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ fontWeight: "bold", color: "#555" }}>Age</label>
              <input
                type="number"
                value={Age}
                onChange={(e) => setAge(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
                placeholder="Enter your age"
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ fontWeight: "bold", color: "#555" }}>
                Methods
              </label>
              <select
                value={Methods}
                onChange={(e) => setMethods(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
              >
                <option value="clothes">Clothes</option>
                <option value="Money">Money</option>
              </select>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ fontWeight: "bold", color: "#555" }}>
                Quantity needed
              </label>
              <input
                type="number"
                value={Qtyneed}
                onChange={(e) => setQtyneed(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
                placeholder="Enter the quantity needed"
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ fontWeight: "bold", color: "#555" }}>
                Address
              </label>
              <input
                type="text"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
                placeholder="Address"
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ fontWeight: "bold", color: "#555" }}>
                Describe you situation
              </label>
              <input
                type="text"
                value={Descr}
                onChange={(e) => setDescr(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
                placeholder="Describe your situation"
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ fontWeight: "bold", color: "#555" }}>
                Needed by what time?
              </label>
              <input
                type="text"
                value={Neededby}
                onChange={(e) => setNeededby(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
                placeholder="Needed by what time?"
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "#26a69a",
                  color: "#fff",
                  border: "none",
                  padding: "12px",
                  borderRadius: "5px",
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "background 0.3s ease",
                }}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
