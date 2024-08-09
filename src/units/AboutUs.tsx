import styled from "styled-components";
import Reacte, { useEffect } from "react";

export default function AboutUs(){
   return(
    <MainCont>
        <p>About us</p>
        <Description>
            <p className = "ourStory">OUR STORY</p>
            <p className = "shopName">Flowers Luxurious Bouquets</p>
            <p className="description">We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.</p>
            <p className="learnMore">LEARN MORE</p>
        </Description>
    </MainCont>
   )
}

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
    border-bottom: 1px solid #121212;
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
    /* border-left: 1px solid #121212; */
    @media (min-width: 768px){
        padding: 80px;
    }
    @media (min-width: 1440px){
        padding: 100px 70px;
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

    .learnMore{
        margin-top: 64px;
        padding: 18px 0;
        border: 1px solid #121212;
        font-size: 14px;
        letter-spacing: 0.35px;
        text-align: center;
        align-items: center;
        @media (min-width: 768px){
            font-size: 16px;
            width: 175px;
            height: 50px;
        }
    }
`