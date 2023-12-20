import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FaShoppingBag } from 'react-icons/fa';
import OrderHistory from './OrderHistory';
import { Link } from 'react-router-dom';

const profileContainerStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px',
  fontFamily: 'Arial, sans-serif',
};

const welcomeBackStyle = {
  fontSize: '24px',
  color: '#333',
  marginBottom: '20px',
};

const profileCardStyle = {
  width: '20rem',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  borderRadius: '10px',
};

const cardImgStyle = {
  maxHeight: '200px',
  objectFit: 'cover',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
};

const userDetailStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  marginBottom: '10px',
};

const userDetailTextStyle = {
  marginBottom: '0',
  lineHeight: '1.5',
};

const updateButtonStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '40px',
};

function BuyerProfile() {
  const url = 'http://localhost:8008/api/buyer';
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [userUpdate, setUserUpdate] = useState({});

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken.id);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
      axios
        .get(`${url}/${userId}`, { headers })
        .then((res) => {
          const fetchedUser = res.data.buyer[0];
          setUser(fetchedUser);
          setUserUpdate(fetchedUser);
        })
        .catch((error) => {
          console.error(error.response.data.msg);
        });
    }
  }, [userId]);

  const handleChange = (e) => {
    setUserUpdate({ ...userUpdate, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${url}/${user.id}`, userUpdate);
    } catch (error) {
      console.error(error);
    }
    handleClose();
    window.location.reload();
  };

  return (
    <>
      <div style={profileContainerStyle}>
        <h3 style={welcomeBackStyle}>{`${getGreeting()}, ${user.name}`}</h3>
        <Card style={profileCardStyle}>
          {user.image && <Card.Img variant="top" src={user.image} style={cardImgStyle} />}
          <Card.Body>
            <div style={userDetailStyle}>
              <h6 style={{ ...userDetailTextStyle, fontWeight: 'bold' }}>Name:</h6>
              <Card.Text style={userDetailTextStyle}>{user.name}</Card.Text>
            </div>
            <div style={userDetailStyle}>
              <h6 style={{ ...userDetailTextStyle, fontWeight: 'bold' }}>Email:</h6>
              <Card.Text style={userDetailTextStyle}>{user.email}</Card.Text>
            </div>
            <div style={userDetailStyle}>
              <h6 style={{ ...userDetailTextStyle, fontWeight: 'bold' }}>Address:</h6>
              <Card.Text style={userDetailTextStyle}>{user.address}</Card.Text>
            </div>
            <div style={userDetailStyle}>
              <h6 style={{ ...userDetailTextStyle, fontWeight: 'bold' }}>Phone Number:</h6>
              <Card.Text style={userDetailTextStyle}>{user.phonenumber}</Card.Text>
            </div>
            <div style={userDetailStyle}>
              <h6 style={{ ...userDetailTextStyle, fontWeight: 'bold' }}>Credit Card:</h6>
              <Card.Text style={userDetailTextStyle}>{user.creditcardnumber}</Card.Text>
            </div>
            <div style={updateButtonStyle}>
              <Button variant="success" onClick={handleShow}>
                Update
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <OrderHistory />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            {/* Repeat the form group for each field you want to make editable */}
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" defaultValue={user?.name} onChange={handleChange} name="name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> email </Form.Label>
              <Form.Control type="text" defaultValue={user?.email} onChange={handleChange} name="email" />
            </Form.Group>
            {/* ... other form groups for email, address, etc. ... */}
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" defaultValue={user?.address} onChange={handleChange} name="address" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" defaultValue={user?.phonenumber} onChange={handleChange} name="phonenumber" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Credit Card Number</Form.Label>
              <Form.Control type="text" defaultValue={user?.creditcardnumber} onChange={handleChange} name="creditcardnumber" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>password </Form.Label>
              <Form.Control type="text" defaultValue={user?.password} onChange={handleChange} name="password" />
            </Form.Group>
            <Link to="/order-history">
  <FaShoppingBag style={{ fontSize: '24px', color: 'black' }} />
</Link>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BuyerProfile;
