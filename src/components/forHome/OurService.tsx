import React from "react";
import styled from "styled-components";
import wedding  from "/image/wedding.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function OurService(){
    AOS.init({
        duration: 1200,
      })
    return(
    <>
        <OurServ data-aos="zoom-in">Our service</OurServ>

        <Services>
            <span className="serviceImg">
                <img src={"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/6436a36c9d977d7032eb51ee_happiness-image-placeholder_lx1a04.webp"} alt="" />
            </span>

            <FlowerSubcriptions>
                <p className="service">SERVICE</p>
                <h1 className="subscriptions" data-aos="fade-up" >Flower Subscriptions</h1>
                <p className="serviceDescr" data-aos="fade-up" >Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
                <button>SUBSCRIBE NOW</button>
            </FlowerSubcriptions>
        </Services>
        </>
    ) 
}

const OurServ=styled.div`
    font-size: 34px;
    padding: 40px 16px;
    text-align: left;
    @media (min-width: 768px){
        text-align: center;
    }
    @media (min-width: 1440px){
        padding: 80px;
    }
    `
const Services=styled.div`
    
    display: flex;
    flex-direction: column;
    border-top: 1px solid #121212;
    @media (min-width: 1440px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 100vh;
       }

        img{
            width: 100%;
            @media (min-width: 1440px){
            height: 100vh;
        }
    }
       
`
const FlowerSubcriptions=styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:  center;
    padding: 40px 0 40px 0;
    gap: 16px;
    @media (min-width: 1440px){
        padding: 80px;
        gap: 54px;
        height: 100vh;
    }


    .service {
        font-size: 12px;
        font-weight: 500;
        @media (min-width: 1440px){
            font-size: 24px;
            font-weight: 500;
            
    }
    
    }

    .subscriptions {
        font-size: 34px;
        font-weight: 500;
        @media (min-width: 1440px){
            font-size: 44px;
            font-weight: 600;
    }
    }
    
    .serviceDescr{
        text-align: center;
        font-size: 16px;
        line-height: 1.4;
        color: rgba(18, 18, 18, 0.9);
        @media (min-width: 1440px){
            font-size: 20px;
    }
    }
    button {
        padding: 16px 24px;
        @media (min-width: 1440px){
            padding: 16px 44px;
    }
    }

`