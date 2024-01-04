import { createContext, useContext } from "react";
import useProducts from "../utils/hooks/useProducts";

const productsContext = createContext();

function ProductsProvider({ children }) {
  const products = useProducts();
  
  return (
    <productsContext.Provider value={products}>
      {children}
    </productsContext.Provider>
  );
}
//import this hook and use it in the consumer to get instant access to data
function useProductConsumer() {
  const context = useContext(productsContext);
    return context;
}
function useGetProduct(id){
  const context = useContext(productsContext);
  if (context !== undefined) {
    return context.find(product=> product.id === id)
  }
}
export default ProductsProvider;
export { useProductConsumer , useGetProduct};
