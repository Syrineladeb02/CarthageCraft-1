import React, { useEffect } from "react";
import CardItem from "./CardItem";
import ProductSearch from './../Buyer/ProductSearching';
import { Button } from "react-bootstrap";
import axios from "axios";

export default function ListOfProducts({
  product,
  handleIncrement,
  handleDecrement,
  handleDelete,
  handleSumIncrement,
  handleSumDecrement,
  handleSumDelete,
  setProduct,
  artisans
}) {
  const handleSearch = (searchCriteria) => {
    const filteredProducts = product.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchCriteria.searchTerm.toLowerCase()) &&
        true
      );
    });

    console.log('Filtered Products:', filteredProducts);
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
  };

  const url = "http://localhost:8008/api/products";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setProduct(res.data.product);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "beige", padding: "20px" }}>
      <ProductSearch onSearch={handleSearch} />
      <div style={buttonContainerStyle}>
        <Button variant="outline-dark">Artisans</Button>
        <Button variant="outline-dark">Products</Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        {product.map((elt) => (
          <CardItem
            key={elt.id}
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
