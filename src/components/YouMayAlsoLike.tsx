import React from "react";
import styled from "styled-components";

export default function YouMayAlsoLike() {
  return (
    <Parent>
      <Hone>You may also like…</Hone>
      <div></div>
    </Parent>
  );
}

const GridedCon = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
const Hone = styled.h1`
  color: var(--Black, #121212);
  font-family: Gilroy;
  font-size: 38px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
`;
