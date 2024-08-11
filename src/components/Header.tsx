

import React, { useContext } from "react";
import styled from "styled-components";
import searchIcon from "/assets/icon-search.svg";
import { Context } from "../App";
import Burger from "./Burger";


export default function Header() {
  const { setBurgerToShow, burgerToShow } = useContext(Context);

  return (

    <Parent>
      <BurgerSvgCon>
        <svg
          width="16"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setBurgerToShow(!burgerToShow)}
        >
          <g fill="#000" fill-rule="evenodd">
            <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
          </g>
        </svg>
      </BurgerSvgCon>

      <InputCon>
        <Input type="text" placeholder="what are you loocking for ?" />
      </InputCon>
      <CartCon>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.92 20C5.38667 20 4.93333 19.825 4.56 19.475C4.18667 19.125 4 18.7 4 18.2V6.8C4 6.3 4.18667 5.875 4.56 5.525C4.93333 5.175 5.38667 5 5.92 5H8V4.75C8 3.71667 8.39111 2.83333 9.17333 2.1C9.95556 1.36667 10.8978 1 12 1C13.1022 1 14.0444 1.36667 14.8267 2.1C15.6089 2.83333 16 3.71667 16 4.75V5H18.08C18.6133 5 19.0667 5.175 19.44 5.525C19.8133 5.875 20 6.3 20 6.8V18.2C20 18.7 19.8133 19.125 19.44 19.475C19.0667 19.825 18.6133 20 18.08 20H5.92ZM5.92 18.5H18.08C18.1511 18.5 18.2222 18.4667 18.2933 18.4C18.3644 18.3333 18.4 18.2667 18.4 18.2V6.8C18.4 6.73333 18.3644 6.66667 18.2933 6.6C18.2222 6.53333 18.1511 6.5 18.08 6.5H16V8.75C16 8.96667 15.9246 9.14567 15.7739 9.287C15.6224 9.429 15.4311 9.5 15.2 9.5C14.9689 9.5 14.778 9.429 14.6272 9.287C14.4757 9.14567 14.4 8.96667 14.4 8.75V6.5H9.6V8.75C9.6 8.96667 9.52462 9.14567 9.37387 9.287C9.2224 9.429 9.03111 9.5 8.8 9.5C8.56889 9.5 8.37796 9.429 8.2272 9.287C8.07573 9.14567 8 8.96667 8 8.75V6.5H5.92C5.84889 6.5 5.77778 6.53333 5.70667 6.6C5.63556 6.66667 5.6 6.73333 5.6 6.8V18.2C5.6 18.2667 5.63556 18.3333 5.70667 18.4C5.77778 18.4667 5.84889 18.5 5.92 18.5ZM9.6 5H14.4V4.75C14.4 4.11667 14.1689 3.58333 13.7067 3.15C13.2444 2.71667 12.6756 2.5 12 2.5C11.3244 2.5 10.7556 2.71667 10.2933 3.15C9.83111 3.58333 9.6 4.11667 9.6 4.75V5Z"
            fill="#121212"
          />
        </svg>
      </CartCon>
      {burgerToShow ? <Burger /> : null}
    </Parent>
  );

}
const Parent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  border-top: 1px solid #121212;
  border-bottom: 1px solid #121212;
`;
const BurgerSvgCon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1/2;
  align-self: center;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
const InputCon = styled.div`
  grid-column: 2/6;
  width: 100%;
  height: 100%;
  border-right: 1px solid #121212;
  border-left: 1px solid #121212;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
const Input = styled.input`
  font-size: 15px;
  font-weight: 400;
  width: 100%;
  height: 3.2rem;
  outline: none;
  border: none;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: left 5% top 3px;
  padding-left: 20%;
  &::placeholder {
    color: #121212;
    font-size: 14px;
    opacity: 0.5;
  }
`;
const CartCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 6/7;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;




