import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

export default function RequireAuth({ children }) {
  const location = useLocation();
  const auth = useAuth();
  if (!auth) {
    return <Navigate to="/log-in" state={{ from: location }} />;
  }
  return children;
}
