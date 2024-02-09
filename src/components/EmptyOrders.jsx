import React from "react";
import emptyorders from "../assets/emptyorders.png";
const EmptyOrders = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col text-center col-start-2 col-end-3 self-start">
      <img className="lg:w-96 md:w-80 w-48" src={emptyorders} alt="emptycart" />
      <p className="text-3xl font-extrabold">No orders</p>
      <p className="lg:text-lg text-sm text-grayshade-100">
        You have no orders yet. It's never too late to change it.
      </p>
    </div>
  );
};

export default EmptyOrders;
