import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        formData
      );
      setMessage(response.data.message);
      navigate("/signin");
    } catch (error) {
      setMessage(error.response?.data?.message || "Error signing up");
    }
  };

  const styles = {
    container: {
      display: "flex",
      width: "800px",
      height: "400px",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      margin: "auto",
      backgroundColor: "#f0f0f0",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    signup: {
      flex: 1,
      backgroundColor: "white",
      padding: "40px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    socialIcons: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    icon: {
      width: "20px",
      height: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid #ccc",
      borderRadius: "50%",
      fontSize: "18px",
      textDecoration: "none",
      color: "black",
      cursor: "pointer",
    },
    formInput: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    formButton: {
      width: "100%",
      padding: "10px",
      marginTop: "10px",
      backgroundColor: "#000033",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    formButtonHover: {
      backgroundColor: "#333366",
    },
    message: {
      marginTop: "10px",
      color: "green",
    },
    welcomeBack: {
      flex: 1,
      backgroundColor: "#54d2d2",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      padding: "40px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Signup Section */}
      <div style={styles.signup}>
        <h1>Create Account</h1>
        <div style={styles.socialIcons}>
          <a href="https://www.facebook.com/" style={styles.icon}>
            f
          </a>
          <a href="https://www.google.co.in/" style={styles.icon}>
            G+
          </a>
          <a href="https://in.linkedin.com/" style={styles.icon}>
            in
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            style={styles.formInput}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.formInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.formInput}
          />
          <button type="submit" style={styles.formButton}>
            SIGN UP
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>

      {/* Welcome Back Section */}
      <div style={styles.welcomeBack}>
        <h2>Welcome Back!</h2>
        <p>To keep connected with us, please login with your personal info</p>
      </div>
    </div>
  );
};

export default Signup;
