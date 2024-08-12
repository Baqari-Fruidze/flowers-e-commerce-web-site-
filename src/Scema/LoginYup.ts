import * as yup from "yup";
export const schemaLogin = yup.object({
  userName: yup
    .string()
    .required()
    .min(5, "userName must contain minimum 5 symbols"),
  password: yup.string().required(),
});
