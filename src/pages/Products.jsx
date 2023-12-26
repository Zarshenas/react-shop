import { useState } from "react";
import Product from "../components/product";
import { useProductConsumer } from "../contexts/ProductsProvider";
import Search from "../components/Search";
import useSearchProduct from "../utils/hooks/useSearchProduct";

function Products() {
  const [search , setSearch] = useState('');
  const productsList = useProductConsumer();
  const searchedList = useSearchProduct(search , productsList);
  return (
    <>
        <Search searchState={{search , setSearch}} />
      <div className="w-max grid grid-cols-3 gap-7 justify-items-start">
        {!searchedList?productsList.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.images[0]}
            category={product.category.name}
            description={product.description}
          />
        )):
        searchedList.map((product) => (
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
    </>
  );
}

export default Products;
