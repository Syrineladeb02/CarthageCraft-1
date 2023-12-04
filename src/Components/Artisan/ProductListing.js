// ProductListing.js

import React from 'react';
import CardItem from './CardItem'; // Assuming you have a CardItem component

const ProductListing = ({ products, onShowDetails }) => {
  return (
    <div>
      <h2>Product Listing</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <CardItem
            key={product.id}
            product={product}
            onShowDetails={() => onShowDetails(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
