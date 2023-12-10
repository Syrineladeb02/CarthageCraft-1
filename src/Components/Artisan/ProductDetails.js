import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useParams } from "react-router-dom";
import { artisans } from "../Data";

const ProductDetails = ({
  products,
  handleIncrement,
  handleDecrement, 
}) => {
  const { id } = useParams();
  const elt = products.find((elt) => elt.id === Number(id));
  const artisan = artisans.find((a) => a.id === elt.artisanId);
  const stars = [...Array(5)].map((item, i) => (
    <span
      key={i}
      style={{ color: elt.rating >= i ? "gold" : "grey", fontSize: "20px" }}
    >
      ★
    </span>
  ));

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
    backgroundColor: "#f5f5dc", // Set the background color to beige
    padding: "20px", // Add padding for spacing
  };

  const imageStyle = {
    width: "200%",
    maxWidth: "500px",
    maxHeight: "100%",
    objectFit: "cover",
    marginTop:"40px",
    marginLeft:"100px"
  };

  const detailsStyle = {
    width: "50%",
    paddingLeft: "20px",
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  };

  const buttonStyle = {
    color: "black",
    border: "1px solid #343a40",
    flex: 5,
    padding: "2px",
    fontSize: "1.5rem",
    textAlign: "center",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
  };

  const orderButtonStyle = {
    padding: "10px",
    cursor: "pointer",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    backgroundColor: "#51b884",
  };

  return (
    <div style={containerStyle}>
      {elt && (
        <div>
          <img src={elt.image} alt={elt.name} style={imageStyle} />
        </div>
      )}
      <div style={detailsStyle}>
        <h1>Product Details</h1>
        <br/>
        <div>
          <p>
            <strong>Name:</strong> {elt.name}
          </p>
          <p>
            <strong>Price:</strong> {elt.price} dt
          </p>
          <p>
            <strong>Artisan:</strong> {artisan.name}
          </p>
          <p>
            <strong>Rating:</strong> {stars}
          </p>
          <p>
            <strong>Region:</strong> {elt.region}
          </p>
          <p>
            <strong>Category:</strong> {elt.category}
          </p>
          <p>
            <strong>Description:</strong> {elt.description}
          </p>
        </div>
        <div style={buttonContainerStyle}>
          <Button
            variant="outline-dark"
            style={buttonStyle}
            onClick={handleIncrement}
          >
            +
          </Button>
          <span style={{ flex: 1, textAlign: "center" }}>{elt.qte}</span>
          <Button
            variant="outline-dark"
            style={buttonStyle}
            onClick={handleDecrement}
          >
            -
          </Button>
        </div>
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => console.log("Order Now")}
            style={orderButtonStyle}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;