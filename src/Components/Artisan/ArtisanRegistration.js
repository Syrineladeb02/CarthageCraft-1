import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ArtisanRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    bio: '',
    region: '', // Add region field
    // Product details
    productName: '',
    productDescription: '',
    productPrice: '',
    productImage: null,
  });

  const [showProductFields, setShowProductFields] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e, field) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [field]: file,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the API endpoint based on the backend changes
    axios
    .post("http://localhost:6006/api/artisan/register", formData)
    .then((response) => {
      console.log(response.data);
      setIsSubmitted(true);
      
      // Redirect to the buyer's profile after successful registration
      navigate('/artisan-profile');
    })
    .catch((error) => {
      console.error("There was an error!", error);
      setIsSubmitted(false);
    });
};
  

  const handleAddProduct = () => {
    setShowProductFields(true);
  };

  const handleNotNow = () => {
    setShowProductFields(false);
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
    display: "block",
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

  const textareaStyle = {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    marginBottom: '10px',
  };

  const fileInputStyle = {
    marginBottom: '10px',
  };

  const buttonStyle = {
    padding: '10px',
    border: '2px gray solid ',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  };

  const linkStyle = {
    color: '#2d9ccf',
  };
  const pageStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:"5px"
  };

  return (
   
    <body style={{ padding: '20px', margin: '-10px', paddingLeft: '40px', marginTop: '10px', paddingRight: '45px' }}>
       <div style={pageStyle}>
       <form style={formStyle} onSubmit={handleSubmit}>
         <h2 style={{ textAlign: 'center', color: 'black' , margin:"20px"}}>Welcome to Artisan Panel</h2>
       
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
        Region:
        <input
          type="text"
          name="region"
          value={formData.region}
          onChange={handleInputChange}
          style={inputStyle}
        />
      </label>
        <label style={labelStyle}>
          Bio:
          <textarea name="bio" value={formData.bio} onChange={handleInputChange} style={textareaStyle} />
        </label>
        

        {/* Conditionally render product fields */}
        {showProductFields && (
          <>
            <h3>Add Product</h3>
            <label style={labelStyle}>
              Name:
              <input type="text" name="productName" value={formData.productName} onChange={handleInputChange} style={inputStyle} />
            </label>
            <label style={labelStyle}>
              Description:
              <textarea name="productDescription" value={formData.productDescription} onChange={handleInputChange} style={textareaStyle} />
            </label>
            <label style={labelStyle}>
              Price:
              <input type="text" name="productPrice" value={formData.productPrice} onChange={handleInputChange} style={inputStyle} />
            </label>
            <label style={labelStyle}>
              Image:
              <input type="file" name="productImage" onChange={(e) => handleImageChange(e, 'productImage')} accept="image/*" style={fileInputStyle} />
            </label>
            
            <p style={{ padding: '20px' }}>
          Already have an account?{' '}
          <Link to="/login" style={linkStyle}>
            Login here
          </Link>
        </p>
       
          </>
        
        )}

<button type="button" style={{ ...buttonStyle, background: '#42555f', color: 'white' }} onClick={handleAddProduct}>
          Add Product
        </button>
        <button type="button" style={{ ...buttonStyle, background: '#42555f', color: 'white' }} onClick={handleNotNow}>
          Not Now
        </button>
        <button type="submit" style={{ ...buttonStyle, background: '#34bd78', color: 'white' }}>
          Register
        </button>
        {isSubmitted && <div style={{ color: '#34bd78', marginTop: '15px', fontSize: '16px', fontWeight: 'bold' }}>Artisan added successfully!</div>}
      </form>
      </div>
    </body>
  );
};

export default ArtisanRegistration;