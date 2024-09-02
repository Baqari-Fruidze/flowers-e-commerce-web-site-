import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import searchIcon from "/assets/icon-search.svg";

export default function LargeHeader() {
  return (
    <Parent>
      <HomeCon>
        <Link to={"/"}>
          <AnimDiv>
            <p className="anim">Home</p>
          </AnimDiv>
        </Link>
      </HomeCon>
      <InputCon>
        <input type="text" placeholder="what are you loocking for ?" />
      </InputCon>
      <SignInCon>
        <Link to={"login"}>
          <AnimDiv>
            <p className="anim">Sign In</p>
          </AnimDiv>
        </Link>
      </SignInCon>
    </Parent>
  );
}

const Parent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #f5f5f7;
  border: 1px solid #121212;
  & a {
    color: #121212;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    @media (min-width: 1440px) {
      font-size: 22px;
    }
  }
`;
const HomeCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1/2;
`;
const InputCon = styled.div`
  border-right: 1px solid #121212;
  border-left: 1px solid #121212;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  & > input {
    font-weight: 500;
    padding-left: 20%;
    font-size: 18px;
    height: 4rem;
    width: 100%;
    outline: none;
    border: none;
    background-color: #f5f5f7;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: left 7% top 0.5rem;
    @media (min-width: 1440px) {
      font-size: 22px;
    }
    &::placeholder {
      color: #121212;
      font-size: 17px;
      opacity: 0.5;
      @media (min-width: 1440px) {
        font-size: 22px;
      }
    }
  }
`;
const SignInCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

//Animation start
const spinWordsUp = keyframes`
  20% {
    transform: translateY(0%);
  }
  0% {
    transform: translateY(150%);
  }
`;
const spinWords = keyframes`
  20% {
    transform: translateY(0%);
  }
  0% {
    transform: translateY(-150%);
  }
`;

const AnimDiv = styled.div`
  overflow-y: hidden;
  cursor: pointer;
  & > .anim {
    cursor: pointer;
    animation: ${spinWords} 2s normal;
    font-size: 16px;
    color: #121212;
    opacity: 1;
  }

  &:hover > :last-child {
    animation: ${spinWordsUp} 2s normal;
    opacity: 0.5;
  }
`;
//Animation end
