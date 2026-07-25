import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ThankYouCard = () => {
  const [donorName, setDonorName] = useState("");
  const [requesterName, setRequesterName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch DonorName from localStorage
    const storedDonorName = localStorage.getItem("DonorName");
    if (storedDonorName) {
      setDonorName(storedDonorName);
    } else {
      setDonorName("Donor"); // Fallback if not found
    }

    // Fetch RequesterName from localStorage
    const storedRequesterName = localStorage.getItem("RequesterName");
    if (storedRequesterName) {
      setRequesterName(storedRequesterName);
    } else {
      setRequesterName("Receiver"); // Fallback if not found
    }
  }, []);

  const handleBackToHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(to bottom, #d9f7be, #f0fff4)",
        color: "#333",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          textAlign: "center",
          width: "90%",
          maxWidth: "500px",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            color: "#4CAF50",
            marginBottom: "10px",
          }}
        >
          Thank You!
        </h1>
        <h2
          style={{
            fontSize: "1.5rem",
            color: "#007BFF",
            marginBottom: "20px",
          }}
        >
          {donorName}
        </h2>
        <p
          style={{
            fontSize: "1rem",
            marginBottom: "0",
          }}
        >
          for contributing to society by donating to{" "}
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            {requesterName}
          </span>
          .
        </p>
        <img
          src="./img.png"
          alt="Thank You Icon"
          style={{
            width: "330px",
            marginTop: "20px",
          }}
        />
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={handleBackToHome}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouCard;
