import { useCartCunsumer } from "../contexts/CartProvider";
import AddToCart from "../components/AddToCart";
import EmptyCart from "../components/EmptyCart";

export default function CheckoutPage() {
  const { cartState, dispatch } = useCartCunsumer();
  console.log(cartState.addedProducts.length);
  return (
    <>
      {cartState.checkout || !cartState.addedProducts.length ? (
        <EmptyCart />
      ) : (
        <div className=" wrapper flex flex-col-reverse xl:grid gap-8 lg:grid-cols-3 text-xl py-14">
          <div className="h-min block border-collapse text-center p-5 col-start-1 col-end-3">
            <div className="grid grid-cols-4 w-full">
              <div className="text-left border-purpleshade-400 border-l-4 p-4">
                PRODUCT
              </div>
              <div className=" justify-self-center p-4">PRICE</div>
              <div className=" justify-self-center p-4">QUANTITY</div>
              <div className=" justify-self-center p-4">SUBTOTAL</div>
            </div>
            <div className=" h-max p-1 from-purpleshade-400 from-0% to-30% bg-gradient-to-br to-grayshade-50 dark:to-grayshade-300 ">
              <div className="text-lg bg-white dark:bg-grayshade-500">
                {cartState.addedProducts.map((product) => (
                  <div className="grid grid-cols-4 py-4 xl:text-base text-sm">
                    <div className=" text-left p-4 h-14">
                      {product.title}
                    </div>
                    <div className=" justify-self-center p-4 h-14">
                      $ {product.price}
                    </div>
                    <div className=" justify-self-center p-4 h-14">
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

          <div className="font-bold col-start-3 xl:mt-20 justify-self-end col-end-4 h-max w-full xl:w-max dark:bg-grayshade-500 border-2 border-grayshade-50  dark:border-grayshade-200 p-10 rounded-xl relative bg-cover bg-no-repeat outline outline-zinc-200 dark:outline-grayshade-400 outline-8 bg-[url('../assets/AbstractDesign.svg')]">
            <div className="flex xl:justify-start justify-center items-center my-5">
              <p>Order Total : </p>
              <p className="ml-2">$ {cartState.totalPrice}</p>
            </div>
            <div className="flex xl:justify-start justify-center items-center my-5">
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
        </div>
      )}
    </>
  );
}
