import * as Yup from "yup";
export const rfpValidations = Yup.object().shape({
    vendorPrice: Yup.number()
    .required("Vendor Price is required"),
    itemDesc: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid  Item Description")
    .required("Item Description is required"),
    quantity: Yup.number()
    .required("Quantity is required"),
    totalCost: Yup.number()
    .required("Total Cost is required"),
  
});
export const categoryValidations = Yup.object().shape({
    vendorCategory: Yup.string()
    .required("Vendor Category is required"),
});
