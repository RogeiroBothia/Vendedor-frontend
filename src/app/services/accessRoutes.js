import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const useAuth = () => {
    const user = { loggedIn: validateToken() };
    return user && user.loggedIn;
  };

  const isAuth = useAuth();

  return <div>{isAuth ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default ProtectedRoutes;
