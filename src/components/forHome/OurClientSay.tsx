import React from "react";
import styled from "styled-components";

export default function OurClientSey(){
    return(
        <>
        <MainCont>
            <img src={"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/644c14578243042ce032ac85_google%20logo.png"} alt="" />

            <p>REVIEWS</p>
            <h1>Our Client say</h1>
            <p classname="reviewDescr">“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”</p>
            <p className="userName">Ronald Richards</p>
            <Slide>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
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
    img{
        width: 77px;
        height: 28px;
    }

    p{
        font-size: 12px;
        font-weight: 500;
        line-height: 1.2;
        color: #121212;
    }

    h1{
        font-size: 34px;
        font-weight: 600;
        letter-spacing: 1.2;
        color: #121212;
    }
`







const Slide=styled.div`
    display: flex;
    gap: 4px;
    div{
    width: 4px;
    height: 4px;
    background-color: #d2d2d7;
    border-radius: 50%;
    }

`

