import { manageQuantity } from "../helpers/manageQuantity";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        addedProducts: [...state.addedProducts, action.payload],
      };
    case "INCREASE":{
      manageQuantity(state.addedProducts , action.payload , action.type);
      return  {
        ...state,
        ...state.addedProducts,
      };
    }
    case "DECREASE":
      manageQuantity(state.addedProducts , action.payload ,action.type);
      return  {
        ...state,
        ...state.addedProducts,
      }; 
    case "DELETE":
      const newAddedProducts = state.addedProducts.filter((product) => product.id !== action.payload);
      return  {
        ...state,
        addedProducts:  [...newAddedProducts],
      };
      return 
    default:
      break;
  }
};
export default cartReducer;