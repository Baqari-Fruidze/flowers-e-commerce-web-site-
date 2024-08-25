
import React, { useState } from "react";
import styled from "styled-components";
import data from "../../data.json";
import {TReview} from "../../types/Review";
import { useSet } from "@uidotdev/usehooks";

export default function OurClientSey(){
    const [sliderDots, setSliderDots]=useState(false)
    
    const isActive = () => {
        setSliderDots(!sliderDots)
    }

    
    const filtered = data.datas[2]?.users.filter((item)=>item.review.length > 0 )
    return(
        <>
        <MainCont>
            <img src={"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/644c14578243042ce032ac85_google%20logo.png"} alt="" />

            <p>REVIEWS</p>
            <h1>Our Client say</h1>

            <div> 
                <ReviewMap>
                {sliderDots ? <><p className="reviewDescr">{filtered[0].review}</p> <p className="userName">{filtered[0].username}</p> </> :
                <><p className="reviewDescr">{filtered[1].review}</p> <p className="userName">{filtered[1].username}</p> </>
                }
                </ReviewMap>  
            </div>
            
            <Slide>
                <div style={{backgroundColor: sliderDots ? "#808080" : "#222"}} onClick={isActive}></div>
                <div style={{backgroundColor: !sliderDots ? "#c4c2c2" : "#222"}} onClick={isActive}></div>
            </Slide>

            <button>READ REVIEWS</button>

        </MainCont>
       
        </>
    )
}
const MainCont=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 40px 43.5px;
    font-family: Gilroy;
    @media (min-width: 768px){
        padding: 60px 100px;
    }
    @media (min-width: 1440px){
        padding: 200px 270px 100px;
    }

    img{
        width: 77px;
        height: 28px;
        @media (min-width: 768px){
            width: 120px;
            height: 40px;
        }
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

    button{ 
        background-color: transparent; 
        color: #121212;
        border: 2px solid #121212;
        width: 100%;
        padding: 16px;
        margin-top: 70px;
        font-size: 14px;
        font-weight: 500;
        line-height: 1;
        letter-spacing: 0.35px;
        @media (min-width: 768px){
            font-size: 34px;
            width: 80%;
            margin-top: 20px;
        }
        @media (min-width: 1440px){
            font-size: 34px;
            width: 50%;
            margin-top: 50px;
        }
    }
    
`

const ReviewMap=styled.div`
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 16px;
        margin-top: 25px;
        height: 200px;
        .reviewDescr,
        .userName {
            font-size: 16px;
            opacity: 0.85;
            @media (min-width: 768px){
                font-size: 30px;
                }
        }
        .reviewDescr{
            font-style: italic;
            font-size: 22px;
            line-height: 1.4;
            letter-spacing: 1.2px;
            font-family: gilroy;
        }
`


const Slide=styled.div`
    display: flex;
    gap: 8px;
    margin-top: 55px;
    & > div{
        border-radius: 50%;
        width: 15px;
        height: 15px;
        background-color: #d2d2d7;
    }

`

