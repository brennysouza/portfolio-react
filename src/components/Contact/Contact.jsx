import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

// setting errors to empty string
const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const inputChange = (dataData) => {
    const { name, value } = dataData.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      emailValid(value);
    }
  };

  const emailValid = (email) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validRegex = regexEmail.test(email);
    setErrors((errErrors) => ({
      ...errErrors,
      email: validRegex ? "" : "Invalid email address.",
    }));
  };

  const requireName = (dataData) => {
    const { name, value } = dataData.target;
    if (!value) {
      setErrors((errErrors) => ({
        ...errErrors,
        [name]: `${capitalizeFirstLetter(name)} is required`,
      }));
    } else if (name === "email") {
      emailValid(value);
    } else {
      setErrors((errErrors) => ({
        ...errErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (dataData) => {
    dataData.preventDefault();
    // Add code for form submission 
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={inputChange}
            onBlur={requireName}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={inputChange}
            onBlur={requireName}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={inputChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default Contact;

