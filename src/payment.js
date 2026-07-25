import React, { useState, useEffect } from "react";

const PaymentGateway = () => {
  const [donorName, setDonorName] = useState("Donor");
  const [receiverName, setReceiverName] = useState("Receiver");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    // Fetch DonorName from localStorage
    const storedDonorName = localStorage.getItem("DonorName");
    if (storedDonorName) {
      setDonorName(storedDonorName);
    }

    // Fetch ReceiverName from localStorage
    const storedReceiverName = localStorage.getItem("RequesterName");
    if (storedReceiverName) {
      setReceiverName(storedReceiverName);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation Amount:", amount);
    // Proceed with donation processing logic here
  };

  return (
    <div>
      <header style={styles.header}>Donation Payment Gateway</header>

      <div style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.heading}>Complete Your Donation</h2>

          <div style={styles.donorInfo}>Donor Name: {donorName}</div>

          <div style={styles.donorInfo}>Receiver Name: {receiverName}</div>

          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="amount">Donation Amount</label>
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="Enter amount in USD"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                style={styles.input}
              />
            </div>

            <h3>Select Payment Method</h3>
            <div style={styles.paymentMethods}>
              <a
                href="https://example.com/credit-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.goodreturns.in/img/2020/01/creditcard-23-1461389394-1579856618.jpg"
                  alt="Credit/Debit Card"
                  style={styles.paymentImage}
                />
              </a>
              <a
                href="https://example.com/upi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.presentations.gov.in/wp-content/uploads/2020/06/Preview.png"
                  alt="UPI"
                  style={styles.paymentImage}
                />
              </a>
              <a
                href="https://example.com/net-banking"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8cG5RwWFo5o5dnzZnbe8h70B4FIuq-lhkrE7gq_aU-v42u0VIUuL9DiI0TvwzX7U0_Q&usqp=CAU"
                  alt="Net Banking"
                  style={styles.paymentImage}
                />
              </a>
              <a
                href="https://example.com/wallet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://logo-icons.com/cdn/shop/files/2709-logo-1713637664.017.svg?v=1713643463"
                  alt="Wallet"
                  style={styles.paymentImage}
                />
              </a>
            </div>

            <button type="submit" style={styles.submitBtn}>
              Proceed to Pay
            </button>
          </form>
        </div>
      </div>

      <footer style={styles.footer}>
        &copy; 2025 Bridge the Gap. All Rights Reserved.
      </footer>
    </div>
  );
};

// Styles remain unchanged
const styles = {
  header: {
    backgroundColor: "#3ed1b8",
    color: "white",
    textAlign: "center",
    padding: "1rem 0",
    fontSize: "1.5rem",
    animation: "fadeInDown 1s",
  },
  container: {
    maxWidth: "600px",
    margin: "2rem auto",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    animation: "fadeInUp 1s",
  },
  content: {
    padding: "2rem",
  },
  heading: {
    marginTop: "0",
    color: "#3ed1b8",
  },
  donorInfo: {
    textAlign: "center",
    margin: "1rem 0",
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "#3ed1b8",
  },
  formGroup: {
    marginBottom: "1.5rem",
  },
  input: {
    width: "100%",
    padding: "0.8rem",
    marginTop: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  paymentMethods: {
    display: "flex",
    justifyContent: "space-around",
    margin: "1.5rem 0",
  },
  paymentImage: {
    width: "60px",
    height: "60px",
    cursor: "pointer",
    border: "2px solid transparent",
    borderRadius: "10px",
    transition: "border 0.3s ease, transform 0.3s ease",
  },
  submitBtn: {
    backgroundColor: "#3ed1b8",
    color: "white",
    padding: "1rem",
    border: "none",
    borderRadius: "5px",
    width: "100%",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  footer: {
    textAlign: "center",
    padding: "1rem 0",
    fontSize: "0.9rem",
    color: "#3ed1b8",
  },
};

export default PaymentGateway;
