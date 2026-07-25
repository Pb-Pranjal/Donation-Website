import React from "react";
import { useNavigate } from "react-router-dom";

const Getstarted = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate("/requestlist");
  };

  const handleRequestClick = () => {
    navigate("/requestform");
  };

  return (
    <div className="container">
      <h1>Helping Each Other Makes a Better World</h1>
      <div className="cards">
        {/* Donation Card */}
        <div className="card">
          <img src="./donthatsit.png" alt="Donation" />
          <h2>Are You Going To Donate?</h2>
          <p>
            "Every item you donate brings hope and support to those who need it
            most."
          </p>
          <button onClick={handleDonateClick}>Donate</button>
        </div>

        {/* Request Card */}
        <div className="card">
          <img src="./donthatsit.png" alt="Request" />
          <h2>Are You Going To Request?</h2>
          <p>
            "Every challenge is an opportunity for change, and help is just a
            step away."
          </p>
          <button onClick={handleRequestClick}>Request</button>
        </div>
      </div>

      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f9f9f9;
          text-align: center;
        }

        .container {
          padding: 20px;
        }

        h1 {
          color: #20a050;
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .card {
          // background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .card img {
          width: 100%;
          // max-height: 400px;
          object-fit: cover;
          margin-bottom: 15px;
        }

        .card h2 {
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 10px;
        }

        .card p {
          font-size: 1.2rem;
          color: #555;
          margin-bottom: 20px;
        }

        .card button {
          background-color: #20a050;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
        }

        .card button:hover {
          background-color: #18803c;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }

          .card h2 {
            font-size: 1.5rem;
          }

          .card p {
            font-size: 1rem;
          }

          .card button {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Getstarted;
