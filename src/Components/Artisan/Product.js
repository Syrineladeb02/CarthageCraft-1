// import React, { useState } from 'react';
// import ProductDetails from './ProductDetails';

// const Product = () => {
//   // Assume you have products and artisans state
//   const [products, setProducts] = useState([]);

//   const [artisans, setArtisans] = useState([

  
//   ]);

//   // Handle adding comments for a specific product
//   const handleAddComment = (productId, newComment) => {
//     // Find the product in the state
//     const updatedProducts = products.map((product) =>
//       product.id === productId
//         ? { ...product, comments: [...product.comments, newComment] }
//         : product
//     );

//     // Update the state with the new comment
//     setProducts(updatedProducts);

//     // Implement logic to send the new comment to the server
//     console.log(`Add comment for product ${productId}: ${newComment.text}`);
//     // You may want to send the comment to the server here
//   };

//   return (
//     <div>
//       {/* Render ProductDetails with onAddComment prop */}
//       <ProductDetails products={products} artisans={artisans} onAddComment={handleAddComment} />
//     </div>
//   );
// };

// export default Product;