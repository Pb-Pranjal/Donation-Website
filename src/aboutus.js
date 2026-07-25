import React from "react";

const HowItWorks = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#d4f0e3",
        margin: 0,
        padding: 0,
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <h1
          style={{
            textAlign: "center",
            color: "#114b3c",
            fontSize: "2.5em",
            marginBottom: "20px",
          }}
        >
          How Our Platform Works
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            position: "relative",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "2px solid #114b3c",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
              transition:
                "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
              position: "relative",
            }}
          >
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT8c6Qn6n7-SWX-wkV7D4oAEYsDm1jBH4zRhfEJwxhERE2xolPs"
              alt="Recipient Submit Request"
              style={{
                maxWidth: "80px",
                margin: "0 auto 15px",
                display: "block",
              }}
            />
            <h2
              style={{ fontSize: "1.5em", color: "#114b3c", margin: "10px 0" }}
            >
              Recipient Submit Request
            </h2>
            <p style={{ fontSize: "1em", color: "#333", lineHeight: "1.6" }}>
              Individuals or organizations in need can submit a request for
              donations through our platform.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              border: "2px solid #114b3c",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
              transition:
                "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
              position: "relative",
            }}
          >
            <img
              src="DONORMAKE.png"
              alt="Donor Make Profile"
              style={{
                maxWidth: "80px",
                margin: "0 auto 15px",
                display: "block",
              }}
            />
            <h2
              style={{ fontSize: "1.5em", color: "#114b3c", margin: "10px 0" }}
            >
              Donor Makes Profile
            </h2>
            <p style={{ fontSize: "1em", color: "#333", lineHeight: "1.6" }}>
              Donors create their profiles to get started with helping
              recipients.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              border: "2px solid #114b3c",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
              transition:
                "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
              position: "relative",
            }}
          >
            <img
              src="donatebrowser.png"
              alt="Donor Browse"
              style={{
                maxWidth: "80px",
                margin: "0 auto 15px",
                display: "block",
              }}
            />
            <h2
              style={{ fontSize: "1.5em", color: "#114b3c", margin: "10px 0" }}
            >
              Donor Browses
            </h2>
            <p style={{ fontSize: "1em", color: "#333", lineHeight: "1.6" }}>
              Donors can browse through the list of recipients and their
              requests.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              border: "2px solid #114b3c",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
              transition:
                "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
              position: "relative",
            }}
          >
            <img
              src="selectwhattodonate.png"
              alt="Select What to Donate"
              style={{
                maxWidth: "80px",
                margin: "0 auto 15px",
                display: "block",
              }}
            />
            <h2
              style={{ fontSize: "1.5em", color: "#114b3c", margin: "10px 0" }}
            >
              Select What to Donate
            </h2>
            <p style={{ fontSize: "1em", color: "#333", lineHeight: "1.6" }}>
              Choose the type of donation to contribute towards fulfilling the
              requests.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              border: "2px solid #114b3c",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
              transition:
                "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
              position: "relative",
            }}
          >
            <img
              src="donationmade.png"
              alt="Donation Made"
              style={{
                maxWidth: "80px",
                margin: "0 auto 15px",
                display: "block",
              }}
            />
            <h2
              style={{ fontSize: "1.5em", color: "#114b3c", margin: "10px 0" }}
            >
              Donation Made
            </h2>
            <p style={{ fontSize: "1em", color: "#333", lineHeight: "1.6" }}>
              Once finalized, the donation is made, helping the recipient in
              need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
