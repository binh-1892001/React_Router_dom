import React from "react";
import { useNavigate } from "react-router-dom";

function OutletHome() {
  const navigate = useNavigate();

  function toContact() {
    navigate("/contact", { state: { content: "Hello" } });
  }

  return (
    <div>
      <button onClick={toContact}>Contact</button>
    </div>
  );
}

export default OutletHome;
