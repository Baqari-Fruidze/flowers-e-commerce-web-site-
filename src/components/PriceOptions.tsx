import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../App";
import Circle from "./Circle";
import { useNavigate } from "react-router-dom";

export default function PriceOptions({
  price,
  singleProduct,
}: {
  price: number;
  singleProduct: string | undefined;
}) {
  const {
    setSubscribe,
    subscribe,
    quantity,
    cartItemsState,
    setCartItemsState,
  } = useContext(Context);
  const navigate = useNavigate();
  async function getingCartItems() {
    let token = localStorage.getItem("token");
    if (token) {
      token = JSON.parse(token);
      const res = await fetch("http://134.122.71.97:8000/api/cart-item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.access}`,
        },
        body: JSON.stringify({
          product_id: singleProduct,
          quantity: quantity,
        }),
      });

      if (res.status === 401) {
        navigate("/login");
      } else if (res.ok) {
        const data = await res.json();
        setCartItemsState((prev) => ({
          ...prev,
          items: [...prev.items, data],
        }));
      }
    }
  }
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
      <Btn onClick={() => getingCartItems()}>Add to basket</Btn>
    </Parent>
  );
}

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
  @media (min-width: 1200px) {
    padding: 2rem;
  }
`;
const SubscribeP = styled.p`
  color: var(--Black, #121212);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;
const PurchaseP = styled.p`
  color: var(--Black, #121212);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;

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
