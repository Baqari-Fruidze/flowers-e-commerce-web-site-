import * as yup from "yup";
export const schemaAddress = yup.object({
    street: yup
    .string()
    .min(1, "can't be empty")
    .required(),
    houseNumber: yup
    .number()
    .typeError("only number")
    .required("only numbers")
    .min(3, "can't be empty"),
    city: yup
    .string()
    .min(1, "can't be empty")
    .required(),
    note: yup
    .string()
    .min(1, "can't be empty")
    .required()
})