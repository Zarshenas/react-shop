import React from "react";
import { updatePassword as validate } from "../../utils/helpers/formValidator";
import { useFormik } from "formik";
import api from "../../services/axiosConfig";
import toast from "react-hot-toast";

function UpdatePassword() {
  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
    },
    validate,
    onSubmit: (values) => {
      if (values.newPassword === values.currentPassword) {
        toast.error("New password can't be the same as current password", {
          duration: 3000,
        });
        return;
      }
      const updatedInfo = JSON.stringify(values);
      api
        .post("/user/update/password", updatedInfo, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          if (res.status === 204)
            toast.success("Password Changed successfully!", { duration: 3000 });
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 404 || err.response.status === 401) {
            toast.error(err.response.data, { duration: 3000 });
          }
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="w-full">
      <h1 className="text-2xl my-12 font-bold text-center xl:text-left">Update Your Password</h1>

      <div className="form-section">
        <label htmlFor="currentPassword">Current Password</label>
        <input
          id="currentPassword"
          name="currentPassword"
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.currentPassword}
        />
        <span>
          {formik.touched.currentPassword && formik.errors.currentPassword
            ? `*${formik.errors.currentPassword}`
            : null}
        </span>
      </div>
      <div className="form-section">
        <label htmlFor="newPassword">New Password</label>
        <input
          id="newPassword"
          name="newPassword"
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.newPassword}
        />
        <span>
          {formik.touched.newPassword && formik.errors.newPassword
            ? `*${formik.errors.newPassword}`
            : null}
        </span>
      </div>
      <div className="form-section items-center md:col-span-2">
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
}

export default UpdatePassword;
