import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import tunisia1 from '../images/tunisia1.jpg';
import tunisia2 from '../images/tunisia2.jpg';
import tunisia3 from '../images/tunisia3.jpg';

const Advantages = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'beige',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  };

  const cardStyle = {
    width: '300px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  };

  const contentStyle = {
    padding: '20px',
    backgroundColor: '#fff',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
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

  const ctaSectionStyle = {
    textAlign: 'center',
    marginTop: '20px',
  };

  const buttonStyle = {
    padding: '12px 24px',
    background: '#34bd78',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '18px',
    textDecoration: 'none', // Remove the default link styling
    display: 'inline-block',
  };

  const advantages = [
    {
      image: tunisia1,
      title: 'Unique Handcrafted Products',
      description: 'Discover a curated collection of unique handcrafted products, created with passion and attention to detail.',
    },
    {
      image: tunisia2,
      title: 'Artisanal Expertise',
      description: 'Our artisans are skilled craftsmen dedicated to producing high-quality, one-of-a-kind items that reflect their expertise.',
    },
    {
      image: tunisia3,
      title: 'Secure Transactions',
      description: 'Shop with confidence using our secure payment gateways, ensuring your financial information is protected.',
    },
    {
      title: 'Personalized Experience',
      description: 'Enjoy a personalized shopping experience with tailored recommendations based on your preferences and interests.',
    },
  ];

  return (
    <div style={containerStyle}>
      <div style={cardContainerStyle}>
        {advantages.map((advantage, index) => (
          <div key={index} style={cardStyle}>
            {advantage.image && <img src={advantage.image} alt={advantage.title} style={imageStyle} />}
            <div style={contentStyle}>
              <h2 style={headingStyle}>{advantage.title}</h2>
              <p style={textStyle}>{advantage.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={ctaSectionStyle}>
        <h3 style={{ fontSize: '24px', marginBottom: '10px', color: '#333' }}>Ready to Explore?</h3>
        <p style={textStyle}>
          Start your journey with Carthagecraft today and immerse yourself in a world of artistry and craftsmanship.
        </p>
        {/* Update the button to link to the products page */}
        <Link to="/products" style={buttonStyle}>
          See Products
        </Link>
      </div>
    </div>
  );
};

export default Advantages;
