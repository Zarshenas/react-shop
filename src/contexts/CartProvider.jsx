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
  const {userInfo:{_id} ,isAuthenticated } = useAuth();

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
  
  useEffect(() => {
    if(!_id) return;
    const postCart = async () => {
      await api.post('/user/updatecart' , {cartState , _id}).catch((err)=> console.log(err))
    }
    postCart();
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