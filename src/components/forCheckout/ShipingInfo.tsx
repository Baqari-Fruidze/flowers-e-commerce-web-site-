import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

export default function ShipingInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  console.log(errors.city);
  return (
    <Parent>
      <Hone>Shipping Info</Hone>
      <InputsConParent>
        <DatesCon>
          <DeliveryTimeCoon>
            <LabelStyled htmlFor="date">Delivery Date</LabelStyled>
            <DeliveryDateInput
              type="date"
              id="date"
              placeholder=" Date of Delivery"
              {...register("dateOfDelivery")}
            />
            {errors.dateOfDelivery ? (
              <ErorSpan>
                {errors?.dateOfDelivery?.message as ReactNode}
              </ErorSpan>
            ) : null}
          </DeliveryTimeCoon>
          <DeliveryTimeCoon>
            <LabelStyled htmlFor="time">Delivery Time</LabelStyled>
            <DeliveryTimeInput
              type="time"
              id="time"
              placeholder="Delivery Time"
              {...register("deliveryTime")}
            />
            {errors.deliveryTime ? (
              <ErorSpan>{errors?.deliveryTime?.message as ReactNode}</ErorSpan>
            ) : null}
          </DeliveryTimeCoon>
        </DatesCon>
        <AdressCon>
          <CityCon>
            <LabelStyled htmlFor="city">City</LabelStyled>
            <CityInput
              type="text"
              id="city"
              placeholder="city"
              {...register("city")}
            />
            {errors.city ? (
              <ErorSpan>{errors?.city?.message as ReactNode}</ErorSpan>
            ) : null}
          </CityCon>
          <StreetCon>
            <LabelStyled htmlFor="street"> Street Name</LabelStyled>
            <StreetNameInput
              type="text"
              placeholder="Street Name"
              id="street"
              {...register("street")}
            />
            {errors.street ? (
              <ErorSpan>{errors?.street?.message as ReactNode}</ErorSpan>
            ) : null}
          </StreetCon>
          <HouseNumberCon>
            <LabelStyled htmlFor="house">House Number</LabelStyled>
            <HouseNumberInput
              type="text"
              placeholder="House Number"
              id="house"
              {...register("houseNumber")}
            />
            {errors.houseNumber ? (
              <ErorSpan>{errors?.houseNumber?.message as ReactNode}</ErorSpan>
            ) : null}
          </HouseNumberCon>
        </AdressCon>
      </InputsConParent>
    </Parent>
  );
}

const ErorSpan = styled.span`
  color: red;
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  right: 3rem;
  top: 4rem;
  @media (min-width: 768px) {
    top: 5rem;
    font-size: 16px;
    right: 3rem;
  }
`;
const CityCon = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  @media (min-width: 768px) {
    width: 100%;
    gap: 1.2rem;
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
const DeliveryDateInput = styled.input`
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
const DeliveryTimeInput = styled.input`
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
const CityInput = styled.input`
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
const StreetNameInput = styled.input`
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
const HouseNumberInput = styled.input`
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
const HouseNumberCon = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  @media (min-width: 768px) {
    width: 100%;
    gap: 1.2rem;
  }
`;
const StreetCon = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  @media (min-width: 768px) {
    width: 100%;
    gap: 1.2rem;
  }
`;
const AdressCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const DeliveryTimeCoon = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  @media (min-width: 768px) {
    width: 50%;
    gap: 1.2rem;
  }
`;
// const DeliveryDateCon = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;
//   @media (min-width: 768px) {
//     width: 50%;
//     gap: 1.2rem;
//   }
// `;
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
  @media (min-width: 768px) {
  }
`;
