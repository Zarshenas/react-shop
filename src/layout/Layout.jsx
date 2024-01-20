import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useAuth } from "../contexts/AuthenticateProvider";
import api from "../services/axiosConfig";
import { useCartCunsumer } from "../contexts/CartProvider";

function Layout({ children }) {
  const { dispatch } = useCartCunsumer();
  const {
    isAuthenticated,
    userInfo: { _id },
  } = useAuth();
  useEffect(() => {
    if (!_id) return;
    if (isAuthenticated) {
      const getUserCart = async () => {
        await api
          .post("/user/cart", { _id })
          .then(({ data }) => {
            dispatch({ type: "GETFROMDB", payload: data });
          })
          .catch((err) => {
            if (err.response.status === 404) {
              return;
            }
          });
      };
      getUserCart();
    }
  }, [isAuthenticated, _id]);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
