import React from "react";
import { useAuth } from "../contexts/AuthenticateProvider";
import { Link } from "react-router-dom";
import { TbUserPlus, TbLogout2, TbLogin2 } from "react-icons/tb";
import { CiShoppingBasket } from "react-icons/ci";
import { useCartCunsumer } from "../contexts/CartProvider";

const UserActions = () => {
  const { logOut, isAuthenticated, username } = useAuth();
  const {
    cartState: { ordersCount },
  } = useCartCunsumer();
  return (
    <div className=" flex ">
      {isAuthenticated ? (
        <>
          <button
            onClick={() => logOut()}
            className="text-xl mx-2 flex items-center"
          >
            <TbLogout2 className="mr-2" />
            Logout
          </button>
          <Link className="relative lg:mx-6 md:mx-4 mx-3" to={"/checkout"}>
            <span className="absolute  text-sm -top-2 -right-2 p-1 w-5 h-5 text-center leading-none rounded-full bg-purpleshade-400 text-white">
              {ordersCount}
            </span>
            <CiShoppingBasket className="text-4xl bad" />
          </Link>
        </>
      ) : (
        <div>
          <Link className="text-xl mx-2 flex items-center" to="/auth/login">
            <TbLogout2 className="mr-2" />
            Login
          </Link>
          <Link className="text-xl mx-2 flex items-center" to="/auth/signup">
            <TbUserPlus className="mr-2" />
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserActions;
