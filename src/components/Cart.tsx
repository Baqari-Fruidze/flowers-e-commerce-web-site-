import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../App";

export default function Cart() {
  const { cartItemsState, setCartItemsState } = useContext(Context);
  // const cartrequest = () => {
  //   const res = await fetch("http://134.122.71.97:8000/api/cart");
  // };
  return (
    <Cover>
      <Parent>
        <TextCon>
          <CartSpan>Cart</CartSpan>
          <RemoveAllSpan>Remove All</RemoveAllSpan>
        </TextCon>
        <CartItemsCon>cart items</CartItemsCon>
        <TotalCon>
          <TotalSpan>Total</TotalSpan>
          <MoneyAmountSpan>$</MoneyAmountSpan>
        </TotalCon>
        <Btn>Check Out</Btn>
      </Parent>
    </Cover>
  );
}
const Btn = styled.button`
  padding: 1.5rem;
  background-color: #121212;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: orange;
  }
`;
const MoneyAmountSpan = styled.span`
  font-size: 15px;
  font-weight: 500;

  color: #121212;
`;
const TotalSpan = styled.span`
  font-size: 15px;
  font-weight: 500;
  opacity: 0.5;
  color: #121212;
`;
const TotalCon = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CartItemsCon = styled.div`
  display: flex;
`;
const RemoveAllSpan = styled.span`
  color: #121212;
  font-size: 18px;
  font-size: 500;
  text-decoration: underline;
  opacity: 0.5;
`;
const CartSpan = styled.span`
  color: #121212;
  font-size: 18px;
  font-size: 500;
`;
const TextCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Parent = styled.div`
  background-color: #fff;
  padding: 2.4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  max-width: 40rem;
`;
const Cover = styled.div`
  top: 0;
  position: fixed;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;
