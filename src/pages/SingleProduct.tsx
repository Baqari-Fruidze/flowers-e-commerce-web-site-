import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import styled from "styled-components";
import Quantity from "../components/Quantity";

export default function SingleProduct() {
  const { singleProduct } = useParams();
  const dataToMap = data.datas[1].flowers?.filter(
    (item) => item.name === singleProduct
  );
  console.log(dataToMap);
  return (
    <Parent>
      {dataToMap?.map((item) => {
        return (
          <div>
            <img src={item.src} alt="" />
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
    </Parent>
  );
}
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  & > span {
    color: red;
  }
`;
