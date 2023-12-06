import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"; 
import { useNavigate } from "react-router-dom"; 


const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null); // State for error message

  const url = "http://localhost:6006/api/signIn";
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending login data:", loginData);
    axios.post(url, loginData)
      .then((response) => {
        console.log(response.data);
        const token = response.data.token;
        localStorage.setItem("token", token);
        if (response.data.user.role === 'user') {
          navigate('/products');
        } else {
          navigate('/dashboard');
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setError("Incorrect email or password"); // Set error message
      });
  };

  const formStyle = {
    maxWidth: 'center',
    padding: '40px',
    border: '2px solid #51b884',
    borderRadius: '50px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'sans-serif',
    margin: '200px',
    marginTop: '30px',
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
    borderRadius: '5px',
    cursor: 'pointer',
    paddingRight: '80px',
    paddingLeft: '80px',
    marginTop: "50px",
  };

  return (
    <div>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>} {/* Display error message */}
        <label style={labelStyle}>
          Email :
          <input
            type="text"
            name="email"
            value={loginData.email}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Password:
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </label>
        <button type="submit" style={buttonStyle}>
          Login
        </button>

        {/* Link to the registration page */}
        <p style={{ textAlign: 'center', marginTop: '30px' }}>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;