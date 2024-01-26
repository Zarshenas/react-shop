import React, { useEffect, useState } from "react";
import api from "../../services/axiosConfig";
import { useAuth } from "../../contexts/AuthenticateProvider";
import EmptyOrders from "../EmptyOrders";

const MyOrders = () => {
  const { isAuthenticated } = useAuth();
  const [orders, setOrders] = useState([]);
  console.log(orders);
  useEffect(() => {
    const getOrders = async () => {
      api.get("/user/myorders").then(({ data, status }) => {
        if (status === 204) return;
        setOrders(data);
      });
    };
    if (isAuthenticated) getOrders();
  }, []);

  return (
    <div className="mt-6">
      {!orders.length ? (
        <EmptyOrders />
      ) : (
        <div>
          {orders.map(order => <p key={order._id}> {order.ordersCount}</p>)}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
