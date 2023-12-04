import React from 'react';
import { Link } from 'react-router-dom';
import ArtisanProfile from './ArtisanProfile'; // Import your ArtisanProfile component
import ProductListing from './CardItem'; // Import your ProductListing component

const ArtisanDashboard = ({ artisan, products }) => {
  return (
    <div>
      <h2> {artisan.name}!Welcome to Your Dashboard as an Artisan</h2>

      {/* Artisan Profile Section */}
      <ArtisanProfile artisan={artisan} />

      {/* Product Listing Section */}
      <ProductListing products={products} />

      {/* Add more sections as needed */}
      
      {/* Navigation or Actions */}
      <div>
        <Link to="/edit-profile">Edit Profile</Link>
        <Link to="/add-product">Add Product</Link>
        {/* Add more navigation links or actions */}
      </div>
    </div>
  );
};

export default ArtisanDashboard;