import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function SingleCategory() {
  const navigate = useNavigate();
  const { singleCategory } = useParams();
  async function fetchSingleCategories() {
    const response = await fetch("");
    const data = await response.json();
    console.log(data);
  }

  const dataToMap = data.datas[1].flowers?.filter(
    (item) => item.category.name === singleCategory
  );
  // const categoryName = dataToMap?.find((item) => item.category.name)?.category
  //   .name;
  let backgroundImage;
  if (dataToMap) {
    backgroundImage = dataToMap[0]?.category.bg_picture;
  }

  return (
    <Parent>
      <BackGroundImageCon backImage={backgroundImage}>
        <ImageCategoryNameSpan>{singleCategory}</ImageCategoryNameSpan>
      </BackGroundImageCon>
      {dataToMap?.map((item, index) => {
        return (
          <>
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
  background-size: auto 100%;
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
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
`;
