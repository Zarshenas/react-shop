import { useCartCunsumer } from "../contexts/CartProvider";
import { MdOutlineDelete } from "react-icons/md";
import findItem from "../utils/helpers/FindCartProduct";
import { useAuth } from "../contexts/AuthenticateProvider";
import { useNavigate } from "react-router-dom";

function AddToCart({cartData}) {
  const { cartState, dispatch } = useCartCunsumer();
  const {isAuthenticated} = useAuth()
  const navigate = useNavigate()
  const cartInfo ={...cartData , quantity:1}

  const item = findItem(cartState.addedProducts, cartInfo.id);


  const addHandler = () =>{
    if (!isAuthenticated) return navigate('/auth/login')
    dispatch({type:"ADD_PRODUCT" , payload:cartInfo})
}
const increaseHandler = () =>{
  dispatch({type:"INCREASE" , payload:cartInfo.id})
  }
  const decreaseHandler = () =>{
    dispatch({type:"DECREASE" , payload:cartInfo.id})
  }
  const removeHandler = () =>{
    dispatch({type:"DELETE" , payload:cartInfo.id})
  }
  
  return (
    <div className="flex text-white justify-between items-center">
      {
        cartState.addedProducts.find(cartProduct => cartProduct.id === cartData.id) ?(
            <>
                <button className={' h-8 w-8 button'} onClick={increaseHandler}> + </button>
                <span className="dark:bg-grayshade-300 bg-zinc-200 text-grayshade-500 dark:text-white inline-block text-center border border-grayshade-50 dark:border-grayshade-100 min-w-10 py-1 px-1 text-md rounded-lg mx-1">{item.quantity}</span>
                {item.quantity>1?(
                    <button className={'h-8 w-8 button'} onClick={decreaseHandler}> - </button>
                ):(
                    <button className={'h-8 w-8 button !bg-red-500'} onClick={removeHandler}>
                      <MdOutlineDelete  className="m-auto" />
                    </button>
                )
                    
                }
            </>
        ):(
            <button className="h-8 px-4 button" onClick={addHandler}> Add To Cart </button>
        )
      }
    </div>
  );
}

export default AddToCart;