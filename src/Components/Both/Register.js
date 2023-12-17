import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BuyerRegistration from '../Buyer/BuyerRegistration';
import ArtisanRegistration from '../Artisan/ArtisanRegistration';

const Register = () => {
  const [userRole, setUserRole] = useState(null);

  const handleRoleSelection = (role) => {
    setUserRole(role);
  };

  const containerStyle = {
    margin: 'auto',
    marginTop: '50px',
    maxWidth: '600px',
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '15px',
    marginBottom: '20px',
    backgroundColor: '#51b884',
    color: '#fff',
    fontSize: '18px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const linkStyle = {
    color: '#3498db',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
    fontSize: '36px',
    marginBottom: '20px',
  };

  const subheadingStyle = {
    textAlign: 'center',
    color: '#777',
    fontSize: '16px',
    marginBottom: '30px',
  };

  const pageStyle = {
    backgroundColor: 'beige',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:"5px"
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Join Us!</h1>
        <p style={subheadingStyle}>
          Create an account and unlock amazing features.
        </p>

        {!userRole && (
          <div>
            <button
              style={buttonStyle}
              onClick={() => handleRoleSelection('buyer')}
            >
              Register as a Buyer
            </button>
            <button
              style={buttonStyle}
              onClick={() => handleRoleSelection('artisan')}
            >
              Register as an Artisan
            </button>
          </div>
        )}

        {userRole === 'buyer' && <BuyerRegistration />}
        {userRole === 'artisan' && <ArtisanRegistration />}

        {/* Link to the login page */}
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          Already have an account?{' '}
          <Link to="/login" style={linkStyle}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
