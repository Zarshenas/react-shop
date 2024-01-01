import findItem from "./FindCartProduct";

function manageQuantity(cartArray, id, action) {
  const item = findItem(cartArray, id);
  const increasedQuantity = {
    ...item,
    [item.quantity]:
      action === "INCREASE"
        ? item.quantity++
        : action === "DECREASE" && item.quantity--,
  };
  return increasedQuantity;
}

const orderSum = (ordersArray) => {
  const ordersCount = ordersArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );
  return ordersCount;
};

const PriceSum = (ordersArray) => {
  const totalPrice = ordersArray.reduce(
    (previousValue, currentValue) => previousValue + (currentValue.price * currentValue.quantity),
    0
  );

  return totalPrice;
};

export { manageQuantity, orderSum, PriceSum };
