import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
export default function CardItem({
  elt,
  artisans,
  details,
  handleIncrement,
  handleDecrement,
  handleDelete,
  handleSumIncrement,
  handleSumDecrement,
  handleSumDelete,
}) {
  const increment = () => {
    handleIncrement(elt.id);
    handleSumIncrement(elt.price);
  };

  const decrement = () => {
    handleDecrement(elt.id);
    handleSumDecrement(elt);
  };

  const deleteProduct = () => {
    handleDelete(elt.id);
    handleSumDelete(elt);
  };

  const artisan = artisans.find((a) => a.id === elt.artisanId);
  const navigate = useNavigate();
  const showDetails = () => {
    navigate(`/products/${elt.id}`);
  };

  const stars = [...Array(5)].map((item, i) => (
    <span
      key={i}
      style={{ color: elt.rating >= i ? "gold" : "gold", fontSize: "20px" }}
    >
      ★
    </span>
  ));

  return (
    <Card style={{ width: "18rem", marginTop: "60px" }}>
      <Card.Img
        variant="top"
        src={elt.image}
        style={{ maxHeight: "200px", objectFit: "cover" }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div>
          <Card.Title style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "8px" }}>
            {elt.name}
          </Card.Title>
          {artisan && (
            <Card.Text style={{ fontSize: "0.9rem", color: "#777", marginBottom: "8px" }}>
              Artisan: {artisan.name}
            </Card.Text>
          )}
          <Card.Text style={{ fontSize: "1rem", color: "#333", marginBottom: "8px" }}>
            {elt.price} dt
          </Card.Text>
          <div style={{ display: "flex", gap: "5px" }}>{stars}</div>
        </div>

        {!details && (
          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              variant="outline-dark"
              style={{
              
                color: "black",
                border: "1px solid #343a40",
                flex: 1,
                padding: "10px",
                fontSize: "1rem",
                textAlign: "center",
                cursor: "pointer",
                transition: "background-color 0.3s ease-in-out",
              }}
              onClick={increment}
            >
              +
            </Button>
            <span style={{ flex: 1, textAlign: "center" }}>{elt.qte}</span>
            <Button
              variant="outline-dark"
              style={{
      
                color: "black",
                border: "1px solid #343a40",
                flex: 1,
                padding: "10px",
                fontSize: "1rem",
                textAlign: "center",
                cursor: "pointer",
                transition: "background-color 0.3s ease-in-out",
              }}
              onClick={decrement}
            >
              -
            </Button>
          </div>
        )}

        {!details && (
          <Button
          variant="danger"
            style={{
              border: "1px solid #343a40",
              flex: 1,
              padding: "8px",
              fontSize: "1rem",
              textAlign: "center",
              cursor: "pointer",
              transition: "background-color 0.3s ease-in-out",
              marginTop: "10px",
            }}
            onClick={deleteProduct}
          >
            Delete
          </Button>
        )}

        {!details && (
          <Button
            variant="dark"
            style={{
              backgroundColor: "#343a40",
              color: "#fff",
              border: "1px solid #343a40",
              flex: 1,
              padding: "10px",
              fontSize: "1rem",
              textAlign: "center",
              cursor: "pointer",
              transition: "background-color 0.3s ease-in-out",
              marginTop: "10px",
            }}
            onClick={showDetails}
          >
            More Details <Badge bg="secondary">i</Badge>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
