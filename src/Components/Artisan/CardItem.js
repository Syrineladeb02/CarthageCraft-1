import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Review from '../Buyer/Review';

const CardItem = ({
  products,
  artisans,
  onIncreaseQuantity,
  onDecreaseQuantity,
  handleDelete,
  handleSumDelete,
}) => {
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  const handleIncreaseQuantity = (eltId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [eltId]: (prevQuantities[eltId] || 0) + 1,
    }));
    onIncreaseQuantity(eltId);
  };

  const handleDecreaseQuantity = (eltId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [eltId]: Math.max((prevQuantities[eltId] || 0) - 1, 0),
    }));
    onDecreaseQuantity(eltId);
  };

  const deleteProduct = (eltId) => {
    handleDelete(eltId);
    handleSumDelete(eltId);
  };

  const showDetails = (eltId) => {
    navigate(`/products/${eltId}`);
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products && products.length > 0 ? (
          products.map((elt) => {
            const artisan = artisans.find((a) => a.id === elt.artisanId);

            return (
              <li key={elt.id}>
                <h3>{elt.name}</h3>
                <p>Price: dt{elt.price}</p>
                <p>Artisan: {artisan.name}</p>
                <img src={elt.image} alt={elt.name} style={{ maxWidth: '100px' }} />

                {/* Comment Section */}
                <Review comments={elt.comments || []} />

                <div>
                  <button onClick={() => handleDecreaseQuantity(elt.id)}>-</button>
                  <span>Quantity: {quantities[elt.id] || 0}</span>
                  <button onClick={() => handleIncreaseQuantity(elt.id)}>+</button>
                </div>

                <div>
                  <button onClick={() => deleteProduct(elt.id)}>Delete</button>
                  <button onClick={() => showDetails(elt.id)}>Show Details</button>
                </div>
              </li>
            );
          })
        ) : (
          <p>No products available.</p>
        )}
      </ul>
    </div>
  );
};

export default CardItem;
