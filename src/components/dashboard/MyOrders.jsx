import React, { useEffect, useState } from "react";
import api from "../../services/axiosConfig";
import { useAuth } from "../../contexts/AuthenticateProvider";
import EmptyOrders from "../EmptyOrders";
import { TailSpin } from "react-loader-spinner";

const MyOrders = () => {
  const { isAuthenticated } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsloading] = useState(true);
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
        orders.map((order) => (
          <div
            key={order._id}
            className="dark:bg-grayshade-500 border border-grayshade-50 dark:border-grayshade-300 rounded-lg my-4 p-2  xl:p-8"
          >
            <ul>
              {order.addedProducts.map((product) => (
                <li
                  key={product._id}
                  className="p-1 xl:p-2 text-sm lg:text-xl grid grid-cols-3 border-b border-b-grayshade-50 dark:border-b-grayshade-300"
                >
                  <span className="font-semibold">{product.title}</span>
                  <span className="font-semibold place-self-center">
                    {" "}
                    $ {product.price}
                  </span>
                  <span className="font-semibold place-self-center">
                    Quantity: {product.quantity}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-evenly mb-0">
              <p className="font-bold lable">
                Total Orders : {order.ordersCount}
              </p>
              <p className="font-bold lable">
                Total Price : $ {order.totalPrice}{" "}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
