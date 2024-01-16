import * as Yup from "yup";
export const adminValidations = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid Name")
    .required("First Name is required"),
  lastName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid Name")
    .required("First Name is required"),
  revenue: Yup.string()
  .required("Revenue is required"),
  employees: Yup.string()
  .required("No of Employees is required"),
  pan: Yup.string()
  .required("PAN No is required"),
  gst: Yup.string()
  .required("GST is required"),

  email: Yup.string().email("Invalid email").required("E-mail is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{9,}$/,
      "More than 8 digits | Should Contain Uppercase, Lowercase letters and Numbers"
    )
    .required("password is required"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required("Phone Number is required"),
});
