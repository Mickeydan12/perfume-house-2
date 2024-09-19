import * as yup from "yup";

// for sign up
export const signupSchema = yup
.object({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("lastname is required"),
  email: yup.string().required("email is required").email("invalid email format"),
  password: yup
    .string()
    .required("password is required")
    .min(8, "min lenght of password should be atleast 8 chrs"),
  confirmpassword: yup
    .string()
    .required("confirmpassword is required")
    .min(8, "min lenght of password should be atleast 8 chrs")
    .oneOf([yup.ref("password")], "password dp not match"),
})
.required();


export const signinSchema = yup
.object({
 
  email: yup.string().required("email is required").email("invalid email format"),
  password: yup
    .string()
    .required("password is required")
    .min(8, "min lenght of password should be atleast 8 chrs"),
 
})
.required();