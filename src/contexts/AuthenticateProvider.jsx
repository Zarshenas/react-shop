import React, { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import api from "../services/axiosConfig";

const AuthContext = createContext();

function AuthenticateProvider({ children }) {

    const [username, setUsername] = useState("");
    const [cookies,setCookie, removeCookie] = useCookies(['token']);
    const [isAuthenticated , setIsAuthenticated] = useState(!!cookies.token)

    const logOut = () => {
        removeCookie('token');
        setIsAuthenticated(false);
    }

    useEffect(() => {
      const verifyCookie = async () => {
        if (!cookies.token) {
          setIsAuthenticated(false)
        }
        const { data } = await api.post("/", {}, { withCredentials: true });
        const { status, firstName } = data;
        setUsername(firstName);
        console.log(status)
        return status
          ? setIsAuthenticated(true)
          : (logOut());
      };
      verifyCookie();
    }, [isAuthenticated]);

    

  return <AuthContext.Provider value={{logOut , isAuthenticated , setIsAuthenticated , username}}>{children}</AuthContext.Provider>;
}

export default AuthenticateProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
