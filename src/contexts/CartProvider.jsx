import { createContext, useContext, useEffect, useReducer } from "react";
import cartReducer from "../utils/reducers/cartReducer";
import api from "../services/axiosConfig";
import { useAuth } from "./AuthenticateProvider";
const CartContext = createContext();

const initialValue = {
  checkout: false,
  ordersCount: 0,
  totalPrice: 0,
  addedProducts: [],
};

function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, initialValue);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) return ; 
    const getUserCart = async () => {
      await api
        .get("/user/cart")
        .then(({ data }) => dispatch({ type: "GETFROMDB", payload: data }))
        .catch((err) => {
          if (err.response.status === 404) {
            return;
          }
        });
    };
    getUserCart();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const postCart = async () => {
      await api
        .post("/user/updatecart", { cartState }, { signal: signal })
        .catch((err) => {
          if (err.code === "ERR_CANCELED") return;
        });
    };
    postCart();

    return () => {
      controller.abort();
    };
  }, [cartState]);
  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartProvider;

const useCartCunsumer = () => {
  const cartData = useContext(CartContext);
  return cartData;
};
export { useCartCunsumer };
