import { useCartCunsumer } from "../contexts/CartProvider";
import AddToCart from "../components/AddToCart";
import EmptyCart from "../components/EmptyCart";

export default function CheckoutPage() {
  const { cartState, dispatch } = useCartCunsumer();
console.log(cartState.addedProducts.length)
  return (<>
    {cartState.checkout || !cartState.addedProducts.length? <EmptyCart/> :<div className=" wrapper grid gap-8 grid-cols-3 text-xl py-14">
    <div className="h-min w-full border-collapse text-center p-5 col-start-1 col-end-3">
      <div className="grid grid-cols-4">
        <div className="text-left border-purpleshade-400 border-l-4 p-4">
          PRODUCT
        </div>
        <div className="w-max justify-self-center p-4">PRICE</div>
        <div className="w-max justify-self-center p-4">QUANTITY</div>
        <div className="w-max justify-self-center p-4">SUBTOTAL</div>
      </div>
      <div className="w-full h-max p-1 from-purpleshade-400 from-0% to-30% bg-gradient-to-br to-grayshade-50 dark:to-grayshade-300 ">
        <div className="text-lg bg-white dark:bg-grayshade-500">
          {cartState.addedProducts.map((product) => (
            <div className="grid grid-cols-4 py-4">
              <div className="w-max text-left p-4 h-14">{product.title}</div>
              <div className="w-max justify-self-center p-4 h-14">
                $ {product.price}
              </div>
              <div className="w-max justify-self-center p-4 h-14">
                <AddToCart
                  cartData={{
                    id: product.id,
                    title: product.title,
                    price: product.price,
                  }}
                />
              </div>
              <div className="w-max justify-self-center p-4 h-14">
                $ {product.quantity * product.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="font-bold col-start-3 mt-20 justify-self-end col-end-4 h-max w-max dark:bg-grayshade-500 border-2 border-grayshade-50  dark:border-grayshade-200 p-10 rounded-xl relative bg-cover bg-no-repeat outline outline-zinc-200 dark:outline-grayshade-400 outline-8 bg-[url('../../public/assets/AbstractDesign.svg')]">
      {/* <img className='absolute -z-0 top-0 left-0 object-cover' src="../../public/assets/AbstractDesign.svg" alt="bg" /> */}
      <div className="flex justify-start items-center my-5">
        <p>Order Total : </p>
        <p className="ml-2">$ {cartState.totalPrice}</p>
      </div>
      <div className="flex justify-start items-center my-5">
        <p>Sales volume : </p>
        <p className="ml-2">{cartState.ordersCount}</p>
      </div>
      <div className="text-center">
        <button
          onClick={() => dispatch({ type: "CHECKOUT" })}
          className="h-10 px-4  font-semibold button"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  </div>}
    
  </>
  );
}
