import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductSearch from './ProductSearch';
import ProductListing from './ProductListing';
import History from './History';
import BuyerProfile from './BuyerProfile';
import ArtisanProfile from './ArtisanProfile';
import { buyerData, orderHistoryData } from './data';

// BuyerDashboard component
const BuyerDashboard = () => {
  // State variables
  const [products, setProducts] = useState([]);
  const [artisans, setArtisans] = useState([]);
  const [history, setHistory] = useState([]);
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  // useEffect to fetch initial data
  useEffect(() => {
    // Fetch initial products, artisans, and order history
    setProducts(artisanData.products);
    setArtisans([artisanData]);
    setHistory(orderHistoryData);
  }, []);

  // Function to handle viewing all products
  const handleViewAllProducts = async () => {
    try {
      const response = await axios.get('http://localhost:6006/api/products/all');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching all products:', error);
    }
  };

  // Function to handle viewing all artisans
  const handleViewAllArtisans = async () => {
    try {
      const response = await axios.get('http://localhost:6006/api/artisans/all');
      setArtisans(response.data);
    } catch (error) {
      console.error('Error fetching all artisans:', error);
    }
  };

  // Function to handle showing details of a product
  const handleShowDetails = (productId) => {
    setSelectedProductId(productId);
  };



  return (
    <div>
      <h2>{buyerData.name}! Welcome to Your Dashboard as a Buyer!</h2>
      <ProductSearch />
      <div>
        <button onClick={() => handleViewAllProducts()}>View Products</button>
        <button onClick={() => handleViewAllArtisans()}>View Artisans</button>
        <button onClick={() => handleViewOrderHistory()}>View Order History</button>
      </div>

      <ProductListing
        products={products}
        artisans={artisans}
        onShowDetails={handleShowDetails}
      />
      {selectedProductId && <ArtisanProfile artisan={artisanData} />}
      <History orderHistory={history} />

      {/* Render the BuyerProfile component if updating is true */}
      {isUpdatingProfile && (
        <BuyerProfile buyer={buyerData} onUpdate={() => {}} onDelete={() => {}} />
      )}
    </div>
  );
};

export default BuyerDashboard;