// // import React, { useState } from "react";
// import axios from "axios";
// import "./signin.css";
// import { useNavigate } from "react-router-dom";

// const Signin = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();
//   const [message, setMessage] = useState("");
//   const [token, setToken] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/signin",
//         formData
//       );
//       setMessage(response.data.message);
//       setToken(response.data.token); // Save token for authentication
//       localStorage.setItem("token", response.data.token);
//       navigate("/");
//       // Save token to local storage
//     } catch (error) {
//       setMessage(error.response.data.message || "Error signing in");
//     }
//   };

//   return (
//     <div className="container">
//       {/* Signin Section */}
//       <div className="signin-section">
//         <h1>Sign in</h1>
//         <div className="social-icons">
//           <a href="https://www.facebook.com/">f</a>
//           <a href="https://www.google.co.in/">G+</a>
//           <a href="https://in.linkedin.com/">in</a>
//         </div>
//         <p>or use your account</p>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <a href="#">Forgot your password?</a>
//           <button type="submit">Sign In</button>
//         </form>
//         {message && <p>{message}</p>}
//       </div>

//       {/* Welcome Section */}
//       <div className="welcome-section">
//         <h2>Hello, Friend!</h2>
//         <p>Enter your personal details and start your journey with us</p>
//       </div>
//     </div>
//   );
// };

// export default Signin;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/signin",
        formData
      );
      setMessage(response.data.message);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      setMessage(error.response?.data?.message || "Error signing in");
    }
  };

  const styles = {
    container: {
      display: "flex",
      width: "800px",
      height: "500px",
      margin: "auto",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f8f8f8",
    },
    signinSection: {
      width: "50%",
      backgroundColor: "white",
      padding: "40px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    welcomeSection: {
      width: "50%",
      backgroundColor: "#5ce0cc",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
    },
    socialIcons: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    icon: {
      display: "inline-block",
      width: "40px",
      height: "40px",
      backgroundColor: "#f0f0f0",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
      fontSize: "1.2rem",
      color: "black",
    },
    form: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    input: {
      width: "100%",
      padding: "10px",
      fontSize: "1rem",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    link: {
      textAlign: "right",
      textDecoration: "none",
      fontSize: "0.9rem",
      color: "#555",
    },
    linkHover: {
      color: "#000",
    },
    button: {
      padding: "10px",
      backgroundColor: "#000",
      color: "white",
      border: "none",
      borderRadius: "5px",
      fontSize: "1rem",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#333",
    },
    message: {
      marginTop: "10px",
      color: "red",
    },
  };

  return (
    <div style={styles.container}>
      {/* Signin Section */}
      <div style={styles.signinSection}>
        <h1>Sign in</h1>
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
        <p>or use your account</p>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <a href="#" style={styles.link}>
            Forgot your password?
          </a>
          <button type="submit" style={styles.button}>
            Sign In
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>

      {/* Welcome Section */}
      <div style={styles.welcomeSection}>
        <h2>Hello, Friend!</h2>
        <p>Enter your personal details and start your journey with us</p>
      </div>
    </div>
  );
};

export default Signin;
