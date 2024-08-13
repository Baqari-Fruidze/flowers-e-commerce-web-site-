import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

export default function SingleCategory() {
  const { singleCategory } = useParams();

  const dataToMap = data.datas[1].flowers?.filter(
    (item) => item.category.name === singleCategory
  );
  console.log(dataToMap);

  return <div></div>;
}
