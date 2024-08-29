import styled from "styled-components";
import BillingDetails from "../components/forCheckout/BillingDetails";

export default function Checkout() {
  return (
    <Parent>
      <Hone>CHECKOUT</Hone>
      <BillingDetails />
    </Parent>
  );
}
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
`;
