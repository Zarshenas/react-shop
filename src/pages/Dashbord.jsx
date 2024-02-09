import React from "react";
import { useAuth } from "../contexts/AuthenticateProvider";
import { TbUser, TbLogout2 } from "react-icons/tb";
import { CiShoppingTag } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";

function Dashbord() {
  const {
    logOut,
    userInfo: { firstName, lastName },
  } = useAuth();
  return (
    <div className=" wrapper-full bg-lightColor-300 dark:bg-grayshade-300 flex flex-col xl:flex-row justify-between">
      <aside className="xl:w-3/12 w-full min-w-max h-max p-14 bg-lightColor-100 dark:bg-grayshade-500 rounded-xl">
        <ul className="flex flex-col font-bold text-2xl [&>li]:list [&>a]:list [&>li]:p-4 [&>a]:p-4">
          <Link to={"my-account"}>
            <TbUser className="mr-2" />
            <li>My Account</li>
          </Link>

          <Link to={"my-orders"}>
            <CiShoppingTag className="mr-2" />
            <li>My orders</li>
          </Link>

          <hr className="mt-2 pt-2 border-t border-grayshade-200 dark:border-grayshade-200" />
          <li onClick={() => logOut()}>
            <TbLogout2 className="mr-2" />
            <span>Logout</span>
          </li>
        </ul>
      </aside>
      <div className="xl:w-9/12 w-full mt-2 xl:mt-0 xl:ml-20 xl:p-16 p-4 bg-lightColor-100 dark:bg-grayshade-500 rounded-xl">
        <div className="text-3xl mb-6">
          <p>
            Hello{" "}
            <span className="text-purpleshade-400 font-extrabold">
              {firstName} {lastName}
            </span>
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashbord;
