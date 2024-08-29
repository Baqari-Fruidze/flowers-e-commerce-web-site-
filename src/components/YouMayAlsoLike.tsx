import React from "react";
import styled from "styled-components";
import data from "../data.json";

export default function YouMayAlsoLike() {
  return (
    <Parent>
      <Hone>You may also like…</Hone>
      <GridedCon>
        {data.datas[5]["you may also like"]?.map((item, index) => {
          return (
            <ImageAndTextCon key={index}>
              <Image src={item.src} alt="" />
              <TextCon>
                <NameP>{item.name}</NameP>
                <PriceP> price ${item.price}</PriceP>
              </TextCon>
            </ImageAndTextCon>
          );
        })}
      </GridedCon>
    </Parent>
  );
}
const PriceP = styled.p`
  color: var(--Gray, #808080);
  text-align: center;
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;
const NameP = styled.p`
  color: var(--Black, #121212);
  text-align: center;
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;
const TextCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;
const ImageAndTextCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  border-bottom: 1px solid #121212;
  padding-bottom: 1.6rem;
  @media (min-width: 768px) {
    border-right: 1px solid #121212;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 36rem;
`;
const GridedCon = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: rgba(211, 211, 211, 0.1);
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
const Hone = styled.h1`
  color: var(--Black, #121212);
  font-family: Gilroy;
  font-size: 38px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  text-align: center;
  padding: 3rem 0;
  border-top: 1px solid #121212;
  border-bottom: 1px solid #121212;
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
`;
