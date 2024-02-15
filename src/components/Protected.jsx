import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthenticateProvider";
import { useCookies } from "react-cookie";

function Protected({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return (
      <>
        {children}
        <Outlet />
      </>
    );
  } else {
    navigate("/auth/login");
  }
}

export default Protected;
