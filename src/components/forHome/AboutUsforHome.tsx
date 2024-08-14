import styled, { keyframes } from "styled-components";
import Reacte, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

export default function AboutUsforHome(){
    AOS.init({
        duration: 1200,
      })
   return(
    <MainCont >
        <p data-aos="zoom-in">About us</p>
        <Description>
            <p className = "ourStory" >OUR STORY</p>
            <p className = "shopName" data-aos="fade-up">Flowers Luxurious Bouquets</p>
            <p className="description" data-aos="fade-up">We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.</p>
            
            <button className="learnMore"><p className="anim"><Link to={"/about-us"}>LEARN MORE </Link></p></button>
           
        </Description>
    </MainCont>
   )
}

const spinWord = keyframes`
 20% {
    transform: translateY(-100%);
  }
  20% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
`;
const spinWords = keyframes`
  30% {
    transform: translateY(-100%);
  }
  10% {
    transform: translateY(0%);
  }
`;

const MainCont=styled.div`
   display: flex;
   flex-direction: column;
   border-bottom: 1px solid #121212;
    @media (min-width: 1440px) {
      display: grid;
       grid-template-columns: 1fr 1fr;
   }
   & > p{
    padding: 40px 16px;
    font-size: 34px;
    font-weight: 600;
    @media (min-width: 768px){
        padding: 80px 112px;
        font-size: 50px;
    }
    @media (min-width: 1440px){
        padding: 230px;
        font-size: 57px;
    }
   }
`

const Description=styled.div`
    padding: 40px 16px;
    font-weight: 500;
    color: #121212;
    
    @media (min-width: 768px){
        padding: 80px;
        border-top: 1px solid #121212;
    }
    @media (min-width: 1440px){
        padding: 100px 70px;
        border-left: 1px solid #121212;
    }

    .ourStory{
        font-size: 12px;
        @media (min-width: 768px){
            font-size: 14px;
        }
    }
    .shopName{
        margin: 24px 0 16px;
        font-size: 26px;
        @media (min-width: 768px){
            margin: 41px 0 16px;
            font-size: 38px;
        }
        @media (min-width: 1440px){
            margin: 41px 0 21px;
            font-size: 43px;
        }
    }

    .description{
        font-size: 16px;
        color: rgba(18, 18, 18, 0.9);
        font-weight: normal;
    }

    & > button {
        width: 100%;
        margin-top: 64px;
        padding: 29px 0;
        border: 1px solid #121212;
        font-size: 14px;
        letter-spacing: 0.35px;
        /* text-align: center; */
        align-items: center;
        cursor: pointer;
        :hover{
            background-color: #121212;
            color: #fff;
            opacity: 1;
        }
        
        @media (min-width: 1440px){
            width: 30%;
            font-size: 24px;
        }
    
    & > .anim {
                cursor: pointer;
                animation: ${spinWords} 2s normal;
                font-size: 16px;
                opacity: 1;
            }
            
            &:hover > :last-child {
                animation: ${spinWord} 2s normal;
                opacity: 0.5;
            }
          
        }
       
        
`