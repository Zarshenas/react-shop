import { useEffect, useState } from "react";
import Product from "../components/product";
import { useProductConsumer } from "../contexts/ProductsProvider";
import Search from "../components/Search";
import FilterCategory from "../components/FilterCategory";
import searchFilterHandler from "../utils/helpers/searchFilterHandler";

function Products() {
  const productsList = useProductConsumer();
  const [query, setQuery] = useState({search:""});
  const [displayData, setDisplayData] = useState([])

  const data = searchFilterHandler(query , displayData)
  useEffect(()=>{
    setDisplayData(productsList)
  },[productsList , query , displayData])

  return (
    <>
      <Search query={{ query, setQuery }} />
      <div className="w-full flex">
        <div className="w-max grid grid-cols-3 gap-7 justify-items-start">
          {!data
            ? productsList.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.images[0]}
                  category={product.category.name}
                  description={product.description}
                />
              ))
            : data.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.images[0]}
                  category={product.category.name}
                  description={product.description}
                />
              ))}
        </div>
          <FilterCategory query={{ query, setQuery }} />
      </div>
    </>
  );
}

export default Products;
