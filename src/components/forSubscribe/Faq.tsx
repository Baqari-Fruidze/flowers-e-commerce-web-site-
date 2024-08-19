import React from "react";
import styled from "styled-components";
import arrowRightDown from "/image/arrowrightdown.svg"

export default function Faq(){
    return (
        <>
        
        <MainCont>
            <h2 className="title">Subscription FAQ</h2>
            <FaqCont>
                <Qa>
                    <div className="question">
                        <p>How often will I get a new bouquet? </p>
                        <img src={arrowRightDown} alt="" />
                    </div>
                    <div className="answer">Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!</div>
                </Qa>
                <Qa>
                    <div className="question">Can i send subscription like as a gift ? <span><img src={arrowRightDown} alt="" /></span></div>
                    <div className="answer">Depending on the day you first choose for your flower delivery, we will deliver on that day for all future deliveries. So if you get your flowers on Thursday every other week, you will get another flower delivery two weeks later on Thursday.</div>
                </Qa>
                <Qa>
                    <div className="question">Can I choose which bouquet I get ? <span><img src={arrowRightDown} alt="" /></span></div>
                    <div className="answer">Each subscription option is carefully selected by our specialists. Our florists select the best and freshest varieties for delivery that surprise and delight every time; thus, the current subscription offer does not allow you to choose a different bouquet for each delivery or to receive the entire subscription with one particular bouquet. Each bouquet will be individual and made according to your chosen plan - classic, seasonal or luxury bouquets</div>
                </Qa>
                
            </FaqCont>
        </MainCont>
        </>
        
    )
}

const MainCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid #121212;
    width: 100%;
    gap: 24px;
    padding: 40px 24px;
    background-color: #fff;
    @media (min-width: 768px){
        margin: 40px auto;
        width: 70%;
    }
    @media (min-width: 1440px){
        width: 50%;
    }

    .title {
        font-size: 34px;
        font-weight: 600;

    }
`

const FaqCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;

`
const Qa = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #121212;
    width: 300px;
    padding: 20px 0px;
    @media (min-width: 768px){
        width: 400px;
    }
    @media (min-width: 1440px){
        width: 600px;
    }


    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
    }

    .answer{
        font-size: 12px;
        opacity: 0.7; 
        padding-top: 20px;
        display: none;
    }

    .question,
    .answer {
        text-align: left;
    }
`