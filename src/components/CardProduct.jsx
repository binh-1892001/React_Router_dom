import React from "react";
import { useNavigate } from "react-router-dom";

function CardProduct({ pro }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/products/${pro.id}`)} style={{ border: "1px solid blue" }}>
      <img src={pro.image} alt="" />
      <h2>{pro.name}</h2>
    </div>
  );
}

export default CardProduct;
