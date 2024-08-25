import React from "react";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import SplitStringUsingRegex from "../units/SplitStringUsingRegex";
import { Link } from "react-router-dom";
import data from "../data.json"

export default function Footer() {
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const onMouseEnter = () => setIsMouseEntered(true);
  const onMouseLeave = () => setIsMouseEntered(false);
  const getTransformStyles = (isMouseEntered: boolean, index: number) => ({
    transform: `translateY(${isMouseEntered ? "-100%" : "0%"})`,
    transitionDelay: `${index * 0.02}s`,
  });

  return (
    <>
      <FooterDiv>
        <FooterBox>
          <p id="remind">
            Remember to offer beautiful flowers from Kyiv LuxeBouquets
            Valentines Day, Mothers Day, Christmas... Reminds you 7 days before.
            No spam or sharing your address
          </p>

          <div className="inpbut">
            <input type="text" placeholder="Your Email" />

            <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <span className="text-container">
                {SplitStringUsingRegex("REMIND").map((character, index) => (
                  <span className="char-container" key={index}>
                    <span style={getTransformStyles(isMouseEntered, index)}>
                      {character}
                    </span>
                    <span style={getTransformStyles(isMouseEntered, index)}>
                      {character}
                    </span>
                  </span>
                ))}
              </span>
            </button>
          </div>
        </FooterBox>

        <FooterBox>
          <span className="title">Contact Us</span>
          <div className="contactInfo">
            <p className="contactTatle">Address</p>
            <AnimDiv>
              <p className="anim">223 Chavchavadze avenue, Telavi</p>
            </AnimDiv>
          </div>
          <div className="contactInfo">
            <p className="contactTatle">Phone</p>
            <AnimDiv>
              <p className="anim">+995577054010</p>
            </AnimDiv>
          </div>
          <div className="contactInfo">
            <p className="contactTatle">General Enquiry</p>
            <AnimDiv>
              <p className="anim">sweetwater@gmail.com</p>
            </AnimDiv>
          </div>
          <span className="title">Follow Us</span>
          <div className="icons">
            <img
              style={{ cursor: "pointer" }}
              src={
                "https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/6433f820e186e144ecf86c56_Instagram.svg"
              }
              alt="instagram"
            />
            <img
              style={{ cursor: "pointer" }}
              src={
                "https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/6433f820e186e1d70bf86c58_Pinterest.svg"
              }
              alt="pinterest"
            />
            <img
              style={{ cursor: "pointer" }}
              src={
                "https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/6433f820e186e16d07f86c59_Facebook.svg"
              }
              alt="favebook"
            />
            <img
              style={{ cursor: "pointer" }}
              src={
                "https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/6433f820e186e1cb4ef86c57_Twitter.svg"
              }
              alt="twitt"
            />
            <img
              style={{ cursor: "pointer" }}
              src={
                "https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/6433f820e186e17d93f86c5a_Telegram.svg"
              }
              alt="telegram"
            />
          </div>
        </FooterBox>

        <FooterBox>
          <span className="title">Shop</span>
          <div className="shop">
            <Link id="link" to={"/all-categories-products"}>
              <AnimDiv>
                <p className="anim">All Product</p>
              </AnimDiv>
            </Link>

            
              {data.datas[0].categories?.map((item, index) => {
                return (
              <Link id="link" to={`/${item.name}`} key={index}>
                <AnimDiv>
                  <p className="anim">{item.name}</p>
                </AnimDiv>
              </Link>
                );
              })}
          </div>
          <span className="title">Service</span>
          <div className="shop">
            <Link id="link" to={"/subscriptions"}>
              <AnimDiv>
                <p className="anim">Flower Subscription</p>
              </AnimDiv>
            </Link>
            <Link id="link" to={"/"}>
              <AnimDiv>
                <p className="anim">Wedding & Event Decor</p>
              </AnimDiv>
            </Link>
          </div>
        </FooterBox>

        <FooterBox>
          <span className="title">About Us</span>
          <div className="shop">
            <Link id="link" to={"/bout-us"}>
              <AnimDiv>
                <p className="anim">Our story</p>
              </AnimDiv>
            </Link>
            <Link id="link" to={"/"}>
              <AnimDiv>
                <p className="anim">Blog</p>
              </AnimDiv>
            </Link>
          </div>

          <div className="shop">
            <AnimDiv>
              <p className="anim">Shipping & returns</p>
            </AnimDiv>
            <AnimDiv>
              <p className="anim">Term & conditions</p>
            </AnimDiv>
            <AnimDiv>
              <p className="anim">Privacy policy</p>
            </AnimDiv>
          </div>
        </FooterBox>
      </FooterDiv>
    </>
  );
}

const FooterDiv = styled.div`
  border: solid 1px #121212;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  font-size: 16px;
  color: #121212;
  font-weight: 500;
  letter-spacing: 0.4px;
  gap: 24px;
  border: solid 1px #121212;
  #link {
    text-decoration: none;
  }
  & > .link {
    text-decoration: none;
  }

  & > .inpbut {
    display: flex;
    flex-direction: column;
    gap: 16px;

    & > button {
      background-color: #121212;
      letter-spacing: 0.35px;
      font-weight: 500;
      font-size: 14px;
      padding: 16px 24px 14px;
      color: #fff;

      .text-container {
        position: relative;
        display: flex;
        overflow: hidden;
      }
      .char-container {
        position: relative;
      }
      .char-container span {
        display: inline-block;
        white-space: pre;
        transition-property: transform;
        transition-duration: 0.5s;
      }
      .char-container span:last-child {
        position: absolute;
        top: 100%;
        width: 100%;
        left: 0;
      }
    }

    & > input {
      padding: 16px 12px;
      border: solid 1px #d2d2d7;
    }
  }
  #remind {
    font-weight: normal;
    letter-spacing: normal;
    line-height: 1.4;
  }
  .contactTatle {
    color: #808080;
    font-size: 14px;
  }

  .title {
    color: #808080;
    font-weight: 500;
    font-size: 18px;
  }
  .contactInfo {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .icons {
    display: flex;
    flex-direction: row;
    gap: 32px;
    & > img {
      width: 24px;
      height: 24px;
    }
  }
  .shop {
    display: flex;
    flex-direction: column;
    gap: 14px;
    & > .link {
      text-decoration: none;
    }
  }
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
