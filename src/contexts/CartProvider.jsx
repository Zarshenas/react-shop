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
  const {userInfo:{_id}} = useAuth();

  
  useEffect(() => {
    console.log("DWdaawdwad")
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