import * as yup from "yup";

const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} character`;
};

export const signupSchema = yup.object({
  username: yup.string().min(3).max(25).required("please enter your name"),
  email: yup.string().email().required("please enter your email"),
  password: yup
    .string()
    .required("please enter your password")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  confirmPassword: yup
    .string()
    .min(8, "confirm Password is too short - should be 8 chars minimum.")
    .max(25, "confirm password too long")
    .required("please enter your confirmPassword")
    .oneOf([yup.ref("password"), null], "password must match"),
});

export const loginSchema = yup.object({
  usernameOrEmail: yup
    .string()
    .required("please enter your name")
    .min(3, "username must be of 5 characters atleast")
    .max(25, "password too long")
    .matches(
      // Regular expression for a valid email or a valid username
      /^(?!\s)([^\s@]+@[^\s@]+\.[^\s@]+|[a-z0-9_.]+)$/i,
      "Enter a valid username or email"
    ),
  password: yup
    .string()
    .required("please enter your password")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .max(25, "password too long")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
});
