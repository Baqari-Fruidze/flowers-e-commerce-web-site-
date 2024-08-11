import React from "react";
import styled from "styled-components";
import serviceImage  from "/image/flowers/6436a36c9d977d7032eb51ee_happiness-image-placeholder_lx1a04.jpg"
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
                <p>SERVICE</p>
                <h1>Flower Subcriptions</h1>
                <p className="serviceDescr">Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
                <button>SUBSCRIBE NOW</button>
            </FlowerSubcriptions>

        </Services>

        <WeddingEventDecor>
            <img src={"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/64a0432fd429f309141ad736_!!!!!.webp"} alt="" />
        </WeddingEventDecor>
        </>
    ) 
}

const OurServ=styled.div`
    font-size: 34px;
    padding: 40px 16px;
    text-align: left;
    border-bottom: 1px solid #121212;
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

    .serviceImg{
        background-image: url("serviceImage");
    
}
    @media (min-width: 1440px){
        display: grid;
        grid-template-columns: 1fr 1fr;
   
    }
    
    img{
        width: 100%;
    }
`

const FlowerSubcriptions=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:  center;
    padding: 40px 16px;
    gap: 24px;
    
    .serviceDescr{
        text-align: center;
    }
`
const WeddingEventDecor=styled.span`
    img{
        width: 100%;
        position: relative;
        -ms-zoom-animation: -;
    }
   .zuus{
    display: flex;

    position: absolute;
    text-align: center;
    margin-top: -100px;
    color: #fff;

   }
`





