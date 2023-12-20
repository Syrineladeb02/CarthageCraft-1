import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null); // State for error message

  const url = 'http://localhost:6006/api/signIn';
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
    console.log('Sending login data:', loginData);
    axios
      .post(url, loginData)
      .then((response) => {
        console.log(response.data);
        const token = response.data.token;
        localStorage.setItem('token', token);
        if (response.data.user.role === 'user') {
          // Redirect to the buyer's profile after successful login
          navigate('/buyerProfile');
        } else {
          navigate('/dashboard');
        }
      })
      .catch((error) => {
        console.error('There was an error!', error);
        setError('Incorrect email or password');
      });
  };

  const formStyle = {
    maxWidth: '500px',
    padding: '50px',
    border: '2px solid #51b884',
    borderRadius: '40px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'sans-serif',
    margin: '200px auto',
    marginTop: '-20px',
  };

  const labelStyle = {
    display: 'block',
    margin: '10px 0',
  };
  const linkStyle = {
    color: '#3498db',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    marginBottom: '10px',
    border: '2px solid #9fbbad',
    borderRadius: '10px',
  };

  const buttonStyle = {
    background: '#34bd78',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  };

  return (
    
      <body style={{backgroundColor:"beige", padding:"100px", marginTop:"5px"}}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', color: '#42555f' }}>Login</h2>
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
        <p style={{ textAlign: 'center', marginTop: '30px', color: '#42555f' }}>
          Don't have an account? <Link to="/register" style={linkStyle}>Register here</Link>
        </p>
      </form>
      </body>
    
  );
};

export default Login;
