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

  const artisan = artisans.find(a => a.id === elt.artisanId);
  const navigate = useNavigate();
  const showDetails = () => {
    navigate(`/products/${elt.id}`);
  };

  const stars = [...Array(5)].map((item, i) => {
    return (
      <span
        style={{ color: elt.rating >= i ? "gold" : "grey", fontSize: "20px" }}
      >
        ★
      </span>
    );
  });
  return (
    <Card style={{ width: "18rem", marginTop: "60px" }}>
      <Card.Img variant="top" src={elt.image} style={{ maxHeight: "200px" }} />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <Card.Title>{elt.name}</Card.Title>
          {details && <Card.Title>{elt.category}</Card.Title>}
          <Card.Text>{elt.price} $</Card.Text>
          {artisan && <Card.Text>Artisan: {artisan.name}</Card.Text>}
          {details && <Card.Text>Region: {elt.region}</Card.Text>}
          {details && <Card.Text>Category: {elt.category}</Card.Text>}
        </div>
        <span> {stars}</span>

        {/* {details && <p style={{textAlign:"justify"}}> {elt.description} </p> }     */}

        
        {!details && (
          <>
            <div style={{ display: "flex", gap: "10px" }}>
              <Button variant="success" onClick={increment}>
                +
              </Button>
              <span>{elt.qte}</span>
              <Button variant="primary" onClick={decrement}>
                -
              </Button>
            </div>

            <Button variant="danger" onClick={deleteProduct}>
              Delete
            </Button>
          </>
        )}

        {!details && (
          <Button
            variant="light"
            style={{ border: "1px solid black" }}
            onClick={showDetails}
          >
            More Details <Badge bg="secondary">i</Badge>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}


