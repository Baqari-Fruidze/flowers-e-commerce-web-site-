import styled from "styled-components";
import BillingDetails from "../components/forCheckout/BillingDetails";
import ShipingInfo from "../components/forCheckout/ShipingInfo";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCheckout } from "../Scema/Checkout";
import { TcheckoutTypes } from "../types/CheckoutTypes";
import { CartItem } from "../types/CartType";

export default function Checkout() {
  let data: string | null = localStorage.getItem("cart");
  if (data) {
    data = JSON.parse(data);
  }

  const inputsData: SubmitHandler<TcheckoutTypes> = async (data) => {
    data.recipientPhoneNumber = Number(data.recipientPhoneNumber);
    if (!errors) {
      const res = await fetch("http://134.122.71.97:8000/api/order/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data}`,
        },
        body: JSON.stringify(data),
      });
    }
  };
  const methods = useForm({ resolver: yupResolver(schemaCheckout) });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const count = data?.items.reduce(
    (acc: number, item: CartItem) => acc + item.product.price * item.quantity,
    0
  );
  return (
    <FormProvider {...methods}>
      <Parent>
        <CheckOutCon>
          <Hone>CHECKOUT</Hone>
          <form onSubmit={handleSubmit(inputsData)}>
            <BillingDetails />
            <ShipingInfo />
            <Btn> Continue And Pay</Btn>
          </form>
        </CheckOutCon>
        <Cover>
          <CartCon>
            {data?.items.map((item: CartItem) => {
              return (
                <SingleItemCon>
                  <Image src={item.product.image} alt="" />
                  <Honee>{item.product.name}</Honee>
                  {
                    <Para>
                      <Span>{item.product.category.name} </Span>
                    </Para>
                  }
                  <Para>
                    Quantity <Span>{item.quantity} x</Span>
                  </Para>
                  <Para>$ {item.product.price}</Para>
                </SingleItemCon>
              );
            })}
          </CartCon>
          <Con>
            <TotalSpan>Total</TotalSpan>
            <MoneyAmoint>{count}$</MoneyAmoint>
          </Con>
        </Cover>
      </Parent>
    </FormProvider>
  );
}
const Con = styled.div`
  padding: 2.4rem;
  display: flex;
  justify-content: space-between;
`;
const MoneyAmoint = styled.span`
  font-size: 20px;
  font-weight: 600;
  opacity: 0.5;
`;
const TotalSpan = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
const Cover = styled.div`
  border-radius: 8px;
  background-color: #fff;
  width: 100%;
  @media (min-width: 1200px) {
    width: 40%;
  }
`;
const Span = styled.span`
  font-size: 18px;
  font-weight: 600;
  opacity: 0.5;
`;
const Para = styled.p`
  font-size: 20px;
  font-weight: 500;
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;
const Image = styled.img`
  width: 6rem;
  height: 6rem;
`;
const CartCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  background-color: #fff;
  padding: 2.4rem;
  border-radius: 8px;
  @media (min-width: 1200px) {
    width: 100%;
  }
`;
const CheckOutCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
const Honee = styled.h1`
  color: #121212;
  font-size: 18px;
  font-weight: 600;
  @media (min-width: 1200px) {
    font-weight: 500;
  }
`;
const SingleItemCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
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
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;
