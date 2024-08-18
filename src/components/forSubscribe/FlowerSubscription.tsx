import React from "react";
import styled from "styled-components";

export default function FlowerSubsc() {
    return(
        <>
        <FlowerSubscriptionDiv>
            <img src={"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/6436a36c9d977d7032eb51ee_happiness-image-placeholder_lx1a04.webp"} alt="" />
            <FlowerSubscription>
                <h1>Flower Subscription</h1>
                <p className="title">For Yourself</p>
                <li>The perfect way to keep your home fresh and beautiful. Get a regular delivery of stunning bouquets straight to your doorstep without lifting a finger. Enjoy the beauty and fragrance of fresh flowers hassle-free!</li>
                <p className="title">As a Gift</p>
                <li>Simply provide us with their address and let us take care of the rest, delivering beautiful blooms straight to their doorstep at the frequency and duration of your choosing.</li>
                <p className="title">For Business</p>
                <li>Is a great way to create a pleasant atmosphere and leave a good impression on your guests and customers. Fresh floral arrangements will improve the aesthetic image of your business, and our service guarantees timely replacement without extra care or effort on your part.</li>

                <button>EXPLORE PLANS</button>
            </FlowerSubscription>
        </FlowerSubscriptionDiv>
      
        
        </>
    )
}

const FlowerSubscriptionDiv=styled.div`
    display: flex;
    flex-direction: column;
    color: #121212;
    border-bottom: 1px solid #121212;
    border-left: 1px solid #121212;
    border-right: 1px solid #121212;
    @media (min-width: 1440px){
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    img{
        width:100%;
        height: 100%;
    }
`

const FlowerSubscription=styled.div`
display: flex;
flex-direction: column;
padding: 40px 16px;
@media (min-width: 768px){
            padding: 80px;
        }
    h1{
        font-size: 34px;
        font-weight: 600;
        line-height: 1.2;
        margin-bottom: 16px;
        @media(min-width: 1440px){
            font-size: 50px;
            margin-bottom: 50px;
        }
    }

    & > .title{
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 8px;
        @media(min-width: 1440px){
            font-size: 24px;
        }
    }

    li{
        margin-bottom: 16px;
        font-size: 16px;
            line-height: 1.4;
            letter-spacing: normal;
            text-align: left;
            color: #6e6c6c;
            @media (min-width: 1440px){
            font-size: 18px;
            opacity: 0.8;
            }
    }
    & > button{
            padding: 18px 24px;
            background-color: #fff;
            cursor: pointer;
            @media (min-width: 768px){
            width: 45%;
        }
        }
        & > button:hover{
                background-color: #121212;
                color: #fff;
            }

    `


    
        
       