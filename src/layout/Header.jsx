import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../components/theme/ThemeSwitcher";
import AbstractDesign from "../assets/AbstractDesign.svg";
import UserActions from "../components/UserActions";
import { FaGithub } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";

function Header() {
  const [isNavOpen, openNavOpen] = useState(false);
  const [stickNav, setStickNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setStickNav(true);
      } else {
        setStickNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openNavHandler = () => {
    openNavOpen((prev) => !prev);
  };

  return (
    <nav
      className={`${
        stickNav ? "fixed" : "[position:initial]"
      }  z-[100] xl:relative py-4 px-1 md:px-14 lg:px-30 w-full border-b border-grayshade-300 bg-lightColor-100 dark:bg-grayshade-500`}
    >
      <div
        onClick={openNavHandler}
        className="ham-container z-[99] xl:hidden w-10 h-10 absolute left-2 top-2 cursor-pointer label bad p-1 flex justify-around items-center flex-col"
      >
        <RiMenu3Fill className="text-purpleshade-300 text-2xl font-bold" />
      </div>
      <img
        className="absolute top-0 left-0 max-h-[67px] lg:max-h-[81px] w-full h-full object-cover"
        src={AbstractDesign}
        alt="bg-header"
      />
      <div className="w-full flex items-center justify-end min-[490px]:justify-around">
        <Link
          className="lg:text-5xl md:text-4xl sm:text-xl font-extrabold xl:mr-8 z-20"
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
