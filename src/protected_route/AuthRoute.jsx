import { redirect, Navigate } from "react-router-dom";
import { useAuth } from "../state";

import React from "react";

export default function AuthRequiredRoute({children}) {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace/>;
  }

  return children;
}
