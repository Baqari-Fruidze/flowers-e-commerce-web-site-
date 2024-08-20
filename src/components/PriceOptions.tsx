import React from "react";
import styled from "styled-components";

export default function PriceOptions() {
  return (
    <Parent>
      <TextsCon>
        <StyledP>Price options</StyledP>
        <CircleCon>
          <Circle></Circle>
          <p></p>
        </CircleCon>
        <CircleCon>
          <div></div>
          <p></p>
        </CircleCon>
      </TextsCon>
      <button></button>
    </Parent>
  );
}
const Circle = styled.div`
  border-radius: 50%;
  width: 2.4rem;
  height: 2.4rem;
  /* background: #121212; */
  border: 1px solid #121212;
  margin: 0.5rem;
`;
const CircleCon = styled.div`
  display: flex;
  gap: 1.2rem;
`;
const StyledP = styled.p`
  color: var(--Black, #121212);
  font-family: Gilroy;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;
const TextsCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
