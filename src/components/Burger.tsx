import React from "react";
import data from "../data.json";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Burger() {
  return (
    <BlackBackground>
      <Parent>
        {data.map((item) =>
          item.categories?.map((el, index) => {
            return (
              <Link to={`/${el.name}`} key={index}>
                {el.name}
              </Link>
            );
          })
        )}
      </Parent>
    </BlackBackground>
  );
}

const BlackBackground = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  min-height: 100vh;
  top: 5.5rem;
  z-index: 10;
`;

const Parent = styled.div`
  height: 27.3rem !important;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.4rem;
  height: fit-content;
  transition: width 2s, height 100s;
  background-color: #fff;
  & a {
    color: #121212;
    font-size: 25px;
    font-weight: 500;
    text-decoration: none;
    transition: width 2s;
    &:hover {
      opacity: 0.5;
      cursor: pointer;
      font-size: 35px;
    }
  }
`;
