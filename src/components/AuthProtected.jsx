import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthenticateProvider";

function AuthProtected({ children }) {

  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return (
        <>
        {children}
        <Outlet/>
        </>
    );
  } else {
    navigate("/");
  }
}

export default AuthProtected;
