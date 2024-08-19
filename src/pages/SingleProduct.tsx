import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import styled from "styled-components";
import Quantity from "../components/Quantity";
import YouMayAlsoLike from "../components/YouMayAlsoLike";

export default function SingleProduct() {
  const { singleProduct } = useParams();
  async function fetchSingleProduct() {
    const response = await fetch("");
    const data = await response.json();
    console.log(data);
  }
  const dataToMap = data.datas[1].flowers?.filter(
    (item) => item.name === singleProduct
  );
  console.log(dataToMap);
  return (
    <Parent>
      <div>
        {dataToMap?.map((item) => {
          return (
            <div>
              <ImageCon>
                <Image src={item.src} alt="" />
              </ImageCon>
              <span>{item.category.name}/</span>
              <span>{item.name}</span>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{item.description}</p>
              <p>Quantity</p>
              <Quantity />
            </div>
          );
        })}
      </div>
      <YouMayAlsoLike />
    </Parent>
  );
}

const Image = styled.img`
  width: 100%;
  height: 36rem;
`;
const ImageCon = styled.div`
  width: 100%;
  height: 36rem;
  border-bottom: 1px solid #121212;
  @media (min-width: 768px) {
    height: 46rem;
  }
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
`;
