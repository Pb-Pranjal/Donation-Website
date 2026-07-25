import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router

import DonationForm from "./donationform"; // Import App (DonationForm)
import Requestform from "./requestform"; // Import App1
import RequestList from "./requestlist";
import Getstarted from "./getstarted";
import App from "./landing";
import PaymentGateway from "./payment";
import Signup from "./signup";
import Signin from "./signin";
import ThankYouCard from "./thanku";
import ContactUs from "./contactus";
import HowItWorks from "./aboutus";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/getstarted" element={<Getstarted />} />
        <Route path="/aboutus" element={<HowItWorks />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/payment" element={<PaymentGateway />} />
        <Route path="/requestform" element={<Requestform />} />
        <Route path="/requestlist" element={<RequestList />} />
        <Route path="/donationform" element={<DonationForm />} />
        <Route path="/thanku" element={<ThankYouCard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  </StrictMode>
);
