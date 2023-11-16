import React, { useState } from "react";
import "./Contact.css";

// Function to capitalize the first letter of a string

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function Contact() {
    // State to manage form data

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to manage form validation errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  // Function to handle input change
  const inputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // If the changed input is email, perform email validation

    if (name === "email") {
      emailValid(value);
    }
  };

  // Function to validate email format

  const emailValid = (email) => {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const validRegex = regexEmail.test(email);
    setErrors((errErrors) => ({
      ...errErrors,
      email: validRegex ? "" : "Invalid email address.",
    }));
    return validRegex;

  };

    // Function to require name field

  const requireName = (event) => {
    const { name, value } = event.target;
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

    // Function to validate the entire form

  const validateForm = () => {
    let isValid = true;

    // Validate name
    if (!formData.name) {
      setErrors((errErrors) => ({
        ...errErrors,
        name: "Name is required",
      }));
      isValid = false;
    } else {
      setErrors((errErrors) => ({
        ...errErrors,
        name: "",
      }));
    }

    // Validate email
    if (!formData.email || !emailValid(formData.email)) {
      setErrors((errErrors) => ({
        ...errErrors,
        email: "Invalid email address",
      }));
      isValid = false;
    } else {
      setErrors((errErrors) => ({
        ...errErrors,
        email: "",
      }));
    }

    return isValid;
  };

    // Function to handle form submission

  const handleSubmit = (event) => {
    event.preventDefault();

        // If the form is valid, log the form data and reset the form

    if (validateForm()) {
      console.log("Form submitted:", formData);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

    // JSX structure for the Contact component input box in the contact page of site

  return (
    <div className="contact-container">
      <div className="contactme">
        <div className="contacttitle">
          <h1>Contact Me</h1>
        </div>
        <div className="contactform">
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
      </div>
    </div>
  );
}

export default Contact;
