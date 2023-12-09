// import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
// import loginArt from "../assets/login_art.png";
import signupArt from "../assets/signup_art.png";

import { useFormik } from "formik";
import { signupSchema } from "../formValidation";

async function signup(formData) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      console.log("signed up successfully");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error during signup:", error);
  }
}

const SignUpForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const {
    values,
    resetForm,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log(values);
      signup(values);
      resetForm();
    },
  });
  //   console.log(errors);
  return (
    <div className={`banner grid md:grid-cols-2 grid-cols-1 px-6`}>
      <div className="w-full h-screen flex items-center justify-end">
        <div className="w-full flex flex-col items-center justify-center rounded-3xl p-6 shadow-2xl md:w-[70%]">
          <h1 className="text-3xl">Signup</h1>
          <form className="flex flex-col w-full h-full items-center justify-center p-6 gap-4">
            <TextField
              label="Username"
              variant="outlined"
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              helperText={`${
                touched.username && errors.username ? errors.username : ""
              }`}
              autoComplete="off"
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              helperText={`${
                touched.email && errors.email ? errors.email : ""
              }`}
              autoComplete="off"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              helperText={`${
                touched.password && errors.password ? errors.password : ""
              }`}
              autoComplete="off"
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              helperText={`${
                touched.confirmPassword && errors.confirmPassword
                  ? errors.confirmPassword
                  : ""
              }`}
              autoComplete="off"
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Sign Up
            </Button>
          </form>
          <div className="flex flex-col items-center justify-center gap-2 text-[#000000]">
            <Link className="hover:text-blue-800" to="/login">
              already have an account Login
            </Link>
            <Link className="hover:text-blue-800" to="/">
              Home
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center relative">
        <h1 className="w-[50%] text-[#000000] font-semibold text-4xl p-6">
          Accredian
        </h1>
        <h1 className="ship w-[50%] text-white font-semibold text-2xl">
          Signup to Master your future!
        </h1>
        <img
          className="ship"
          style={{ width: "352px", height: "300px" }}
          src={signupArt}
          alt=""
        />
      </div>
    </div>
  );
};

export default SignUpForm;
