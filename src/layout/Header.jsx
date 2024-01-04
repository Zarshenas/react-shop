import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../components/theme/ThemeSwitcher";
import { CiShoppingBasket } from "react-icons/ci";
import { useCartCunsumer } from "../contexts/CartProvider";
import { FaGithub } from "react-icons/fa";
import AbstractDesign from '../assets/AbstractDesign.svg'

function Header() {
  const {
    cartState: { ordersCount },
  } = useCartCunsumer();
  return (
    <nav className="py-4 px-5 md:px-24  lg:px-40 relative w-full border-b border-grayshade-300">
      <img
        className="absolute -z-10 top-0 left-0 w-full h-full  object-cover"
        src={AbstractDesign}
        alt="bg-header"
      />
      <div className="w-full z-99 flex items-center justify-between">
        <Link to={"/products"}>
          <h1 className="lg:text-5xl md:text-4xl text-xl font-semibold">React Shop</h1>
        </Link>
        <div className="flex items-center justify-between">
          <Link className="relative lg:mx-6 md:mx-4 mx-3" to={"/checkout"}>
            <span className="absolute text-sm -top-2 -right-2 p-1 w-5 h-5 text-center leading-none rounded-full bg-purpleshade-400 text-white">
              {ordersCount}
            </span>
            <CiShoppingBasket className="text-4xl bg-white dark:bg-grayshade-400 border border-grayshade-200 p-1 rounded-md" />
          </Link>
          <ThemeSwitcher />
          <Link className="lg:mx-6 md:mx-4 mx-3" to={'https://github.com/Siza36/react-shop'} target="_blank">
            <FaGithub className="text-4xl bg-white dark:bg-grayshade-400 border border-grayshade-200 p-1 rounded-md" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
