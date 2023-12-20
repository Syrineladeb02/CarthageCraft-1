// OrderHistory.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderHistory = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    // Fetch all orders
    axios.get('http://localhost:6006/api/all-orders')
      .then((response) => {
        setAllOrders(response.data.allOrders);
      })
      .catch((error) => {
        console.error('Error fetching all orders:', error);
      });
  }, []);

  return (
    <div>
      <h2>All Order History</h2>
      {allOrders.length === 0 ? (
        <p>No order history available.</p>
      ) : (
        <ul>
          {allOrders.map((order) => (
            <li key={order.orderId}>
              <p>Total Amount: dt{order.totalAmount}</p>
              <p>Quantity Ordered: {order.quantityOrdered}</p>
              <p>Product Name: {order.productName}</p>
              <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
              {/* Add other order details as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
