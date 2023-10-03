"use client";
import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { User, UserFormLogin } from "@/types/user";
import { useRegisterMutation } from "@/store/apis/userApi";
import { useDispatch } from "react-redux";
import { setLoggedUser } from "@/store/slices/userSlice";
import { UserFormRegister } from "../../types/user";

const UserFormRegister = () => {
  const [register] = useRegisterMutation();
  const dispatch = useDispatch();

  const initialValues: UserFormRegister = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    first_name: yup.string().required().min(4).max(50),
    last_name: yup.string().required().min(4).max(50),
    email: yup.string().required().email().min(4).max(200),
    password: yup.string().required().min(4).max(50),
  });

  const submitForm = async (values: UserFormRegister) => {
    const res = await register(values);
    if ("data" in res) {
      dispatch(setLoggedUser(res.data.user));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
        } = formik;
        return (
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex justify-between items-center mb-3">
              <label>Email</label>
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm first-letter:capitalize">
                  {errors.email}
                </p>
              )}
            </div>
            <input
              name="email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border-b border-solid border-x-0 border-gray-400 border-t-0 w-full mb-10 p-2"
            />
            <div className="flex justify-between items-center mb-3">
              <label>Password</label>
              {errors.password && touched.password && (
                <p className="text-red-500 text-sm first-letter:capitalize">
                  {errors.password}
                </p>
              )}
            </div>
            <input
              name="password"
              type="text"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border-b border-solid border-x-0 border-gray-400 border-t-0 w-full mb-10 p-2"
            />
            <button className="border-black border- border-solid ">
              Login
            </button>
            <p>
              Don&apos;t have an account?<span>Signup</span>
            </p>
          </form>
        );
      }}
    </Formik>
  );
};

export default UserFormRegister;
