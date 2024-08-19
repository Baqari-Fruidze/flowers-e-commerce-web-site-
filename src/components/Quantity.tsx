import React from "react";
import styled from "styled-components";

export default function Quantity() {
  return (
    <Parent>
      <Minus>-</Minus>
      <NumCon>1</NumCon>
      <Plus>+</Plus>
    </Parent>
  );
}
const NumCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid #121212;
`;
const Plus = styled.div`
  width: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #121212;
`;
const Minus = styled.div`
  width: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #121212;
`;
const Parent = styled.div`
  height: 4.8rem;
  display: flex;
  width: 100%;
  align-items: center;
`;
