import * as yup from "yup";
export const schemaCheckout = yup.object({
  recipientName: yup.string().min(1, "can't be empty").required(),
  recipientPhoneNumber: yup
    .string()
    .min(1, "can't be empty")
    .matches(/^\d+(\.\d+)?$/, "only numbers are allowed")
    .required(),
  deliveryTime: yup.string().required(),
  dateOfDelivery: yup.string().required(),
  street: yup.string().min(1, "can't be empty").required(),
  houseNumber: yup.number().min(2, "can't be empty").required(),
  city: yup.string().min(1, "can't be empty").required(),
});

const regex = /^\d+(\.\d+)?$/;
