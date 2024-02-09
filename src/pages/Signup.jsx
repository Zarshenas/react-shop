import React from "react";
import { useFormik } from "formik";
import { signUpValidator as validate } from "../utils/helpers/formValidator";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/axiosConfig";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const { firstName, lastName, email, password } = values;
      const jsonUser = JSON.stringify({ firstName, lastName, email, password });

      api
        .post("/auth/signup", jsonUser, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.status === 201) {
            toast.success("Your account has been created!", { duration: 4000 });
            setTimeout(() => {
              navigate("/auth/login");
            }, 1000);
          }
        })
        .catch((error) => {
          if (error.code === "ERR_BAD_REQUEST")
            toast.error("User already exists.", { duration: 4000 });
          else console.log(error)
        });
    },
  });
  return (
    <div className="wrapper dark:text">
      <div className="p-8 mt-[8%] w-full h-max bg-lightColor-100 border-4 border-lightColor-300 dark:border-grayshade-300 dark:bg-grayshade-400 rounded-lg">
        <div className="text-center mb-4">
          <h1 className="text-purpleshade-400 font-extrabold text-4xl mb-3">
            Sign Up
          </h1>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="grid md:grid-cols-2 content-center"
        >
          <div className="form-section">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <span>
              {formik.touched.firstName && formik.errors.firstName
                ? `*${formik.errors.firstName}`
                : null}
            </span>
          </div>

          <div className="form-section">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            <span>
              {formik.touched.lastName && formik.errors.lastName
                ? `*${formik.errors.lastName}`
                : null}
            </span>
          </div>

          <div className="form-section">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <span>
              {formik.touched.email && formik.errors.email
                ? `*${formik.errors.email}`
                : null}
            </span>
          </div>

          <div className="form-section">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <span>
              {formik.touched.password && formik.errors.password
                ? `*${formik.errors.password}`
                : null}
            </span>
          </div>

          <div className="form-section items-center md:col-span-2">
            <button type="submit">Sign Up</button>
            <Link to={"/auth/login"}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
