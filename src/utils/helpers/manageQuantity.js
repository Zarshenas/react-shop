import findItem from "./FindCartProduct"

function manageQuantity(cartArray , id , action){
    
    const item = findItem(cartArray , id)
    const increasedQuantity = {...item , [item.quantity]:action === "INCREASE" ? item.quantity++ :action==="DECREASE" && item.quantity--}
    return increasedQuantity;
}



function deleteFromCart(cartArray){

}

export {manageQuantity}