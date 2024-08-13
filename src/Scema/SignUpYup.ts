import * as yup from "yup";
export const signUpScema = yup.object({
  first_name: yup.string().required("min 2 char"),
  last_name: yup.string().required("min 2 char"),
  username: yup.string().min(4, "min 4 symbols").required(),
  email: yup.string().required("can't be empty"),
  password: yup.string().min(4, "min 4 symbols").required(),
  profilePicture: yup.mixed().required(),
});
