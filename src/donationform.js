import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DonationForm() {
  const [Fullname, setFullname] = useState("");
  const [Age, setAge] = useState("");
  const [DonorType, setDonorType] = useState("individual");
  const [Address, setAddress] = useState("");
  const [Descr, setDescr] = useState("");
  const [Goingtodonate, setGoingtodonate] = useState("");
  const [ngo_ind, setNgo_Ind] = useState("");
  const navigate = useNavigate();

  async function submitData(e) {
    e.preventDefault();

    if (!Fullname || !Age || !Descr || !Address || !ngo_ind) {
      alert("Please fill in all the fields.");
      return;
    }

    try {
      const donor = {
        Fullname,
        Age,
        DonorType,
        Address,
        Descr,
        Goingtodonate,
        ngo_ind,
      };

      const res = await fetch("http://localhost:5000/donatedreg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donor),
      });

      const data = await res.json();
      alert(data.msg || "Submission not successful!");
      localStorage.setItem("DonorName", Fullname);
      if (Descr.toLowerCase() === "money") {
        navigate("/payment"); // Navigate to payment page
      } else {
        navigate("/thanku"); // Navigate to thanks page
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Something went wrong!");
    }
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
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
            background:
              "url('https://community.ableaura.com/uploads/default/original/1X/40ebb682164307b34f7c48f717453cc9f1bafbc9.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          style={{ width: "50%", padding: "20px", backgroundColor: "#f0f4f7" }}
        >
          <h1
            style={{
              fontSize: "1.8em",
              color: "#26a69a",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Your Donation Has The Power To Transform Lives
          </h1>
          <form onSubmit={submitData}>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ fontWeight: "bold", color: "#555" }}>
                Full Name
              </label>
              <input
                type="text"
                value={Fullname}
                onChange={(e) => setFullname(e.target.value)}
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
                Donor Type
              </label>
              <select
                value={DonorType}
                onChange={(e) => setDonorType(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
              >
                <option value="individual">Individual</option>
                <option value="organization">Organization</option>
              </select>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ fontWeight: "bold", color: "#555" }}>
                How would you like to contribute
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
                placeholder="Describe your contribution"
              />
              <label style={{ fontWeight: "bold", color: "#555" }}>
                Going to donate
              </label>
              <input
                type="number"
                value={Goingtodonate}
                onChange={(e) => setGoingtodonate(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
                placeholder="How much are you going to donate?"
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
                placeholder="Enter your address"
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ fontWeight: "bold", color: "#555" }}>
                NGO's or Individual
              </label>
              <input
                type="text"
                value={ngo_ind}
                onChange={(e) => setNgo_Ind(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
                placeholder="Enter NGO or individual name"
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
