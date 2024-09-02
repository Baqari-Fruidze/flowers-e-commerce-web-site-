import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Purchase() {
  const navigate = useNavigate();
  return (
    <Cover>
      <Parent>
        <Hone>Thank you for your purchase</Hone>
        <Para>our currier will contact you shortly</Para>
        <Btn onClick={() => navigate("/")}>Go To Home</Btn>
      </Parent>
    </Cover>
  );
}
const Btn = styled.button`
  padding: 1.5rem;
  color: #fff;
  background-color: #121212;
  border-radius: 8px;
  border: none;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
`;
const Para = styled.p`
  text-align: center;
  font-size: 28px;
  color: #121212;
  font-weight: 500;
  opacity: 0.8;
`;
const Hone = styled.h1`
  text-align: center;
  font-size: 32px;
  color: #121212;
  font-weight: 500;
`;
const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  z-index: 89;
  top: 0;
  position: fixed;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;
const Parent = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 5.4rem 2.4rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  @media (min-width: 768px) {
    width: 50rem;
  }
`;
