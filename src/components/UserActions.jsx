import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../contexts/AuthenticateProvider";
import { Link } from "react-router-dom";
import {
  TbUser,
  TbUserPlus,
  TbLogout2,
  TbLogin2,
  TbChevronDown,
} from "react-icons/tb";
import { CiShoppingBasket } from "react-icons/ci";
import { useCartCunsumer } from "../contexts/CartProvider";

const UserActions = () => {
  const [dropDown, setDropDown] = useState(false);
  const { logOut, isAuthenticated, userInfo } = useAuth();
  const {
    cartState: { ordersCount },
  } = useCartCunsumer();

  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, []);
  return (
    <div className="flex items-center font-semibold z-20">
      {isAuthenticated ? (
        <>
          <button className="relative">
            <div
              ref={ref}
              onClick={() => setDropDown((prev) => !prev)}
              className="flex items-center bad dark:bg-grayshade-500 xl:px-4 px-2 text-sm xl:text-base"
            >
              <TbUser className="text-2xl xl:text-2xl" />
              <p className="hidden xl:block">
                welcome{" "}
                <span className="dark:text-purpleshade-100 text-purpleshade-400">
                  {userInfo.firstName && userInfo.firstName}
                </span>
              </p>
              <TbChevronDown />
            </div>
            <ul
              className={`${
                dropDown ? "block" : "hidden"
              } xl:w-full w-max bad dark:bg-grayshade-500 absolute p-4 -right-10 top-[48px] xl:right-0 xl:left-0  [&>li]:list [&>a]:list z-50`}
            >
              <Link to="/dashboard/my-account">
                <li> Dashboard </li>
              </Link>
              <Link to="/dashboard/my-orders">
                <li>Payed Orders</li>
              </Link>
              <hr className="mt-2 pt-2 border-t border-grayshade-200 dark:border-grayshade-200" />
              <li onClick={() => logOut()}>
                <TbLogout2 className="mr-2" />
                <span>Logout</span>
              </li>
            </ul>
          </button>
          <Link className="relative lg:mx-6 md:mx-3 mx-2" to={"/checkout"}>
            <span className="absolute  text-sm -top-2 -right-2 p-1 w-5 h-5 text-center leading-none rounded-full bg-purpleshade-400 text-white">
              {ordersCount}
            </span>
            <CiShoppingBasket className="xl:text-4xl text-3xl bad" />
          </Link>
        </>
      ) : (
        <>
          <Link
            className="text-sm md:text-base xl:text-xl mx-2 flex items-center bad"
            to="/auth/login"
          >
            <TbLogin2 className="mr-2" />
            Login
          </Link>
          <Link
            className="text-sm md:text-base xl:text-xl mx-2 flex items-center bad"
            to="/auth/signup"
          >
            <TbUserPlus className="mr-2" />
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
};

export default UserActions;
