import Reacte from "react";
import styled from "styled-components";
import { useEffect } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

export default function AllCategory() {
  useEffect(() => {
    fetch("http://localhost:3000/datas")
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(data.datas[0]);

  return (
    <>
      <Categories>
        {data.datas[0].categories.map((item, index) =>
          index % 2 == 0 ? (
            <Category key={index}>
              <TitleCategory>
                <span>{item.name}</span>
                <div>
                  <p>Shop now</p>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.64 6 14.18 7.504 17.5 11h-14v2h14l-3.298 3.503L15.667 18l5.833-6.014L15.64 6z"
                      fill="#000"
                    />
                  </svg>
                </div>
              </TitleCategory>
              <ImageCategory>
                <img src={item.image} alt="" />
              </ImageCategory>
            </Category>
          ) : (
            <Category key={index}>
              <ImageCategory>
                <img src={item.image} alt="" />
              </ImageCategory>
              <TitleCategory>
                <span>{item.name}</span>
                <div>
                  <p>Shop now</p>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 11v2H7l3.641 3.5L9.113 18 3 12l6.113-6 1.528 1.5L7 11h14z"
                      fill="#000"
                    />
                  </svg>
                </div>
              </TitleCategory>
            </Category>
          )
        )}
      </Categories>
    </>
  );
}

const Categories = styled.div`
  display: grid;
  overflow-y: auto;
  border: solid 1px #121212;
  &::-webkit-scrollbar {
    display: none;
  }
  & > div {
    height: 100%;
  }
`;
// const Choose=styled.h1`
//     text-align: center;
//     padding: 100.7px 43px;
//     color: #121212;
//     margin-top: 0;
//     font-weight: 600;
//     letter-spacing: 1.2px;
//     font-size: 40px;
//     border: solid 1px #121212;
//     @media (min-width: 768px) {
//         font-size: 67px;
//    }
// `

const Category = styled.div`
  display: flex;
  height: 200px;
`;
const TitleCategory = styled.p`
  border: solid 1px #121212;
  width: 50%;

  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25% 0 10px 0;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    & > span {
      font-size: 26px;
    }
    & > p {
      font-size: 14px;
      margin-right: 10px;
      cursor: pointer;
    }
  }
`;
const ImageCategory = styled.div`
  border: solid 1px #121212;
  width: 50%;
  font-size: 30px;
  & > img {
    width: 100%;
    height: 100%;
  }
`;
