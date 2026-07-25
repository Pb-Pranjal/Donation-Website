import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RequestList() {
  const [requests, setRequests] = useState([]);

  // Fetch requests from the backend
  useEffect(() => {
    async function fetchRequests() {
      try {
        const res = await axios.get(
          "http://localhost:5000/fusionfest/requester"
        );
        setRequests(res.data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    }
    fetchRequests();
  }, []);

  const handleDonateNow = (Requestername) => {
    // Store the requester name in local storage
    localStorage.setItem("RequesterName", Requestername || "Anonymous");
    // Redirect to the donation form
    window.location.href = "./donationform";
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "24px",
        }}
      >
        Requests
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        {requests.map((request, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/256/4439/4439947.png"
              alt="User Avatar"
              style={{
                borderRadius: "50%",
                marginBottom: "16px",
                height: "100px",
              }}
            />
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              {request.Requestername || "Anonymous"}
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#4a4a4a",
                textAlign: "center",
                marginBottom: "8px",
              }}
            >
              "{request.Descr}"
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <span
                role="img"
                aria-label="location"
                style={{ marginRight: "8px" }}
              >
                📍
              </span>
              <p style={{ fontSize: "14px" }}>{request.Address}</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <span
                role="img"
                aria-label="calendar"
                style={{ marginRight: "8px" }}
              >
                📅
              </span>
              <p style={{ fontSize: "14px" }}>Needed by: {request.Neededby}</p>
            </div>
            <button
              onClick={() => handleDonateNow(request.Requestername)}
              style={{
                backgroundColor: "#14b8a6",
                color: "white",
                padding: "8px 16px",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Donate Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
