import styled from "styled-components";
import Reacte, { useEffect } from "react";


export default function HowDoesItWork(){
   
   return(
<>
<MainCont>
    <p>How does it work?</p>

    <ReasonWhy>
        <div>
            <p className="boxTitle">Choose a plan</p>
            <p className="boxDescription">Select the subscription plan that suits you best from our three bouquet designs: classic, seasonal, and deluxe. Each plan comes with a designer vase, free delivery, and a discount of up to 30%. Our seasonal and deluxe plans also include a luxurious scented candle to enhance the ambiance.</p>
        </div>

        <div>
            <p className="boxTitle">Frequency and Duration</p>
            <p className="boxDescription">Choose delivery frequency: once a week, every two weeks, or once a month. Then, select your subscription duration from 3 to 12 months. Enjoy savings with a longer subscription. We understand that every customer has different needs, and we aim to provide flexible subscription options that cater to your specific preferences.</p>
        </div>

        <div>
            <p className="boxTitle">Pay once</p>
            <p className="boxDescription">After entering your contact and delivery information and paying for your subscription, you can sit back and relax, knowing that you have secured a regular supply of fresh, stunning flowers for yourself or your loved ones</p>
        </div>
    </ReasonWhy>

</MainCont>
</>
    )
}

const MainCont=styled.div`
position: relative;
   display: flex;
   flex-direction: column;
   
   border-bottom: 1px solid #121212;
    border-left: 1px solid #121212;
    @media (min-width: 1440px) {
      display: grid;
       grid-template-columns: 1fr 1fr;
       height: 800px;
   }

   & > p{
    padding: 40px 16px;
    font-size: 34px;
    font-weight: 600;
    @media (min-width: 768px){
        padding: 80px 112px;
        font-size: 50px;
    }
    @media (min-width: 1440px){
        padding: 100px;
        font-size: 57px;
    }
   }
`
const ReasonWhy = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  
     @media (min-width: 1440px) {
       overflow-y: auto;
        border-left: 1px solid #121212;
   }

   & > div{
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 40px 16px;
    border-top: 1px solid #121212;
    &::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 765px){
        padding: 80px;
    }

    .boxTitle {
        font-size: 26px;
        font-weight: 500;
        color: #121212;
        @media (min-width: 765px){
        font-size: 38px;
    }
    }

    .boxDescription{
        font-size: 16px;
        color: #6e6c6c;
        @media (min-width: 1440px){
            font-size: 18px;
        }
    }

   }
`
   
