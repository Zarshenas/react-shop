import { PriceSum, manageQuantity, orderSum } from "../helpers/manageQuantity";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      if (!state.addedProducts.find((product)=> product.id === action.payload.id)) {
        state.addedProducts.push({...action.payload , quantity: 1 })
      }
      return {
        ...state,
        addedProducts: [...state.addedProducts],
        ordersCount:orderSum(state.addedProducts),
        totalPrice:PriceSum(state.addedProducts),
      };
    case "INCREASE":{
      manageQuantity(state.addedProducts , action.payload , action.type);
      return  {
        ...state,
        ...state.addedProducts,
        ordersCount:orderSum(state.addedProducts),
        totalPrice:PriceSum(state.addedProducts),
      };
    }
    case "DECREASE":
      manageQuantity(state.addedProducts , action.payload ,action.type);
      return  {
        ...state,
        ...state.addedProducts,
        ordersCount:orderSum(state.addedProducts),
        totalPrice:PriceSum(state.addedProducts),
      }; 
    case "DELETE":
      const newAddedProducts = state.addedProducts.filter((product) => product.id !== action.payload);
      return  {
        ...state,
        addedProducts:  [...newAddedProducts],
        ordersCount:orderSum(newAddedProducts),
        totalPrice:PriceSum(newAddedProducts),

      }; 
    case "CHECKOUT":
      return{
        checkout: true,
        ordersCount: 0,
        totalPrice: 0,
        addedProducts: [],
      }
    }
};
export default cartReducer;