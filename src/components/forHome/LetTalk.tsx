import React from "react";
import styled from "styled-components";

export default function LetTalk(){
    return(
    <>
     <ToContactUs>
        <FollowUs>
                <img src={"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/64a03b42882782a8aa1f0e26_KYIV%20LB%202%20720.webp"} alt="" />
        
            
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
            
            <p className="contactUsTitle">To Contact Us</p>
            <p  className="contactUsDescr">We will call you back</p>
            <div className="bookACall">
                <input 
                    className="bookACallInput" 
                    type="number" 
                    placeholder="+995 XXX XXX XXX"
                    />
                <button className="bookACallBtn" >BOOK A CALL</button>
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

                <div className="phoneAdress">
                    <p className="phoneAdressTitle">Address</p>
                    <div>
                        <p className="phoneAdressDecsr, open">OPENNING HOURS: 8 TO 11 PM</p>
                        <p className="phoneAdressDecsr, openAdress">15/4 Chavchavadze Avn N 223</p>
                    </div>
                    </div>
            </PhoneAdress>
        </Contact>
     </ToContactUs>
    </>
    )
}

const ToContactUs=styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 1440px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: dense;
        border: 1px solid #121212;   
    }
`
const FollowUs=styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 1440px){
            border-right: 1px solid #121212;
        }
    
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
            }    

            & > .icons {
                display: flex;
                gap: 32px;
                @media (min-width: 768px) {
                    display: flex;
                    border-left: 1px solid #121212;
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
    @media (min-width: 1440px){
        padding: 40px 0;
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
                margin-left: 80px; 
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
