import React from "react";
import styled from "styled-components";
import weddingImg from "/image/wedding.jpg";
import AOS from "aos";
import 'aos/dist/aos.css';



export default function Wedding(){
    AOS.init({
        duration: 1200,
      })
    return(
        <>
            <WeddingService>
                <p className="service">SERVICE</p>
                <h1>Wegging & Event Decor</h1>
                <p data-aos="fade-up" className="weddingDescr">Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.</p>
                <button>INQUIRE NOW</button>
            </WeddingService>

        </>
    )
}

const WeddingService=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-image: url(${weddingImg});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 150%;
    width: 100%;
    height: 100vh;
    color: #fff;
    gap: 24px;
    padding: 80px 24px;
    @media (min-width: 768px){
        padding: 170px 90px;
        gap: 34px
    }
    @media (min-width: 1440px){
        padding: 170px 200px;
        gap: 34px
    }

    p{
        font-size: 14px;
        font-weight: 500;
        line-height: 1.2;
        @media (min-width: 768px){
            font-size: 32px;
            font-weight: 500;
        }
    }

    h1{
        font-size: 34px;
        font-weight: 600;
        line-height: 1.2;
        @media (min-width: 768px){
            font-size: 52px;
        }
    }

    .weddingDescr {
        font-size: 16px;
        line-height: 1.4;
        opacity: 0.85;
        @media (min-width: 768px){
            font-size: 30px;
        }
    }

    button{
        background-color: transparent; 
        color: #fff;
        border: 2px solid #fff;
        width: 70%;
        padding: 16px;
        font-size: 16px;
        margin-top: 65px;
        @media (min-width: 768px){
            font-size: 34px;
            width: 80%;
            margin-top: 200px;
        }
        @media (min-width: 1440px){
            font-size: 34px;
            width: 30%;
            margin-top: 150px;
        }
    }

    button:hover{
        background: #fff;
        color: #121212;
    }
    
`
