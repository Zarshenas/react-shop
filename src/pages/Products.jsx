
import Product from "../components/product";
import { useProductConsumer } from "../contexts/ProductsProvider"

function Products() {
  const productsList = useProductConsumer();
  console.log(productsList)
  return (
    <div className="w-max grid grid-cols-3 gap-7 justify-items-start">
        {productsList.map(product => <Product key={product.id} id={product.id} title={product.title} price={product.price} image={product.images[0]} category={product.category.name} description={product.description}/>)}
    </div>
  )
}

export default Products