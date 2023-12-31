import { useCartCunsumer } from "../contexts/CartProvider";
import { MdOutlineDelete } from "react-icons/md";
import findItem from "../utils/helpers/FindCartProduct";

function AddToCart({cartData}) {
  const { cartState, dispatch } = useCartCunsumer();
  const cartInfo ={...cartData , quantity:1}

  const item = findItem(cartState.addedProducts, cartInfo.id);

  return (
    <div className="flex justify-center items-center">
      {
        cartState.addedProducts.find(cartProduct => cartProduct.id === cartData.id) ?(
            <>
                <button className={' h-8 w-8 text-center text-sm rounded-lg bg-purpleshade-400'} onClick={() => dispatch({type:"INCREASE" , payload:cartInfo.id})}> + </button>
                <span>{item.quantity}</span>
                {item.quantity>1?(
                    <button className={'py-2 px-5 text-sm rounded-lg bg-purpleshade-400'} onClick={() => dispatch({type:"DECREASE" , payload:cartInfo.id})}> - </button>
                ):(
                    <button className={'py-2 px-5 text-sm rounded-lg bg-red-500'} onClick={() => dispatch({type:"DELETE" , payload:cartInfo.id})}>
                      <MdOutlineDelete  />
                    </button>
                )
                    
                }
            </>
        ):(
            <button className="h-8 px-5 text-sm rounded-lg bg-purpleshade-400" onClick={() => dispatch({type:"ADD_PRODUCT" , payload:cartInfo})}> Add To Cart </button>
        )
      }
    </div>
  );
}

export default AddToCart;