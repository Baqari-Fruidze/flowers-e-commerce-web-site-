import { useFormContext } from "react-hook-form";
import styled from "styled-components";

export default function ShipingInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Parent>
      <Hone>Shipping Info</Hone>
      <InputsConParent>
        <DatesCon>
          <DeliveryDateCon>
            <LabelStyled htmlFor="date">Delivery Date</LabelStyled>
            <Input
              type="date"
              id="date"
              placeholder=" Date of Delivery"
              {...register("dateOfDelivery")}
            />
          </DeliveryDateCon>
          <DeliveryTimeCoon>
            <LabelStyled htmlFor="time">Delivery Time</LabelStyled>
            <Input
              type="time"
              id="time"
              placeholder="Delivery Time"
              {...register("deliveryTime")}
            />
          </DeliveryTimeCoon>
        </DatesCon>
        <AdressCon>
          <CityCon>
            <LabelStyled htmlFor="city">City</LabelStyled>
            <Input
              type="text"
              id="city"
              placeholder="city"
              {...register("city")}
            />
          </CityCon>
          <StreetCon>
            <LabelStyled htmlFor="street"> Street Name</LabelStyled>
            <Input
              type="text"
              placeholder="Street Name"
              id="street"
              {...register("street")}
            />
          </StreetCon>
          <HouseNumberCon>
            <LabelStyled htmlFor="house">House Number</LabelStyled>
            <Input
              type="text"
              placeholder="House Number"
              id="house"
              {...register("houseNumber")}
            />
          </HouseNumberCon>
        </AdressCon>
      </InputsConParent>
    </Parent>
  );
}

const CityCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const LabelStyled = styled.label`
  font-size: 16px;
  color: #121212;
  font-weight: 600;
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
const HouseNumberCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const StreetCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const AdressCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const DeliveryTimeCoon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const DeliveryDateCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const DatesCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const InputsConParent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
const Hone = styled.h1`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #d87d4a;
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
