import React from "react";
import data from "../data.json";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Carusel() {
  return (
    <Parent>
      <Title>Excellent Combination with:</Title>
      <CaruselCon>
        <Splide
          options={{
            width: 300,
            type: "loop",
            autoplay: false,
            rewind: true,
            pagination: false,
            arrows: false,
            gap: "3rem",
            intervall: 1000,
          }}
        >
          {data.datas[7].carusel?.map((item) => {
            return (
              <SplideSlide>
                <SingleItemCon>
                  <Image src={item.src} alt="" />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <NameP>{item.name}</NameP>
                    <PriceP>${item.price}</PriceP>
                  </div>
                </SingleItemCon>
              </SplideSlide>
            );
          })}
        </Splide>
      </CaruselCon>
    </Parent>
  );
}
const PriceP = styled.p`
  text-align: center;
  color: var(--Gray, #808080);
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;
const NameP = styled.p`
  text-align: center;
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
  .splide__slide is-next {
    list-style-type: none;
  }
`;
const CaruselCon = styled.div`
  display: flex;
  overflow-x: hidden;
  width: 3orem;
  & .splide__list {
    display: flex;
  }
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
