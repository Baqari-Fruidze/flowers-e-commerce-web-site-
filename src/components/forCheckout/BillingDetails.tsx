import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

export default function BillingDetails() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  // console.log(errors);
  return (
    <Parent>
      <HOne>Billing Details</HOne>
      <InputsConParent>
        <InputsCon>
          <LabelStyled htmlFor="name">Recipient Name</LabelStyled>
          <Input
            type="text"
            placeholder=" recipient Name"
            id="name"
            {...register("recipientName")}
          />
        </InputsCon>
        <InputsCon>
          <LabelStyled htmlFor="number">Recipient PhoneNumber</LabelStyled>
          <Input
            type="text"
            id="number"
            placeholder="recipient PhoneNumber "
            {...register("recipientPhoneNumber")}
          />
        </InputsCon>
      </InputsConParent>
    </Parent>
  );
}
const ErorSpan = styled.span`
  color: red;
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  right: 4rem;
  top: 4rem;
`;
const HOne = styled.h1`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #d87d4a;
`;
const Input = styled.input`
  padding: 1.5rem 0 1.5rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  color: #121212;
  outline: none;
  &::placeholder {
    font-size: 18px;
    color: #121212;
    opacity: 0.5;
  }
`;
const LabelStyled = styled.label`
  font-size: 16px;
  color: #121212;
  font-weight: 600;
`;
const InputsCon = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const InputsConParent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;