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
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [isAuthenticated, setIsAuthenticated] = useState(!!cookies.token);
  const navigate = useNavigate();

  const logOut = () => {
    removeCookie("token", { path: "/" });
    setIsAuthenticated(false);
    setUserInfo({
      firstName: "",
      lastName: "",
      email: "",
      _id: "",
    });
    navigate("/");
  };

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) setIsAuthenticated(false);

      const { data } = await api.post("/", {}, { withCredentials: true });
      const { status, userInfo } = data;
      console.log(userInfo);
      console.log(status);
      setUserInfo(userInfo);
      return status ? setIsAuthenticated(true) : logOut();
    };
    verifyCookie();
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
