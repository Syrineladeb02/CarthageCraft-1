import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useParams, useNavigate } from 'react-router-dom';
import { artisans, products } from '../Data';
import Review from '../Buyer/Review';

const ProductDetails = ({ handleIncrement, handleDecrement }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const elt = products.find((elt) => elt.id === Number(id));
  const artisan = artisans.find((a) => a.id === elt.artisanId);
  const stars = [...Array(5)].map((item, i) => (
    <span
      key={i}
      style={{ color: elt.rating >= i ? '#f0c14b' : '#ccc', fontSize: '20px' }}
    >
      ★
    </span>
  ));

  const [newComment, setNewComment] = useState('');
  const [quantity, setQuantity] = useState(elt.qte);
  const handleAddComment = () => {
    // Handle adding a new comment logic here
    // You can use this function to send the comment to your backend or update the state, etc.
    console.log('Adding comment:', newComment);
    setNewComment('');
  };
  const handleIncrementQte = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrementQte = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div style={{ maxWidth: '100%', marginTop: '5px', padding: '20px', backgroundColor: 'beige' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ flex: '1' }}>
        <img src={elt.image} alt={elt.name} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
      </div>

      <div style={{ flex: '1', marginLeft: '20px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px', color: '#111', textAlign: 'center' }}>Product Details</h1>
        <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'black' , marginTop:"50px"}}>
              <strong style={{color:"#34bd78"}}>Name:</strong> {elt.name}
            </p>
            <p style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'black' }}>
              <strong style={{color:"#34bd78"}}>Price:</strong> {elt.price} dt
            </p>
            <p style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'black' }}>
              <strong style={{color:"#34bd78"}}>Artisan:</strong> {artisan.name}
            </p>
            <p style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'black' }}>
              <strong style={{color:"#34bd78"}}>Rating:</strong> {stars}
            </p>
            <p style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'black' }}>
              <strong style={{color:"#34bd78"}}>Region:</strong> {elt.region}
            </p>
            <p style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'black' }}>
              <strong style={{color:"#34bd78"}}>Category:</strong> {elt.category}
            </p>
            <p style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'black' }}>
              <strong style={{color:"#34bd78"}}>Description:</strong> {elt.description}
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button
          variant="outline-dark"
          style={{ color: 'black', border: '1px solid #343a40', padding: '10px', fontSize: '1.2rem', cursor: 'pointer' }}
          onClick={handleDecrementQte}
        >
          -
        </Button>
        <span style={{ fontSize: '1.2rem', margin: '0 10px' }}>{quantity}</span>
        <Button
          variant="outline-dark"
          style={{ color: 'black', border: '1px solid #343a40', padding: '10px', fontSize: '1.2rem', cursor: 'pointer' }}
          onClick={handleIncrementQte}
        >
          +
        </Button>
      </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={() => {
            navigate(`/order/${id}`, {
              state: {
                orderDetails: {
                  totalAmount: elt.price * elt.qte,
                  quantityOrdered: elt.qte,
                  phoneNumber: '',
                  address: '',
                  creditCardNumber: '',
                  productName: elt.name,
                },
              },
            });
          }}
              style={{
                padding: '15px',
                cursor: 'pointer',
                backgroundColor: '#34bd78',
                color: '#111',
                border: 'none',
                borderRadius: '25px',
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3 style={{ marginTop: '10px', fontSize: '1.8rem', color: '#333' }}>Comments</h3>
        <div style={{ marginTop: '30px', borderTop: '1px solid #ddd', paddingTop: '15px' }}>
          {/* Updated Review component to display user names */}
          <Review comments={elt.comments} />
        </div>

        <div style={{ marginTop: '20px' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '10px', color: '#333', textAlign: 'center' }}>
            Add a Comment
          </h3>
          <textarea
            rows="4"
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '1.2rem',
              marginBottom: '10px',
              borderRadius: '5px',
              border: '1px solid #ddd',
              resize: 'vertical',
            }}
            placeholder="Write your comment here..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>

          <div style={{ textAlign: 'center' }}>
            <Button
              variant="outline-dark"
              style={{
                color: 'white',
                backgroundColor: '#34bd78',
                padding: '10px 20px',
                fontSize: '1.2rem',
                cursor: 'pointer',
                borderRadius: '5px',
                border: 'none',
              }}
              onClick={handleAddComment}
            >
              Add Comment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;