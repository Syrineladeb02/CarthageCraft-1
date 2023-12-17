import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BuyerRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    creditCardNumber: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8008/api/buyer/register", formData)
      .then((response) => {
        console.log(response.data);
        setIsSubmitted(true);
        
        // Redirect to the buyer's profile after successful registration
        navigate('/buyer-profile');
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setIsSubmitted(false);
      });
  };

  const formStyle = {
    maxWidth: '500px',
    padding: '30px',
    border: '2px solid #51b884',
    borderRadius: '30px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'sans-serif',
    marginTop: '20px',
  };

  const labelStyle = {
    display: 'block',
    margin: '15px 0',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    border: '2px solid #9fbbad',
    borderRadius: '10px',
    marginBottom: '9px',
  };
  const pageStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:"5px"
  };
  const buttonStyle = {
    padding: '10px',
    border: '2px gray solid ',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  };

  return (
    <body style={{ padding: '20px', margin: '-10px', paddingLeft: '40px', marginTop: '4px', paddingRight: '45px' }}>
      <div style={pageStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', color: 'black', margin:"20px" }}>Welcome to Customer Panel</h2>
        
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

        <button type="submit" style={{ ...buttonStyle, background: '#34bd78', color: 'white' }}>
          Register as a Buyer
        </button>
        {isSubmitted && <div style={{ color: '#34bd78', marginTop: '15px', fontSize: '16px', fontWeight: 'bold' }}>Buyer added successfully!</div>}
      </form>
      </div>
    </body>
  );
};

export default BuyerRegistration;
