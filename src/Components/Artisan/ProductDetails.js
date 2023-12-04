import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // Import useNavigate
import Review from '../Buyer/Review';

const ProductDetails = ({ products, artisans, onIncreaseQuantity, onDecreaseQuantity, onOrderNow, handleDelete, handleSumDelete, buyer }) => {
  const navigate = useNavigate();  // Use the useNavigate hook
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId, 10));

  if (!product) {
    return <p>Product not found.</p>;
  }

  const artisan = artisans.find((a) => a.id === product.artisanId);

  const [quantities, setQuantities] = useState({});

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

  const handleOrderNow = (eltId) => {
    const quantity = quantities[eltId] || 0;

    // Assuming you have the necessary information to construct orderDetails
    const orderDetails = {
      totalAmount: product.price * quantity,
      quantityOrdered: quantity,
      phoneNumber: buyer.phoneNumber,
      address: buyer.address,
      creditCardNumber: buyer.creditCardNumber,
      productName: product.name,
    };

    // Navigate to the Order Page and pass orderDetails as state
    navigate(`/order`, { state: { orderDetails } });
  };

  const deleteProduct = (eltId) => {
    handleDelete(eltId);
    handleSumDelete(eltId);
  };

  return (
    <div>
      <h2>{product.name} Details</h2>
      <p>Description: {product.description}</p>
      <p>Price: dt{product.price}</p>
      <p>Artisan: {artisan.name}</p>
      <img src={product.image} alt={product.name} style={{ maxWidth: '200px' }} />

      {/* Comment Section */}
      <Review comments={product.comments || []} />

      <div>
        <button onClick={() => handleDecreaseQuantity(product.id)}>-</button>
        <span>Quantity: {quantities[product.id] || 0}</span>
        <button onClick={() => handleIncreaseQuantity(product.id)}>+</button>
        <button onClick={() => handleOrderNow(product.id)}>Order Now</button>
      </div>

      <div>
        <button onClick={() => deleteProduct(product.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ProductDetails;