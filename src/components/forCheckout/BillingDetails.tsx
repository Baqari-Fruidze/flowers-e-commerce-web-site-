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
          <NameInput
            type="text"
            placeholder=" recipient Name"
            id="name"
            {...register("recipientName")}
          />
        </InputsCon>
        <InputsCon>
          <LabelStyled htmlFor="number">Recipient PhoneNumber</LabelStyled>
          <PhoneNumberInput
            type="text"
            id="number"
            placeholder="Recipient PhoneNumber "
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
const PhoneNumberInput = styled.input`
  padding: 1.5rem 0 1.5rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  color: #121212;
  outline: none;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  &::placeholder {
    font-size: 18px;
    color: #121212;
    opacity: 0.5;
    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
`;
const NameInput = styled.input`
  padding: 1.5rem 0 1.5rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  color: #121212;
  outline: none;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  &::placeholder {
    font-size: 18px;
    color: #121212;
    opacity: 0.5;
    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
`;
const LabelStyled = styled.label`
  font-size: 16px;
  color: #121212;
  font-weight: 600;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
const InputsCon = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  @media (min-width: 768px) {
    width: 50%;
    gap: 1.2rem;
  }
`;
const InputsConParent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 2.4rem;
  @media (min-width: 768px) {
  }
`;
