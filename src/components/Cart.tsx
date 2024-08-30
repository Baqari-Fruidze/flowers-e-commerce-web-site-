import { useContext, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../App";

export default function Cart() {
  const { cartItemsState, setCartItemsState } = useContext(Context);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      token = JSON.parse(token);
      const cartrequest = async () => {
        const res = await fetch("http://134.122.71.97:8000/api/cart", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token.access}`,
          },
        });
        if (res.ok) {
          const data = await res.json();
          setCartItemsState(data);
        } else {
          localStorage.clear();
        }
      };
      cartrequest();
    }
  }, []);
  console.log(cartItemsState);
  return (
    <Cover>
      <Parent>
        <TextCon>
          <CartSpan>Cart</CartSpan>
          <RemoveAllSpan>Remove All</RemoveAllSpan>
        </TextCon>
        <CartItemsConParent>
          {cartItemsState.items.map((item, index) => {
            return (
              <CartItemsCon key={index}>
                <ItemImage src={item.product.src} alt="" />
                <ItemsNameSpan>{item.product.name} </ItemsNameSpan>
                <ItemsPriceSpan>
                  ${item.product.price}
                  <ItemQuantitySpan> ({item.quantity} x)</ItemQuantitySpan>
                </ItemsPriceSpan>
              </CartItemsCon>
            );
          })}
        </CartItemsConParent>
        <TotalCon>
          <TotalSpan>Total</TotalSpan>
          <MoneyAmountSpan>$</MoneyAmountSpan>
        </TotalCon>
        <Btn>Check Out</Btn>
      </Parent>
    </Cover>
  );
}
const ItemQuantitySpan = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
const ItemsPriceSpan = styled.span`
  font-size: 14px;
  opacity: 0.5;
  color: #121212;
`;
const ItemsNameSpan = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #121212;
`;
const ItemImage = styled.img`
  width: 6rem;
  height: 6rem;
`;
const CartItemsCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
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
const CartItemsConParent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  font-size: 700;
`;
const TextCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Parent = styled.div`
  border-radius: 8px;
  background-color: #fff;
  padding: 2.4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  max-width: 40rem;
  height: 70rem;
  overflow-y: auto;
`;
const Cover = styled.div`
  overflow-y: auto;
  z-index: 89;
  top: 0;
  position: fixed;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;
