import React, { useState } from 'react';
import axios from 'axios';

const BuyerRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    //confirmPassword: '',
   // profileImage: null,
    phoneNumber: '',
    address: '',
    creditCardNumber: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for submission status
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profileImage: file,
    }));
  };

 /////////////////////////////////////new//////////////////////////////////////////////// 
 const url = "http://localhost:6006/api/register";
 
 const handleSubmit = (e) => { 
  e.preventDefault(); 

  axios 
    .post(url, formData) 
    .then((response) => { 
      console.log(response.data); 
      setIsSubmitted(true); 
      // Handle response... 
    }) 
    .catch((error) => { 
      console.error("There was an error!", error);
      setIsSubmitted(false); 
    }); 
};

/////////////////////////////////////

  const formStyle = {
    maxWidth: '400px',
    padding: '20px',
    border: '2px solid #51b884',
    borderRadius: '20px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'sans-serif',
  };
  const labelStyle = {
    display: 'block',
    margin: '10px 0',
  };
  const inputStyle = {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    marginBottom: '10px',
  };
  const buttonStyle = {
    background: '#34bd78',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h2 style={{ textAlign: 'center' }}>Welcome to Customer Panel</h2>
      <label style={labelStyle}>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={inputStyle} />
      </label>
      <label style={labelStyle}>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} style={inputStyle} />
      </label>
      <label style={labelStyle}>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} style={inputStyle} />
      </label>
      
      <label style={labelStyle}>
        Phone Number:
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} style={inputStyle} />
      </label>
      <label style={labelStyle}>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleInputChange} style={inputStyle} />
      </label>
      <label style={labelStyle}>
        Credit Card Number:
        <input type="text" name="creditCardNumber" value={formData.creditCardNumber} onChange={handleInputChange} style={inputStyle} />
      </label>
     
      <button type="submit" style={buttonStyle}>
        Register as a Buyer
      </button>
      {isSubmitted && <div>Buyer added successfully!</div>} {/* Success message */}
    </form>
  );
};

export default BuyerRegistration;