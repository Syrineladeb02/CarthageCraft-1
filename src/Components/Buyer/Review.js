import React from 'react';

const Review = ({ comments }) => {
  return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {comments.map((comment) => (
          <li key={comment._id} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <p style={{ fontSize: '1.2rem', color: '#333', marginBottom: '5px' }}>
              <strong style={{ color: '#34bd78' }}>{comment.user.username}:</strong> {comment.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
