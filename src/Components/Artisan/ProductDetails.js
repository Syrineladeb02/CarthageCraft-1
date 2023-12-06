import React from "react";
import CardItem from "./CardItem";
import { useParams } from "react-router-dom";
import { products, artisans } from "../Data"

export default function ProductDetails({ product }) {
  const { id } = useParams();
  const elt = product.find((elt) => elt.id === Number(id));

  return (
    <div style={{ width: "18rem", margin: "auto" }}>
    {elt && <CardItem elt={elt} artisans={artisans} details={true} />}
  </div>
  );
}
