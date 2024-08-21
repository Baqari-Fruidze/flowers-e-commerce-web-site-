import React from "react";
import data from "../data.json";
import styled from "styled-components";
import Splide from "@splidejs/splide";

export default function Carusel() {
  return (
    <Parent>
      <Title>Excellent Combination with:</Title>
      <CaruselCon>
        {data.datas[7].carusel?.map((item) => {
          return (
            <SingleItemCon>
              <Image src={item.src} alt="" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
            </SingleItemCon>
          );
        })}
      </CaruselCon>
    </Parent>
  );
}
const NameP = styled.p`
  color: var(--Black, #121212);
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;
const Image = styled.img`
  width: 20.8rem;
  height: 162px;
`;
const SingleItemCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const CaruselCon = styled.div`
  display: flex;
`;
const Title = styled.h1`
  color: var(--Black, #121212);
  font-family: Gilroy;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
