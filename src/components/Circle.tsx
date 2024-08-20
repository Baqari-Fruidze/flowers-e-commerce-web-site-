import React from "react";
import styled from "styled-components";

export default function Circle({
  subscribe,
  setSubscribe,
}: {
  subscribe: boolean;
  setSubscribe: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Circlee onClick={() => setSubscribe((prev) => !prev)}>
      {subscribe ? <InsideCon></InsideCon> : null}
    </Circlee>
  );
}
const InsideCon = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background: #121212;
  border-radius: 50%;
`;
const Circlee = styled.div`
  border-radius: 50%;
  width: 2.4rem;
  height: 2.4rem;
  border: 1px solid #121212;
  display: flex;
  align-items: center;
  justify-content: center;
`;
