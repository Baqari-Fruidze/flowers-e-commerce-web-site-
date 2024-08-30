import styled from "styled-components";
import BillingDetails from "../components/forCheckout/BillingDetails";
import ShipingInfo from "../components/forCheckout/ShipingInfo";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCheckout } from "../Scema/Checkout";
import { TcheckoutTypes } from "../types/CheckoutTypes";

export default function Checkout() {
  const inputsData: SubmitHandler<TcheckoutTypes> = (data) => console.log(data);
  const methods = useForm({ resolver: yupResolver(schemaCheckout) });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  return (
    <FormProvider {...methods}>
      <Parent>
        <Hone>CHECKOUT</Hone>
        <form onSubmit={handleSubmit(inputsData)}>
          <BillingDetails />
          <ShipingInfo />
          <Btn> Continue And Pay</Btn>
        </form>
      </Parent>
    </FormProvider>
  );
}
const Btn = styled.button`
  letter-spacing: 1px;
  margin-top: 2.4rem;
  width: 100%;
  border: none;
  padding: 1.5rem;
  background-color: #121212;
  color: #fff;
  font-size: 19px;
  font-weight: 500;
  border-radius: 8px;
`;
const Hone = styled.h1`
  font-size: 24px;
  letter-spacing: 1px;
  color: #121212;
  font-weight: 700;
`;
const Parent = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  @media (min-width: 768px) {
  }
`;
