import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import CardProvider from "../context/CardProvider";

const PrivateRouter = () => {
  const { name, pass } = useContext(CardProvider);

  return name === "cihan" && pass === "1234" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
