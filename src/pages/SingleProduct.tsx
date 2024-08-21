import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import styled from "styled-components";
import Quantity from "../components/Quantity";
import YouMayAlsoLike from "../components/YouMayAlsoLike";
import Carusel from "../components/Carusel";
import PriceOptions from "../components/PriceOptions";
import { Context } from "../App";
import Subscribe from "./Subscribe";

export default function SingleProduct() {
  const { subscribe } = useContext(Context);
  const { singleProduct } = useParams();
  async function fetchSingleProduct() {
    const response = await fetch("");
    const data = await response.json();
  }
  const dataToMap = data.datas[1].flowers?.filter(
    (item) => item.name === singleProduct
  );

  return (
    <Parent>
      {dataToMap?.map((item) => {
        return (
          <SingleProductCon>
            <ImageCon>
              <Image src={item.src} alt="" />
            </ImageCon>
            <TextSCon>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ItemCategoryName>{item.category.name} / </ItemCategoryName>
                <ItemByeType>{item.name}</ItemByeType>
              </div>
              <div style={{ display: "flex" }}>
                <NameAndPriceP>{item.name}</NameAndPriceP>
                <NameAndPriceP>-${item.price}</NameAndPriceP>
              </div>
              <DescriptionP>{item.description}</DescriptionP>
              <Quantity />
              <Carusel />
              <PriceOptions price={item.price} />
            </TextSCon>
          </SingleProductCon>
        );
      })}

      <YouMayAlsoLike />
    </Parent>
  );
}

const DescriptionP = styled.p`
  color: var(--black-brightness-90, rgba(18, 18, 18, 0.9));
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;
const NameAndPriceP = styled.p`
  color: var(--Black, #121212);

  font-family: Gilroy;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  @media (min-width: 1200px) {
    font-size: 28px;
  }
`;
const ItemByeType = styled.div`
  color: var(--Black, #121212);
  font-family: Gilroy;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  text-transform: uppercase;
  opacity: 0.5;
  letter-spacing: 1px;
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;
const ItemCategoryName = styled.div`
  letter-spacing: 1px;
  color: var(--Black, #121212);
  font-family: Gilroy;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  text-transform: uppercase;
  @media (min-width: 1200px) {
    font-size: 15px;
  }
`;
const TextSCon = styled.div`
  padding: 2.4rem 2.4rem 4.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  @media (min-width: 1200px) {
    padding: 4rem;
    gap: 3.2rem;
  }
`;
const SingleProductCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 36rem;
  @media (min-width: 768px) {
    height: 46rem;
  }
  @media (min-width: 1200px) {
    min-height: 100vh;
  }
`;
const ImageCon = styled.div`
  width: 100%;
  height: 36rem;
  border-bottom: 1px solid #121212;
  @media (min-width: 768px) {
    height: 46rem;
  }
  @media (min-width: 1200px) {
    min-height: 100vh;
  }
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
`;
