import React, { useEffect, useState } from "react";
import api from "../../services/axiosConfig";
import { useAuth } from "../../contexts/AuthenticateProvider";
import EmptyOrders from "../EmptyOrders";
import {TailSpin} from 'react-loader-spinner'

const MyOrders = () => {
  const { isAuthenticated } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  console.log(orders);
  useEffect(() => {
    const getOrders = async () => {
      api.get("/user/myorders").then(({ data, status }) => {
        if (status === 204) setIsloading(false);
        setOrders(data);
        setIsloading(false);
      });
    };
    if (isAuthenticated) getOrders();
  }, []);

  return (
    <div className="mt-6 h-full items-center">
      {isLoading ? (
        <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#703BF7"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=" h-full flex justify-center items-center"
      />
      ) : !orders.length ? (
        <EmptyOrders />
      ) : (
        <div className="max-w-md mx-auto bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-lg shadow-lg p-8 my-8">
      <h2 className="text-3xl font-extrabold mb-4">Your Order</h2>
      <p className="mb-2">Total Orders: {orders.ordersCount}</p>
      <p className="mb-4">Total Price: ${orders.totalPrice}</p>

      <h3 className="text-xl font-bold mb-2">Ordered Products:</h3>
      <ul>
        {orders[0].addedProducts.map(product => (
          <li key={product._id} className="mb-2">
            <span className="font-semibold">{product.title}</span> - ${product.price} (Quantity: {product.quantity})
          </li>
        ))}
      </ul>
    </div>
      )}
    </div>
  );
};

export default MyOrders;
