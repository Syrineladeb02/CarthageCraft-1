import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import CardItem from "./CardItem";
import { useParams, useNavigate } from 'react-router-dom';
import Review from '../Buyer/Review';

export default function ProductDetails({
  product,
  artisans,
  handleIncrement,
  handleDecrement,
  handleDelete,
  handleSumIncrement,
  handleSumDecrement,
  handleSumDelete,
}) {
  const { id } = useParams();
  const elt = product.find((p) => p.id === Number(id));
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState('');
  
  const handleAddComment = () => {
    // Handle adding a new comment logic here
    // You can use this function to send the comment to your backend or update the state, etc.
    console.log('Adding comment:', newComment);
    setNewComment('');
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}>
      {elt && (
        <CardItem
          elt={elt}
          artisans={artisans}
          details={true}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleDelete={handleDelete}
          handleSumIncrement={handleSumIncrement}
          handleSumDecrement={handleSumDecrement}
          handleSumDelete={handleSumDelete}
        />
      )}

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
}
