import React from "react";
import { useLocation } from "react-router-dom";

function IndexContact() {
  const state = useLocation();

  return <div>{state.state && state.state.content} IndexContact</div>;
}

export default IndexContact;
