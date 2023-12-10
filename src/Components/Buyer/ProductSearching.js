import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const ProductSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ searchTerm });
  };

  const searchContainerStyle = {
    display: "flex",
    alignItems: "center",
    maxWidth: "500px",
    margin: "auto",
    marginBottom: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "hidden",
  };

  const searchInputStyle = {
    flex: 1,
    padding: "12px",
    borderRadius: "8px 0 0 8px",
    border: "none",
    outline: "none",
  };

  const searchButtonStyle = {
    background: "#34bd78",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "0 8px 8px 0",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  };

  const searchIconStyle = {
    marginRight: "8px",
  };

  return (
    <form style={searchContainerStyle} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for products..."
        style={searchInputStyle}
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit" style={searchButtonStyle}>
        <FaSearch style={searchIconStyle} />
        Search
      </button>
    </form>
  );
};

export default ProductSearch;
