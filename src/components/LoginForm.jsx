import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import loginArt from "../assets/login_art.png";
import { useFormik } from "formik";
import { loginSchema } from "../formValidation";

async function login(formData) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      // throw new Error(`HTTP error! Status: ${response.status}`);
      console.log("logged in successfully.");
    }

    const data = await response.json();
    console.log("Login successful:", data);
  } catch (error) {
    console.error("Error during login:", error);
  }
}

const LoginForm = () => {
  // console.log(import.meta.env.VITE_REACT_APP_BASE_URL);
  const initialValues = {
    usernameOrEmail: "",
    password: "",
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
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
      login(values);
      resetForm();
    },
  });
  // console.log(errors);
  return (
    <div className={`banner grid md:grid-cols-2 grid-cols-1 px-6`}>
      <div className="w-full h-screen flex items-center justify-end">
        <div className="w-full flex flex-col items-center justify-center rounded-3xl p-6 shadow-2xl md:w-[70%]">
          <h1 className="text-3xl">Login</h1>
          <form className="flex flex-col w-full h-full items-center justify-center p-6 gap-4">
            <TextField
              label="Username or Email"
              variant="outlined"
              type="email"
              name="usernameOrEmail"
              value={values.usernameOrEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              helperText={`${
                touched.usernameOrEmail && errors.usernameOrEmail
                  ? errors.usernameOrEmail
                  : ""
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
              helperText={`${
                touched.password && errors.password ? errors.password : ""
              }`}
              autoComplete="off"
              required
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Login
            </Button>
          </form>
          <div className="flex flex-col items-center justify-center gap-2 text-[#fff]">
            <Link className="hover:text-blue-800" to="/signup">
              dont have an account signup
            </Link>
            <Link className="hover:text-blue-800" to="/">
              Home
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center relative">
        <h1 className="w-[50%] text-[#e3dfdf] font-semibold text-4xl">
          Accredian
        </h1>
        <h1 className="ship w-[50%] text-white font-semibold text-2xl p-6">
          Login to start your Journey today!
        </h1>
        <img
          className="ship"
          style={{ width: "396px", height: "307px" }}
          src={loginArt}
          alt=""
        />
      </div>
    </div>
  );
};

export default LoginForm;
