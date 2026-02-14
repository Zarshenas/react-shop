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
        const checkAuth = async () => {
            try {
                const { data } = await api.get("/", { withCredentials: true });

                if (data.status && data.userInfo) {
                    setUserInfo({
                        firstName: data.userInfo.firstName,
                        lastName: data.userInfo.lastName,
                        email: data.userInfo.email,
                        _id: data.userInfo._id,
                    });

                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                setIsAuthenticated(false);
            }
        };

        checkAuth();

    }, []);

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
