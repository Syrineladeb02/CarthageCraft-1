import React from 'react';

const Order = ({ location }) => {
  const orderDetails = location?.state?.orderDetails || null;

  if (!orderDetails) {
    return <p>No order details available.</p>;
  }

  const { totalAmount, quantityOrdered, phoneNumber, address, creditCardNumber, productName } = orderDetails;

  return (
    <div>
      <h2>Order Details</h2>
      <p>Total Amount: dt{totalAmount}</p>
      <p>Quantity Ordered: {quantityOrdered}</p>
      <p>Buyer Information:</p>
      <ul>
        <li>Phone Number: {phoneNumber}</li>
        <li>Address: {address}</li>
        <li>Credit Card Number: {creditCardNumber}</li>
      </ul>
      <p>Product Name: {productName}</p>
    </div>
  );
};

export default Order;
