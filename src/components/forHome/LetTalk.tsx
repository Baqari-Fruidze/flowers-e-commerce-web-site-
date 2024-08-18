import React from "react";
import styled, { keyframes } from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';
import shop1 from "/image/shop1.png";
import shop2 from "/image/shop2.png"

export default function LetTalk(){
    AOS.init({
        duration: 1200,
      })
    return(
    <>
     <ToContactUs>
     <FollowUs>
            <img src={shop2} alt="" />
            <div className="follow">
                <div><p>Follow us:</p></div>
                <div className="icons">
                    <img style={{ cursor: "pointer"}} src={"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/6433f820e186e144ecf86c56_Instagram.svg"} alt="instagram" />
                    <img style={{ cursor: "pointer"}} src={"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/6433f820e186e1d70bf86c58_Pinterest.svg"} alt="pinterest" />
                    <img style={{ cursor: "pointer"}} src={"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/6433f820e186e16d07f86c59_Facebook.svg"} alt="favebook" />
                    <img style={{ cursor: "pointer"}} src={"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/6433f820e186e1cb4ef86c57_Twitter.svg"} alt="twitt" />
                    <img style={{ cursor: "pointer"}} src={"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/6433f820e186e17d93f86c5a_Telegram.svg"} alt="telegram" />
                </div>
            </div>
        </FollowUs>

        <Contact>
            <p className="contactUsTitle" data-aos="fade-up">To Contact Us</p>
            <p  className="contactUsDescr">We will call you back</p>
            <div className="bookACall">
                <input 
                    className="bookACallInput" 
                    type="number" 
                    placeholder="+995 XXX XXX XXX"
                    />
                <button className="bookACallBtn" ><p className="anim">BOOK A CALL</p></button>
            </div>
        
            <PhoneAdress>
                <div className="phoneAdress">
                    <p className="phoneAdressTitle">Phone</p>

                    <div>
                    <span>
                        <img src={"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/64a2b419cf29328d429a83a1_phone.svg"} alt="" />
                        <p className="phoneAdressDecsr">+995 555 320 320</p>
                    </span>
                    <span>
                        <img src={"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/64a2b419cf29328d429a83a1_phone.svg"} alt="" />
                        <p className="phoneAdressDecsr">+995 555 555 555 </p>
                    </span>
                    </div>
                </div>

                <div className="phoneAdress"  id="phoneAdressTitle" >
                    <p className="phoneAdressTitle">Address</p>
                    <div>
                        <p className="phoneAdressDecsr, open">OPENNING HOURS: 8 TO 11 PM</p>
                        <p className="phoneAdressDecsr, openAdress">N 223 Chavchavadze Avenue, Telavi</p>
                    </div>
                </div>
            </PhoneAdress>
        </Contact>

       
     </ToContactUs>
    </>
    )
}

const spinWord = keyframes`
  20% {
    transform: translateY(0%);
  }
  0% {
    transform: translateY(-150%);
  }
`;
const spinWords = keyframes`
  20% {
    transform: translateY(0%);
  }
  0% {
    transform: translateY(150%);
  }
`;


const ToContactUs=styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 1440px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        border-bottom: 1px solid #121212;
    }
`
const FollowUs=styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #121212;
    
    & > img{
        width: 100%;
        }
    & > .follow {
        display: flex;
        flex-direction: column;
        font-size: 26px;
        font-weight: 500;
        margin: 16px;
        gap: 16px;
        @media (min-width: 768px) {
            margin: 0px;
            gap: 0px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            text-align: center;
            }
        @media (min-width: 1440px) {
            margin: 0px;
            gap: 0px;
            border-top: 1px solid #121212;
            }    

            & > .icons {
                display: flex;
                gap: 32px;
                @media (min-width: 768px) {
                    display: flex;
                    justify-content: center;
                }
            }
            
            & > div {
                @media (min-width: 768px) {
                    font-size: 26px;
                    padding: 16px  16px;
                }
               
            }
        }
    `
const Contact=styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-top: 1px solid #121212;
    border-bottom: 1px solid #121212;
    font-family: Gilroy sans-serif;

    
    @media (min-width: 768px){
        padding: 16px 0 0 0;
    }
    @media (min-width: 1440px){
        padding: 40px 0 0;
        border-top: none;
        border-bottom: none;
        border-top: 1px solid #121212;
        border-left: 1px solid #121212;
    }
    & > .contactUsTitle{
        font-size: 34px;
        font-weight: 600;
        @media (min-width: 768px){
        padding: 0 80px;
    }
    }

    & > .contactUsDescr{
        font-size: 18px;
        font-weight: 500;
        line-height: 1.4;
        margin-top: 24px;
        margin-bottom: 16px;
        @media (min-width: 768px){
        padding: 0 80px;
    }
    }
    .bookACall{
        display: flex;
            flex-direction: column;
            gap: 16px;
            overflow-y: hidden;
            cursor: pointer;
          
        @media (min-width: 768px) {
            display: flex;
            flex-direction: row;
            gap: 16px;
            padding: 0 80px 90px;
            border-bottom: 1px solid #121212;
        }
        @media (min-width: 1440px) {
            gap: 16px;
            padding: 0 0 80px ;
        }
    
    & > .bookACallInput{
            padding: 12px 16px;
            border: 1px solid #d2d2d7;
            @media (min-width: 768px){
                width: 296px;
            }
            @media (min-width: 1440px){
                margin-left: 57px; 
            }
        }
    
    & > .bookACallBtn {
            padding: 12px 16px;
            background-color: #121212;
            color: #fff;
            cursor: pointer;
            @media (min-width: 768px){
                width: 296px;
            }
            & > .anim {
                cursor: pointer;
                animation: ${spinWords} 3s normal;
                font-size: 16px;
                opacity: 1;
            }
            
            &:hover > :last-child {
                animation: ${spinWord} 3s normal;
                opacity: 0.5;
            }

        }

        
 

    }
    
`
const PhoneAdress=styled.div`
    display: flex;
    flex-direction: column;
        @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;
    }

    #phoneAdressTitle{
        @media (min-width: 768px){
            border-left: 1px solid #121212;
        }
        
    }
    
    & > .phoneAdress{
        display: flex;
        flex-direction: column;
        & > div{
            display: flex;
            flex-direction: column;
            gap: 21px;
            padding: 40px 16px;
            font-size: 16px;
            font-weight: 600;
            .open{
                font-size: 14px;
                font-weight: 500;  
            }
            .openAdress{
                font-size: 14px;
                font-weight: 600; 
            }
        }
        

        & > .phoneAdressDecsr, span .phoneAdressDecsr{
            display: flex;
            gap: 16px;
            align-items: center;
            
        }
        span {
            display: flex;
            gap: 16px;
            align-items: center;
            @media (min-width: 768px) {
                margin-left: 90px;
            }
        }
        

        }
    & > .phoneAdress .phoneAdressTitle{
        padding: 16px;
        font-size: 26px;
        font-weight: 500;
        border-bottom: 1px solid #121212;
    }
`

