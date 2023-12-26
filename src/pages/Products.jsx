
import Product from "../components/product";
import { useProductConsumer } from "../contexts/ProductsProvider"

function Products() {
  const productsList = useProductConsumer();
  console.log(productsList)
  return (
    <div>
      this is a list of all products
        {productsList.map(product => <Product key={product.id} title={product.title} price={product.price} image={product.images[0]} />)}
    </div>
  )
}

export default Products