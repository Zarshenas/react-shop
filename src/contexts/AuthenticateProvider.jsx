import React, { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import api from "../services/axiosConfig";

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

  const logOut = () => {
    removeCookie("token", { path: "/" });
    setIsAuthenticated(false);
    setUserInfo({ firstName: "", lastName: "", email: "", _id: "" });
  };

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        setIsAuthenticated(false);
      }
      const { data } = await api.post("/", {}, { withCredentials: true });
      const { status, userInfo } = data;
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
