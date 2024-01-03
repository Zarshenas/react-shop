import { useCartCunsumer } from "../contexts/CartProvider";
import { MdOutlineDelete } from "react-icons/md";
import findItem from "../utils/helpers/FindCartProduct";

function AddToCart({cartData}) {
  const { cartState, dispatch } = useCartCunsumer();
  const cartInfo ={...cartData , quantity:1}

  const item = findItem(cartState.addedProducts, cartInfo.id);

  return (
    <div className="flex text-white justify-between items-center">
      {
        cartState.addedProducts.find(cartProduct => cartProduct.id === cartData.id) ?(
            <>
                <button className={' h-8 w-8 button'} onClick={() => dispatch({type:"INCREASE" , payload:cartInfo.id})}> + </button>
                <span className="dark:bg-grayshade-300 bg-zinc-200 text-grayshade-500 dark:text-white inline-block text-center border border-grayshade-50 dark:border-grayshade-100 min-w-10 py-1 px-1 text-md rounded-lg mx-1">{item.quantity}</span>
                {item.quantity>1?(
                    <button className={'h-8 w-8 button'} onClick={() => dispatch({type:"DECREASE" , payload:cartInfo.id})}> - </button>
                ):(
                    <button className={'h-8 w-8 button !bg-red-500'} onClick={() => dispatch({type:"DELETE" , payload:cartInfo.id})}>
                      <MdOutlineDelete  className="m-auto" />
                    </button>
                )
                    
                }
            </>
        ):(
            <button className="h-8 px-4 button" onClick={() => dispatch({type:"ADD_PRODUCT" , payload:cartInfo})}> Add To Cart </button>
        )
      }
    </div>
  );
}

export default AddToCart;