import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";

export default function SingleCategory() {
  const navigate = useNavigate();
  const { singleCategory } = useParams();
  const { setCategory, category } = useContext(Context);
  useEffect(() => {
    async function fetchSingleCategories() {
      const response = await fetch("");
      const data = await response.json();
      console.log(data);
    }
  });

  const dataToMap = data.datas[1].flowers?.filter(
    (item) => item.category.name === singleCategory
  );
  // const categoryName = dataToMap?.find((item) => item.category.name)?.category
  //   .name;
  let backgroundImage;
  if (dataToMap) {
    backgroundImage = dataToMap[0]?.category.bg_picture;
  }
  console.log(category);
  return (
    <Parent>
      <BackGroundImageCon backImage={backgroundImage}>
        <ImageCategoryNameSpan>{singleCategory}</ImageCategoryNameSpan>
      </BackGroundImageCon>
      <GridedCon>
        {dataToMap?.map((item, index) => {
          return (
            <ProductsCon key={index}>
              <ImageCon
                backImg={item.src}
                onClick={() => navigate(`/${item.category.name}/${item.name}`)}
              ></ImageCon>
              <TextCon>
                <ItemNameSpan
                  onClick={() =>
                    navigate(`/${item.category.name}/${item.name}`)
                  }
                >
                  {item.name}
                </ItemNameSpan>
                <PriceSpan> price ${item.price}</PriceSpan>
              </TextCon>
            </ProductsCon>
          );
        })}
      </GridedCon>
    </Parent>
  );
}
const GridedCon = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1440px) {
    width: 50%;
  }
`;
const ItemNameSpan = styled.span`
  color: var(--Black, #121212);
  text-align: center;
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;
const PriceSpan = styled.span`
  color: var(--Gray, #808080);
  text-align: center;
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;
const TextCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const ImageCon = styled.div<{ backImg: string }>`
  height: 33rem;
  background-image: url(${(props) => props.backImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-size: auto 100%;
`;

const ProductsCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #121212;

  @media (min-width: 768px) {
    width: 100%;
    border: 1px solid #121212;
  }
  @media (min-width: 1440px) {
    width: 100%;
    border: 1px solid #121212;
    height: fit-content;
  }
`;
const ImageCategoryNameSpan = styled.h1`
  font-weight: 600;
  font-size: 38px;
  letter-spacing: 1px;
  color: #fff;
`;
const BackGroundImageCon = styled.div<{ backImage: string | undefined }>`
  height: 40rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.backImage});
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (min-width: 768px) {
    height: 56rem;
  }
  @media (min-width: 1440px) {
    width: 50%;
    /* height: 83.6rem; */
    min-height: 100vh;
  }
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(211, 211, 211, 0.1);
  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;
