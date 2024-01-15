import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../components/theme/ThemeSwitcher";
import { FaGithub } from "react-icons/fa";
import AbstractDesign from "../assets/AbstractDesign.svg";
import UserActions from "../components/UserActions";

function Header() {

  return (
    <nav className="py-4 px-5 md:px-24  lg:px-40 relative w-full border-b border-grayshade-300">
      <img
        className="absolute -z-10 top-0 left-0 w-full h-full  object-cover"
        src={AbstractDesign}
        alt="bg-header"
      />
      <div className="w-full z-99 flex items-center justify-between">
        <Link to={"/"}>
          <h1 className="lg:text-5xl md:text-4xl text-xl font-semibold">
            React Shop
          </h1>
        </Link>
        <div className="bad ">
          <ul className="flex">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/products'>Products</Link></li>
            {/* <li><Link to='/'>Categories</Link></li> */}
          </ul>
        </div>

        <div className="flex items-center justify-between">
        <UserActions/>
          <ThemeSwitcher />
          <Link
            className="lg:mx-6 md:mx-4 mx-3"
            to={"https://github.com/Siza36/react-shop"}
            target="_blank"
          >
            <FaGithub className="text-4xl bad" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
