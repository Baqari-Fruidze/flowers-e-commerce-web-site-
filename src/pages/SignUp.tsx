import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpScema } from "../Scema/SignUpYup";
import { TSignUp } from "../types/SignUp";
import loginBg from "/image/loginBg.jpg";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpScema) });
  const inputHandler: SubmitHandler<TSignUp> = (data) => console.log(data);
  return (
    <Parent>
      <form
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
        onSubmit={handleSubmit(inputHandler)}
      >
        <InputsCon>
          <InputStyles
            type="text"
            placeholder="First Name"
            {...register("first_name")}
          />
          {errors.first_name ? (
            <FirsNameSpan>{errors.first_name.message}</FirsNameSpan>
          ) : null}
          <InputStyles
            type="text"
            placeholder="Last Name"
            {...register("last_name")}
          />
          {errors.last_name ? (
            <LastNameSpan>{errors.last_name.message}</LastNameSpan>
          ) : null}
          <InputStyles
            type="text"
            placeholder="Username"
            {...register("username")}
          />
          {errors.username ? (
            <UserNameSpan>{errors.username.message}</UserNameSpan>
          ) : null}
          <InputStyles type="text" placeholder="Email" {...register("email")} />{" "}
          {errors.email ? <EmailSpan>{errors.email.message}</EmailSpan> : null}
          <InputStyles
            type="text"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password ? (
            <PaswordSpan>{errors.password.message}</PaswordSpan>
          ) : null}
          <InputStyles type="file" {...register("profilePicture")} />
          <Btn>Register</Btn>
        </InputsCon>
      </form>
    </Parent>
   
  );
}


const PaswordSpan = styled.span`
  color: red;
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  top: 21.5rem;
  right: 4rem;
  letter-spacing: 1px;
`;
const EmailSpan = styled.span`
  color: red;
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  top: 16.5rem;
  right: 4rem;
  letter-spacing: 1px;
`;
const UserNameSpan = styled.span`
  color: red;
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  top: 11.5rem;
  right: 4rem;
  letter-spacing: 1px;
`;
const LastNameSpan = styled.span`
  color: red;
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  top: 6.5rem;
  right: 4rem;
  letter-spacing: 1px;
`;
const FirsNameSpan = styled.span`
  color: red;
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  top: 2rem;
  right: 4rem;
  letter-spacing: 1px;
`;
const Btn = styled.button`
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 16px;
  width: 100%;
  color: #fff;
  border-radius: 8px;
  padding: 1.5rem 0;
  border: none;
  background-color: #121212;
  margin-top: 2.4rem;
  &:hover {
    cursor: pointer;
    color: orange;
  }
`;
const InputStyles = styled.input`
  color: var(--Gray, #808080);
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 1.5rem 0 1.5rem 2rem;
  border: none;
  border-bottom: 1px solid #121212;
  outline: none;
  &::placeholder {
    opacity: 0.5;
  }
`;
const Parent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f7;
  padding: 10rem 2.4rem;
  min-height: 100vh;
  background-image: url(${loginBg});
  background-repeat: no-repeat;
  background-size: 100%;
`;
const InputsCon = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  background-color: #f5f5f7;
  max-width: 50rem;
`;

