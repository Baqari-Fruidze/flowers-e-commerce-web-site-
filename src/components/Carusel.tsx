import React from "react";
import data from "../data.json";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

export default function Carusel() {
  return (
    <Parent>
      <Title>Excellent Combination with:</Title>
      <CaruselCon>
        <Splide
          options={{
            width: 300,
            type: "loop",
            autoplay: true,
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
                  <Link
                    style={{ textDecorationLine: "none" }}
                    to={`/${item.category.name}/${item.name}`}
                  >
                    <Image src={item.src} alt="" />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <NameP>{item.name}</NameP>
                      <PriceP>${item.price}</PriceP>
                    </div>
                  </Link>
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
  align-self: center;
  width: 20.8rem;
  height: 162px;
  @media (min-width: 768px) {
    width: 13rem;
    height: 12rem;
  }
`;
const SingleItemCon = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 30rem;
  border: 1px solid #121212;
`;
const CaruselCon = styled.div`
  display: flex;
  overflow-x: hidden;
  & .splide__list {
    display: flex;
    list-style-type: none;
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
  @media (min-width: 1200px) {
    height: 199px;
  }
`;
