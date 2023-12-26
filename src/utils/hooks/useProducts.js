import { useEffect, useState } from "react";
import api from "../../services/axiosConfig";

function useProducts() {
  const [products, setProducts] = useState();
  useEffect(() => {
    api.get("products").then((res) => setProducts(res));
  }, []);
  return { products, setProducts };
}
export default useProducts;
