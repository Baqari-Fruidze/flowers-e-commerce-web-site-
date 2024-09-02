import { useCallback, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { boolean } from "yup";

export default function Restore() {
  const [first, setFirst] = useState<boolean>(false);
  const [second, setSecond] = useState<boolean>(false);
  const [third, setThird] = useState<boolean>(true);
  const [username, setUsarname] = useState<string>("");
  const [recoverPassword, setRecoverPassword] = useState<string>("");
  const [recoverCode, setRecoverCode] = useState<string>("");
  const navigate = useNavigate();
  async function userCheck() {
    console.log(username);
    const res = await fetch("http://134.122.71.97:8000/auth/recover", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username }),
    });

    if (res.ok) {
      setFirst(true);
      setThird(false);
    }
  }
  async function recoveryPassword() {
    const res = await fetch("http://134.122.71.97:8000/auth/recover", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recovery_code: recoverCode }),
    });
    if (res.ok) {
      setFirst(false);
      setSecond(true);
    }
  }
  async function changePassword() {
    const res = await fetch("http://134.122.71.97:8000/auth/recover", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recovery_code: recoverCode }),
    });
    if (res.ok) {
      setFirst(false);
      setSecond(true);
    }
  }

  return (
    <Parent>
      <InsideCon>
        {third ? (
          <SingleCon>
            <Label htmlFor="username">please Enter Username</Label>
            <Input
              type="text"
              placeholder="username"
              id="username"
              onChange={(e) => setUsarname(e.target.value)}
              value={username}
              // onKeyDown={(e) => {
              //   if (e.key === "Enter" && username.length > 0) {
              //     userCheck();
              //   }
              // }}
            />
            <Btn
              onClick={() => {
                if (username.length > 0) {
                  userCheck();
                }
              }}
            >
              Send
            </Btn>
          </SingleCon>
        ) : null}
        {first ? (
          <SingleCon>
            <Label htmlFor="recover">Enter Recovery Code</Label>
            <RecoverInput
              type="text"
              id="recover"
              placeholder="6 chars"
              value={recoverCode}
              onChange={(e) => setRecoverCode(e.target.value)}
              // onKeyDown={(e) => {
              //   if (e.key === "Enter" && recoverCode.length === 6) {
              //     recoveryPassword();
              //   }
              // }}
            />
            <Btn
              onClick={() => {
                if (recoverCode.length === 6) {
                  recoveryPassword();
                }
              }}
            >
              Send
            </Btn>
          </SingleCon>
        ) : null}
        {second ? (
          <SingleCon>
            <Label htmlFor="password">Enter New Password</Label>
            <RecoverInput
              type="text"
              id="password"
              placeholder="Password"
              value={recoverPassword}
              onChange={(e) => setRecoverPassword(e.target.value)}
            />
            <Btn
              onClick={() => {
                if (recoverPassword.length > 3) {
                }
              }}
            >
              Send
            </Btn>
          </SingleCon>
        ) : null}

        <p>(your recovery code has been sent to your email)</p>
      </InsideCon>
    </Parent>
  );
}

const RecoverInput = styled.input`
  width: 100%;
  padding: 1.5rem 0 1.5rem 2.5rem;
  border: none;
  font-size: 22px;
  border-bottom: 1px solid #121212;
  &::placeholder {
    font-size: 22px;
    color: grey;
    padding-left: 1rem;
  }
`;
const SingleCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const Btn = styled.button`
  padding: 1.5rem;
  font-size: 16px;
  color: #fff;
  background-color: #121212;
  border: none;
  border-radius: 8px;
  margin-top: 1.6rem;
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
    padding-left: 1rem;
  }
`;
const Label = styled.label`
  color: var(--Black, #121212);
  text-align: left;
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
  gap: 2.4rem;
  max-width: 38rem;
`;
const Parent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 2.4rem;
`;
