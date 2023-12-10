import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserTie } from 'react-icons/fa';

const HIW = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '100px',
    fontFamily: 'Arial, sans-serif',
    background: 'beige',
  
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  };

  const cardStyle = {
    width: '300px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    ':hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  };

  const contentStyle = {
    padding: '20px',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  };

  const textStyle = {
    fontSize: '16px',
    color: '#555',
  };

  const buttonStyle = {
    padding: '12px 24px',
    background: '#34bd78',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '18px',
    textDecoration: 'none',
    display: 'inline-block',
  };

  const iconStyle = {
    fontSize: '36px',
    marginBottom: '15px',
    color: '#34bd78',
  };

  const sections = [
    {
      title: 'For Buyers',
      description: 'Discover unique handcrafted products, place orders, and enjoy a secure shopping experience with Carthagecraft.',
      cta: 'Start Shopping',
      link: '/products',
      icon: <FaShoppingCart style={iconStyle} />,
    },
    {
      title: 'For Artisans',
      description: 'Showcase your craftsmanship, connect with buyers, and manage your product listings with our artisan-friendly platform.',
      cta: 'Become an Artisan',
      link: '/register-artisan', // Update the link to the artisan registration page
      icon: <FaUserTie style={iconStyle} />,
    },
  ];

  return (
    <div style={containerStyle}>
      <div style={cardContainerStyle}>
        {sections.map((section, index) => (
          <Link key={index} to={section.link} style={{ ...cardStyle, textDecoration: 'none' }}>
            <div style={contentStyle}>
              {section.icon}
              <h2 style={headingStyle}>{section.title}</h2>
              <p style={textStyle}>{section.description}</p>
              <button style={buttonStyle}>{section.cta}</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HIW;