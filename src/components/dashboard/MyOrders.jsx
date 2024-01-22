import React, { useEffect, useState } from "react";
import api from "../../services/axiosConfig";
import { useAuth } from "../../contexts/AuthenticateProvider";

const MyOrders = () => {
    const {
        userInfo: { _id },
      } = useAuth();
    const [orders , setOrders] = useState([]);

  useEffect(() => {
    if (!_id) return

    const getOrders = async () => {
        api.post('/user/myorders' , {_id})
        .then(({data , status})=> {
            if(status === 204){
                console.log("user has no orders")
            }
            setOrders(data)
        })
    };
    getOrders()
  }, [_id]);

  return <>MyOrders</>;
};

export default MyOrders;
