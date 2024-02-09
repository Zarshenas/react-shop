import { useEffect, useState } from "react";
import api from "../../services/axiosConfig";

function useProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const dataFetcher = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data.filter((item) => item));
      } catch (err) {
        throw new Error("something went wrong while fetching data",err);
      }
    }
    dataFetcher()
  }, []);
  return  products ;
}
export default useProducts;
