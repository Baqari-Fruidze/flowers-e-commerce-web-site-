import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";

export default function SingleCategory() {
  const navigate = useNavigate();
  const { singleCategory } = useParams();
  const { category, singleCategoryState, setSingleCategoryState } =
    useContext(Context);
  const CategoryId = category.find((item) => item.name === singleCategory)?.id;
  useEffect(() => {
    async function fetchSingleCategories(id: number | undefined) {
      const response = await fetch(
        `http://134.122.71.97:8000/api/product?category=${id}`
      );
      if (response.ok) {
        const data = await response.json();
        setSingleCategoryState(data);
      }
    }
    fetchSingleCategories(CategoryId);
  }, []);

  return (
    <Parent>
      <BackGroundImageCon backImage={singleCategoryState[0]?.category.image}>
        <ImageCategoryNameSpan>{singleCategory}</ImageCategoryNameSpan>
      </BackGroundImageCon>
      <GridedCon>
        {singleCategoryState.map((item, index) => {
          return (
            <ProductsCon key={index}>
              <ImageCon
                backImg={item.image}
                onClick={() => navigate(`/${item.category.name}/${item.id}`)}
              ></ImageCon>
              <TextCon>
                <ItemNameSpan
                  onClick={() => navigate(`/${item.category.name}/${item.id}`)}
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
  overflow-y: auto;
  height: 100vh;
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
  background-size: 100% 100%;
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
    height: fit-content;
  }
  @media (min-width: 1440px) {
    width: 100%;
    border: 1px solid #121212;
    /* height: fit-content; */
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
    height: 100vh;
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
