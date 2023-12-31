const findItem = (array , id) => {
  return array.find(
    (cartProduct) => cartProduct.id === id
  );
};
export default findItem;