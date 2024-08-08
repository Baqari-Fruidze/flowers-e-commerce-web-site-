import React from "react";
import styled, { keyframes } from "styled-components";

export default function Test() {
  return (
      <AnimDiv>
        <span className="anim">one</span>
      </AnimDiv>
  );
}

const spinWordsUp = keyframes`
  20% {
    transform: translateY(0%);
  }
  0% {
    transform: translateY(100%);
  }
`;

const spinWords = keyframes`
  20% {
    transform: translateY(0%);
  }
  0% {
    transform: translateY(-100%);
  }
`;

const AnimDiv = styled.div`
 
overflow-y: hidden;
  cursor: pointer;
  & > .anim {
    display: block;
    font-size: 30px;
    padding-left: 10px;
    color: red;
  }
  :last-child {
    animation: ${spinWords} 0.7s normal;
    opacity: 1;
  }
 
  &:hover > :last-child {
    animation: ${spinWordsUp} 0.7s normal;
    opacity: 0.5;
  }

`;

