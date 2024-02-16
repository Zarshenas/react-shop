import React from "react";
import { useAuth } from "../../contexts/AuthenticateProvider";
import { useFormik } from "formik";
import { updateInfo as validate } from "../../utils/helpers/formValidator";
import UpdatePassword from "./UpdatePassword";
import api from "../../services/axiosConfig";
import toast from "react-hot-toast";

function MyAccount() {
  const {
    userInfo: { firstName, lastName, email },
  } = useAuth();

  const formik = useFormik({
    initialValues: {
      firstName: firstName,
      lastName: lastName,
      email: email,
    },
    enableReinitialize: true,
    validate,
    onSubmit: (values) => {
      if (
        values.firstName === firstName &&
        values.lastName === lastName &&
        values.email === email
      ) {
        toast.error("No change received", { duration: 3000 });
        return;
      }

      const updatedInfo = JSON.stringify(values);
      api
        .post("/user/update", updatedInfo, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          if (res.status === 204)
            toast.success("Changes applied successfully!", { duration: 3000 });
        })
        .catch((err) => {
          toast.error("Somthing went wrong", { duration: 4000 });
          console.log(err.response.data);
        });
    },
  });
  return (
    <div className="flex flex-col xl:flex-row">
      <form onSubmit={formik.handleSubmit} className="w-full mx-2">
        <h1 className="text-2xl my-12 font-bold text-center xl:text-left">
          Account Details
        </h1>
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
        <div className="form-section items-center md:col-span-2">
          <button type="submit">Submit Details</button>
        </div>
      </form>
      <UpdatePassword />
    </div>
  );
}

export default MyAccount;
