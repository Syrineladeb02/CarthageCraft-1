import React from "react";
import CardItem from "./CardItem";
import { artisans } from "../Data";
import ProductSearch from './../Buyer/ProductSearching';
import { useState } from "react";
export default function ListOfProducts({
  product,
  handleIncrement,
  handleDecrement,
  handleDelete,
  handleSumIncrement,
  handleSumDecrement,
  handleSumDelete,
  allArtisans,
  allProducts,
}) {
  const handleSearch = (searchCriteria) => {
    // Implement your product filtering logic based on searchCriteria
    
    const filteredProducts = product.filter((product) => {
      // Your filtering conditions go here
      return (
        product.name.toLowerCase().includes(searchCriteria.searchTerm.toLowerCase()) &&
        // Add other filtering conditions
        // ...
        true
      );
    });

    // Use the filtered products in your CardItem component
    console.log('Filtered Products:', filteredProducts);
  };
  const [filteredProduct, setFilteredProduct] = useState(product);
  const handleShowAllArtisans = () => {
    // Set the filtered product to all artisans
    setFilteredProduct(allArtisans);
  };

  const handleShowAllProducts = () => {
    // Set the filtered product to all products
    setFilteredProduct(allProducts);
  };
  const buttonStyle = {
    marginRight: '50px', // Adjust as needed
    padding: '8px 50px', // Adjust as needed
    borderRadius: '8px', // Adjust as needed
    cursor: 'pointer',
    border: '3px solid gray',
   paddingRight:"50px",
  

  };
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-20px', // Adjust as needed
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <ProductSearch onSearch={handleSearch} />
      <div style={buttonContainerStyle } >
        <button style={buttonStyle}>Artisans</button>
        <button style={buttonStyle} onClick={handleShowAllProducts}> Products</button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {product.map((elt) => (
          <CardItem
            key={elt.id} // Add a unique key to each CardItem
            elt={elt}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleDelete={handleDelete}
            handleSumIncrement={handleSumIncrement}
            handleSumDecrement={handleSumDecrement}
            handleSumDelete={handleSumDelete}
            artisans={artisans}
          />
        ))}
      </div>
    </div>
  );
}
