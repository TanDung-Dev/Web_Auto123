import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RouterUser from "./user/routes/RouterUser";
import Routeradmin from "./admin/routes/Routeradmin";

function App() {
  const role = localStorage.getItem("role");
  return (
    <>
      {role === "admin" ? <Routeradmin /> : <RouterUser />}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
