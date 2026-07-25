import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ContactContainer = styled.div`
  width: 100%;
  background: #e8f5e9;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  h1 {
    font-size: 2em;
    color: #26a69a;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
`;

const FormLeft = styled.div`
  width: 60%;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
  resize: none;
  height: 80px;
`;

const Button = styled.button`
  width: 100%;
  background: #26a69a;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #00796b;
  }
`;

const FormRight = styled.div`
  width: 35%;
  background: #c8e6c9;
  padding: 15px;
  border-radius: 5px;
  color: #555;
`;

const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      phoneNumber,
      email,
      message,
    };

    try {
      const response = await post(
        "http://localhost:5000/fusionfest/contactus",
        formData
      );
      setStatusMessage(response.data.message);
    } catch (error) {
      setStatusMessage("Error submitting form");
    }
  };

  return (
    <ContactContainer>
      <Header>
        <h1>Contact Us</h1>
      </Header>
      <FormContainer>
        <FormLeft>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                type="text"
                id="full-name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input
                type="tel"
                id="phone-number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email ID</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here"
              ></Textarea>
            </FormGroup>
            <FormGroup>
              <Button type="submit">Submit</Button>
            </FormGroup>
          </form>
          {statusMessage && <p>{statusMessage}</p>}
        </FormLeft>

        <FormRight>
          <h3>Get to know each other</h3>
          <p>
            <strong>M:</strong> 987XXXXXXX
          </p>
          <p>
            <strong>Email:</strong> donate@gmail.com
          </p>
        </FormRight>
      </FormContainer>
    </ContactContainer>
  );
};

export default ContactUs;
