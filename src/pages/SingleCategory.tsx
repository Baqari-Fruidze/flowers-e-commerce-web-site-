import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import styled from "styled-components";

export default function SingleCategory() {
  const { singleCategory } = useParams();

  const dataToMap = data.datas[1].flowers?.filter(
    (item) => item.category.name === singleCategory
  );
  const categoryName = dataToMap?.find((item) => item.category.name)?.category
    .name;
  const backgroundImage = dataToMap?.find((item) => item.category.bg_picture)
    ?.category.bg_picture;

  return (
    <Parent>
      <BackGroundImageCon backImage={backgroundImage}>
        <ImageCategoryNameSpan>{categoryName}</ImageCategoryNameSpan>
      </BackGroundImageCon>
      {dataToMap?.map((item, index) => {
        return (
          <>
            <ProductsCon key={index}>
              <ImageCon backImg={item.src}></ImageCon>
              <TextCon>
                <ItemNameSpan>{item.name}</ItemNameSpan>
                <PriceSpan> price ${item.price}</PriceSpan>
              </TextCon>
            </ProductsCon>
          </>
        );
      })}
    </Parent>
  );
}
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
  gap: 2px;
`;
const ImageCon = styled.div<{ backImg: string }>`
  height: 33rem;
  background-image: url(${(props) => props.backImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const ProductsCon = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-row-gap: 2rem;
  border-bottom: 1px solid #121212;
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
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
`;
