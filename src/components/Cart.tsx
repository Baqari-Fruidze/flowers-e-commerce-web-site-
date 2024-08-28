import styled from "styled-components";

export default function Cart() {
  // const cartrequest = () => {
  //   const res = await fetch("http://134.122.71.97:8000/api/cart");
  // };
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
  max-width: 30rem;
`;
const Cover = styled.div`
  top: 0;
  position: fixed;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;
