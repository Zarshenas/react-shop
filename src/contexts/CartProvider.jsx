import { createContext, useContext, useReducer } from "react";
import cartReducer from "../utils/reducers/cartReducer";
const CartContext = createContext();

const initialValue = {
  checkout: false,
  ordersCount: 0,
  totalPrice: 0,
  addedProducts: [],
};


function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, initialValue);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCartCunsumer = () => {
  const cartData = useContext(CartContext);
  return cartData;
};

export { CartProvider, useCartCunsumer };
