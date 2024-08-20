import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../App";
import Circle from "./Circle";

export default function PriceOptions({ price }: { price: number }) {
  const { setSubscribe, subscribe } = useContext(Context);
  return (
    <Parent>
      <TextsCon>
        <StyledP>Price options</StyledP>
        <CircleCon>
          <Circle subscribe={subscribe} setSubscribe={setSubscribe} />
          <PurchaseP>One time purchase. Price ${price}</PurchaseP>
        </CircleCon>
        <CircleCon>
          <Circle subscribe={!subscribe} setSubscribe={setSubscribe} />
          <SubscribeP>Subscribe now, and save 25% on this order. </SubscribeP>
        </CircleCon>
      </TextsCon>
      <Btn>Add to basket</Btn>
    </Parent>
  );
}

// const InsideCon = styled.div`
//   width: 1.6rem;
//   height: 1.6rem;
//   background: #121212;
//   border-radius: 50%;
// `;
const Btn = styled.button`
  background-color: #121212;
  padding: 1.6rem;
  color: var(--White, #fff);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: 0.48px;
  text-transform: uppercase;
  border: none;
`;
const SubscribeP = styled.p`
  color: var(--Black, #121212);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
const PurchaseP = styled.p`
  color: var(--Black, #121212);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
// const Circle = styled.div<{ sub: boolean }>`
//   border-radius: 50%;
//   width: 2.4rem;
//   height: 2.4rem;
//   /* background: #121212; */
//   border: 1px solid #121212;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
const CircleCon = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;
const StyledP = styled.p`
  color: var(--Black, #121212);
  font-family: Gilroy;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;
const TextsCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
