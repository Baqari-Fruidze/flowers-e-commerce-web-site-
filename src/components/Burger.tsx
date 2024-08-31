import { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../App";

export default function Burger() {
  const { setTockenChecker, tokenChecker, categories } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    const tokenCheckerr = async () => {
      let token = localStorage.getItem("token");
      if (token) {
        token = JSON.parse(token);
        const res = await fetch("http://134.122.71.97:8000/auth/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer  ${token.access}`,
          },
        });
        if (res.ok) {
          setTockenChecker(true);
        }
      }
    };
    tokenCheckerr();
    console.log("burger useefect");
  }, []);

  return (
    <BlackBackground>
      <Cover>
        <Parent>
          {categories.map((item, index) => {
            return (
              <Link to={`/${item.name}`} key={index}>
                {item.name}
              </Link>
            );
          })}
        </Parent>
        <TexstCon>
          <ForgotAndRestoreCon>
            <ForgotPassworsSpan>Have Acount ?</ForgotPassworsSpan>
            {!tokenChecker ? (
              <RestorePasswordSpan onClick={() => navigate("/login")}>
                Sign In
              </RestorePasswordSpan>
            ) : (
              <RestorePasswordSpan>profile</RestorePasswordSpan>
            )}
          </ForgotAndRestoreCon>
          <DonotHaveAcountCon>
            <DonotHaveAcountP>Do not have an account?</DonotHaveAcountP>
            <SignUpSpan onClick={() => navigate("/signUp")}>Sign up</SignUpSpan>
          </DonotHaveAcountCon>
        </TexstCon>
      </Cover>
    </BlackBackground>
  );
}
const DonotHaveAcountCon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3%;
`;
const ForgotAndRestoreCon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3%;
`;
const SignUpSpan = styled.span`
  color: red;
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;
const DonotHaveAcountP = styled.p`
  color: var(--Gray, #808080);

  font-family: Gilroy;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;
const RestorePasswordSpan = styled.span`
  text-decoration: underline;
  color: red;
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  &:hover {
    cursor: pointer;
  }
`;
const ForgotPassworsSpan = styled.span`
  color: var(--Gray, #808080);
  font-family: Gilroy;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;
const TexstCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const Cover = styled.div`
  background-color: #fff;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const BlackBackground = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  min-height: 100vh;
  top: 5.5rem;
  z-index: 11;
`;

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: width 2s, height 100s;

  & a {
    color: #121212;
    font-size: 25px;
    font-weight: 500;
    text-decoration: none;
    transition: width 2s;
    &:hover {
      opacity: 0.5;
      cursor: pointer;
      font-size: 35px;
    }
  }
`;
