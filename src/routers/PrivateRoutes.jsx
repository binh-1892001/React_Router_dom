import { Navigate, Outlet } from "react-router-dom";

import React from "react";

function PrivateRoutes() {
  const isAdmin = () => {
    const localUser = localStorage.getItem("user");
    if (localUser) {
      const user = JSON.parse(localUser);
      if (user.role.includes("ADMIN")) {
        return true;
      }
    }
    return false;
  };

  return <div>{isAdmin() ? <Outlet /> : <Navigate to={"/"} />}</div>;
}

export default PrivateRoutes;
