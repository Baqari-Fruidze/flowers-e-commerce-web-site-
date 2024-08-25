import React from "react";
import styled from "styled-components";
import weddingImg from "/image/wedding.jpg";
import AOS from 'aos';
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
    background-image: url(${weddingImg});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 150%;
    width: 100%;
    height: 100vh;
    color: #fff;
    text-align: center;
    padding: 180px 16px 80px;
    @media (min-width: 768px){
        background-size: 100%;
        padding: 120px 80px;
        background-size: 100%;
        height: 120vh;
    }
    @media (min-width: 1440px){
        padding: 216px 427px;
    }

    .service{
        font-size: 12px;
        font-weight: 500;
        line-height: 1.2;
        @media (min-width: 768px){
        font-size: 14px;
        font-weight: 500;
        }
        @media (min-width: 1440px){
            font-size: 24px;
        }
        }

    h1{
        margin: 24px 0 16px 0;
        font-size: 36px;
        font-weight: 600;
        line-height: 1.2;
        @media (min-width: 768px){
        margin: 48px 0 36px 0;
        font-size: 50px;
    }
    }

    .weddingDescr{
        font-size: 16px;
        line-height: 1.4;
        @media (min-width: 768px){
        margin: 48px 0 36px 0;
        font-size: 18px;
        font-weight: 500;
        }
        @media (min-width: 1440px){
                font-size: 22px;
            }
        }

    button{
        margin-top: 64px;
        width: 100%;
        padding: 16px 16px;
        background-color: transparent;
        border: 2px solid #fff;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        @media (min-width: 768px){
            margin-top: 120px;
            width: 70%
        }
        @media (min-width: 1440px){
                font-size: 22px;
            }
      
        }
        button:hover{
            background-color: #fff;
            border: 2px solid #333;
            color: #333;
        }
       

`