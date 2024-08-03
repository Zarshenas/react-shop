import React, { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import api from "../services/axiosConfig";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthenticateProvider({ children }) {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    _id: "",
  });
  let [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [isAuthenticated, setIsAuthenticated] = useState(!!cookies.token);
  const navigate = useNavigate();

  const logOut = () => {
    api.get("/auth/logout").then((res) => {
      removeCookie("token", { path: "/" });
      setUserInfo({
        firstName: "",
        lastName: "",
        email: "",
        _id: "",
      });
      setIsAuthenticated(false);
      navigate(1);
    });
  };

  useEffect(() => {
      api.get("/", { withCredentials: true }).then(({ data }) => {
        const { status, userInfo } = data;
        setUserInfo(userInfo);
        return status ? setIsAuthenticated(true) : logOut();
      });
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{ logOut, isAuthenticated, setIsAuthenticated, userInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthenticateProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
