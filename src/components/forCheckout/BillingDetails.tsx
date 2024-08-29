import React from "react";
import styled from "styled-components";

export default function BillingDetails() {
  return (
    <Parent>
      <HOne>Billing Details</HOne>
      <InputsConParent>
        <InputsCon>
          <LabelStyled htmlFor="name">Recipient Name</LabelStyled>
          <Input type="text" placeholder=" recipient Name" id="name" />
        </InputsCon>
        <InputsCon>
          <LabelStyled htmlFor="number">Recipient PhoneNumber </LabelStyled>
          <Input type="text" id="number" placeholder="recipient PhoneNumber " />
        </InputsCon>
      </InputsConParent>
    </Parent>
  );
}
const HOne = styled.h1`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #d87d4a;
`;
const Input = styled.input`
  padding: 1.5rem 0 1.5rem 1.5rem;
  border: none;
  font-size: 15px;
  color: #121212;
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
