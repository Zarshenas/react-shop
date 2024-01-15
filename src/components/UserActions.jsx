import React from "react";
import { useAuth } from "../contexts/AuthenticateProvider";
import { Link } from "react-router-dom";
import { TbUserPlus,TbLogout2 ,TbLogin2} from "react-icons/tb";

const UserActions = () => {
  const { logOut, isAuthenticated, username } = useAuth();

  return (
    <div className="bad flex">
      {isAuthenticated ? (
          <button onClick={() => logOut()} className="text-xl mx-2 flex items-center">
          <TbLogout2 className="mr-2" />
            Logout
          </button>
      ) : (
        <>
          <Link className="text-xl mx-2 flex items-center" to="/auth/login">
            <TbLogout2 className="mr-2" />
            Login
          </Link>
          <Link className="text-xl mx-2 flex items-center" to="/auth/signup">
            <TbUserPlus className="mr-2"/>
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
};

export default UserActions;
