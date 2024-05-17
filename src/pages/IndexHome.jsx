import Header from "../layouts/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../layouts/Sidebar";

function IndexHome() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ width: "100vw" }}>
        <Header />
        {/* đại diện cho các component con (route lồng nhau) */}
        <Outlet />
      </div>
    </div>
  );
}

export default IndexHome;
