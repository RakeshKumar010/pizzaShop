 import * as Yup from "yup";

 export const signUpSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter your name"),
    address:Yup.string().min(2).max(30).required("Please enter your address"),
    email:Yup.string().email().required("Please enter the email"),
    password:Yup.string().min(6).required("Please enter your password"),
    mobile:Yup.number().min(10).required("Please enter the no.")

 })