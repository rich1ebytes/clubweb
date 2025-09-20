import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ClubProtectedRoute = () => {
  const userToken = localStorage.getItem("userToken");
  const userRole = localStorage.getItem("userRole");

  if (userToken && userRole === "club") {
    return <Outlet />;
  }
  return <Navigate to="/for-clubs" />;
};

export default ClubProtectedRoute;
