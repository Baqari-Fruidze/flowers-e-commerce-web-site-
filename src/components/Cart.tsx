import React from "react";
import styled from "styled-components";

export default function Cart() {
  return (
    <Cover>
      <Parent>
        <h1>test</h1>
      </Parent>
    </Cover>
  );
}

const Parent = styled.div`
  background-color: #fff;
`;
const Cover = styled.div`
  z-index: 89;
  top: 0;
  position: fixed;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;
