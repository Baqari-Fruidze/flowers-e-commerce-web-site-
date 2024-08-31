import styled from "styled-components";
import floverVideoBg from "/image/loginBg.jpg";
import { useContext } from "react";
import { Context } from "../../App";

export default function MyLikes() {
  const { setIsMyProfile, isAcount, setIsAcount } = useContext(Context);
  return (
    <>
      {isAcount ? (
        <LikesCont>
          <p>likes</p>

          <TitleIconBack>
            <h2
              onClick={() => {
                setIsMyProfile(true), setIsAcount(false);
              }}
            >
              back
            </h2>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 16.3613H3.16667C2.72464 16.3613 2.30072 16.1857 1.98816 15.8732C1.67559 15.5606 1.5 15.1367 1.5 14.6947V3.02799C1.5 2.58597 1.67559 2.16204 1.98816 1.84948C2.30072 1.53692 2.72464 1.36133 3.16667 1.36133H6.5"
                stroke="currentColor"
                stroke-width="1.71591"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12.334 13.0296L16.5007 8.86296L12.334 4.69629"
                stroke="currentColor"
                stroke-width="1.71591"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M16.5 8.8623H6.5"
                stroke="currentColor"
                stroke-width="1.71591"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </TitleIconBack>
        </LikesCont>
      ) : null}
    </>
  );
}
const LikesCont = styled.div`
  background-image: url(${floverVideoBg});
`;
const TitleIconBack = styled.div<{ isMyProfile?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: end;
  & > h2 {
    font-size: 30px;
    color: #736d6d;
    text-shadow: 1px 2px #121212;
  }
  :hover {
    color: #3ab561;
  }
`;
