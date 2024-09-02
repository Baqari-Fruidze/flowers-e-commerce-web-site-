import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";

export default function Restore() {
  const { recoverUsername, setRecoverUsername } = useContext(Context);
  const navigate = useNavigate();

  return (
    <Parent>
      <InsideCon>
        <Label htmlFor="username">please Enter Username</Label>
        <Input
          type="text"
          placeholder="username"
          id="username"
          onChange={(e) => setRecoverUsername(e.target.value)}
          value={recoverUsername}
        />
        <p>(your recovery code has been sent to your email)</p>
        <Btn onClick={() => navigate("/login")}>Recover</Btn>
      </InsideCon>
    </Parent>
  );
}

const Btn = styled.button`
  padding: 1.5rem;
  font-size: 16px;
  color: #fff;
  background-color: #121212;
  border: none;
  border-radius: 8px;
`;
const Input = styled.input`
  width: 100%;
  padding: 1.5rem 0 1.5rem 2.5rem;
  border: none;
  font-size: 22px;
  border-bottom: 1px solid #121212;
  &::placeholder {
    font-size: 22px;
    color: grey;
    padding-left: 2rem;
  }
`;
const Label = styled.label`
  color: var(--Black, #121212);
  text-align: center;
  font-family: "BIZ UDGothic";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: red;
`;
const InsideCon = styled.div`
  width: 100%;
  padding: 2.4rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
  max-width: 38rem;
`;
const Parent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 2.4rem;
`;
