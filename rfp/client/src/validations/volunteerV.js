import * as Yup from "yup";
export const volunteerValidations = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid Name")
    .required("Name is required"),

  email: Yup.string().email("Invalid email").required("Email is required"),

  gender: Yup.string("Invalid gender").required("Gender is required"),
  institute: Yup.string("Invalid Institute Name").required("Institute Name is required"),
  degree: Yup.string("Invalid Degree Name").required("Degree Name is required"),
  graduation: Yup.string("Invalid Year of Graduation").required("Year of Graduation is required"),
  about: Yup.string().required("Please Write 2-3 lines about you."),
  why: Yup.string().required("Please write Why do you want to Volunteer at Project Gullak"),

  age: Yup.number()
    .integer("Age can't include a decimal point")
    .positive("Age can't start with a minus")
    .required("Age is required"),

  mobile: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required("Phone Number is required"),
});
