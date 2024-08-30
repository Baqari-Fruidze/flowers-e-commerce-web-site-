import * as yup from "yup";
export const schemaCheckout = yup.object({
  recipientName: yup.string().min(1, "can't be empty").required(),
  recipientPhoneNumber: yup
    .number()
    .typeError(" must be a number")
    .required("only numbers")
    .min(9, "valid number"),
  deliveryTime: yup.string().required("can't be empty"),
  dateOfDelivery: yup.string().required("can't be empty"),
  street: yup.string().min(1, "can't be empty").required(),
  houseNumber: yup
    .number()
    .typeError(" must be a number")
    .required("only numbers")
    .min(9, "can't be empty"),
  city: yup.string().min(1, "can't be empty").required(),
});
