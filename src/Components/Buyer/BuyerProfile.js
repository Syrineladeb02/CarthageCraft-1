import React, { useState } from 'react';
import axios from 'axios';

const BuyerProfile = ({ buyer, onUpdate, onDelete }) => {
  const [formData, setFormData] = useState({
    name: buyer.name,
    email: buyer.email,
    password: '', // you might want to handle password separately
    phoneNumber: buyer.phoneNumber,
    address: buyer.address,
    creditCardNumber: buyer.creditCardNumber,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateProfile = () => {
    // Implement logic to update the buyer's profile
    // You may want to add validation and error handling
    onUpdate(formData);
  };

  const handleDeleteProfile = () => {
    // Implement logic to delete the buyer's profile
    // You may want to add confirmation and error handling
    onDelete();
  };

  return (
    <div>
      <h2>Buyer Profile</h2>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Credit Card Number:
        <input type="text" name="creditCardNumber" value={formData.creditCardNumber} onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={handleUpdateProfile}>Update Profile</button>
      <button onClick={handleDeleteProfile}>Delete Profile</button>
    </div>
  );
};

export default BuyerProfile;