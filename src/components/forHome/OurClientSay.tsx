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


    console.log(sliderDots)
 
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
                <div onClick={isActive}></div>
                <div onClick={isActive}></div>
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
    text-align: center;
    align-items: center;
    gap: 16px;
    padding: 43.5px 16px;
    img{
        width: 76px;
        height: 28px;
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

        .reviewDescr{
        font-size: 16px;
        line-height: 1.4;
        opacity: 0.85;
        @media (min-width: 768px){
            font-size: 30px;
            }
        }
    }

    button{ 
        background-color: transparent; 
        color: #121212;
        border: 2px solid #121212;
        width: 70%;
        padding: 16px;
        margin-top: 35px;
        font-size: 14px;
        font-weight: 500;
        line-height: 1;
        letter-spacing: 0.35px;
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
    
`

const ReviewMap=styled.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 25px;
        .reviewDescr,
        .userName
        {
            font-size: 22px;
            opacity: 0.8;
        }
`

const Slide=styled.div`
    display: flex;
    gap: 4px;
    margin-top: 25px;
    & > div{
        border-radius: 50%;
        width: 4px;
        height: 4px;
        background-color: red;;
    }
   
`

