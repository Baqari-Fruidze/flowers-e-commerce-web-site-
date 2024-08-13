import * as yup from "yup";
export const schemaLogin = yup.object({
  userName: yup.string().min(1, "can't be empty").required(),
  password: yup.string().min(1, "can't be empty").required(),
});
