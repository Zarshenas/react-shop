import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../components/theme/ThemeSwitcher";
import { FaGithub } from "react-icons/fa";
import AbstractDesign from "../assets/AbstractDesign.svg";
import UserActions from "../components/UserActions";

function Header() {
  const [isNavOpen, openNavOpen] = useState(false);

  const openNavHandler = () => {
    openNavOpen((prev) => !prev);
  };

  return (
    <nav className=" fixed z-[100] xl:relative py-4 px-1 md:px-14 lg:px-30 w-full border-b border-grayshade-300 bg-lightColor-100 dark:bg-grayshade-500">
      <div
        onClick={openNavHandler}
        className="ham-container z-[99] xl:hidden w-12 h-12 absolute left-4 cursor-pointer label bad p-1 flex justify-around items-center flex-col"
      >
        <div className="w-8 h-2 bg-purpleshade-300 rounded-full"></div>
        <div className="w-8 h-2 bg-purpleshade-300 rounded-full"></div>
        <div className="w-8 h-2 bg-purpleshade-300 rounded-full"></div>
      </div>
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={AbstractDesign}
        alt="bg-header"
      />
      <div className="w-full flex items-center justify-end min-[490px]:justify-around">
        <Link
          className="lg:text-5xl md:text-4xl text-xl font-extrabold mr-8 xl:mr-0 z-20"
          to={"/"}
        >
          <h1>React Shop</h1>
        </Link>
        <div
          className={`z-[97] ${
            isNavOpen ? "block" : "hidden"
          } xl:block bg-lightColor-100 dark:bg-grayshade-500 xl:border-2 border-grayshade-50 dark:border-grayshade-300 xl:rounded-full xl:px-8 flex flex-col items-center justify-center h-screen top-0 left-0 fixed xl:h-min xl:[position:initial]`}
        >
          <ul className="flex flex-col items-center xl:flex-row min-w-max w-screen xl:w-[400px] xl:justify-around text-xl">
            <li className="my-5 xl:my-2">
              <Link to="/" onClick={() => openNavOpen(false)}>
                Home
              </Link>
            </li>
            <li className="my-5 xl:my-2">
              <Link to="/products" onClick={() => openNavOpen(false)}>
                Products
              </Link>
            </li>
            <li className="my-5 xl:my-2">
              <Link to="/about" onClick={() => openNavOpen(false)}>
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-between text-md xl:text-xl">
          <UserActions />
          <div
            className={` justify-start items-center z-[98] xl:flex ${
              isNavOpen ? "flex" : "hidden"
            }`}
          >
            <ThemeSwitcher />
            <Link
              className="text-xl xl:text-2xl bad ml-1 xl:ml-4"
              to={"https://github.com/Siza36/react-shop"}
              target="_blank"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
