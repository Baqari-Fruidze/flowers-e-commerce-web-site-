import React from "react";
import styled from "styled-components";

export default function Quantity() {
  return (
    <Parent>
      <QuantitySpan>Quantity</QuantitySpan>
      <Signs>
        <Minus>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="2"
            viewBox="0 0 20 2"
            fill="none"
          >
            <path d="M19.5 1.5H0.5V0.5H19.5V1.5Z" fill="#121212" />
          </svg>
        </Minus>
        <NumCon>
          <NumSpan>1</NumSpan>
        </NumCon>
        <Plus>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M19.5 10.5H0.5V9.5H19.5V10.5Z" fill="#121212" />
            <path d="M10.5 0.5V19.5H9.5V0.5H10.5Z" fill="#121212" />
          </svg>
        </Plus>
      </Signs>
    </Parent>
  );
}
const NumSpan = styled.span`
  color: var(--Black, #121212);

  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
const QuantitySpan = styled.span`
  color: var(--Black, #121212);
  font-family: Gilroy;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 1px;
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const NumCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid #121212;
  height: 4.8rem;
`;
const Plus = styled.div`
  width: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #121212;
  height: 4.8rem;
`;
const Minus = styled.div`
  width: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #121212;
  height: 4.8rem;
`;
const Signs = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
