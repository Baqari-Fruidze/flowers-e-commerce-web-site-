import styled from "styled-components";
import about from "/image/about.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function OurStory() {
    AOS.init({
        duration: 1000,
      })
    return(
        <>
            <MainCont>
                <Story>
                    <h1 data-aos="fade-up">Our Story</h1>
                    <img data-aos="fade-up" src={about} />
                    <h1 data-aos="fade-up">Flowers Luxurious Bouquets</h1>
                    <p data-aos="fade-up">Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
                    <div data-aos="fade-up"className="icons">
                        <div style={{ cursor: "pointer"}}><img src={"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/6433f820e186e144ecf86c56_Instagram.svg"} alt="instagram" /></div>
                        <div style={{ cursor: "pointer"}}><img src={"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/6433f820e186e1d70bf86c58_Pinterest.svg"} alt="pinterest" /></div>
                        <div style={{ cursor: "pointer"}}><img src={"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/6433f820e186e16d07f86c59_Facebook.svg"} alt="favebook" /></div>
                        <div style={{ cursor: "pointer"}}><img src={"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/6433f820e186e1cb4ef86c57_Twitter.svg"} alt="twitt" /></div>
                        <div style={{ cursor: "pointer"}}><img src={"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/6433f820e186e17d93f86c5a_Telegram.svg"} alt="telegram" /></div>
                    </div>
                </Story>

                <img data-aos="fade-up" src={"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/6442512f0b353c7303729616_image-p-1080.png"} alt="" />
                   

            </MainCont>
        </>
    )
}

const MainCont = styled.div`
    font-size: 100px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media (min-width: 1440px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0px;
    } 
   
    img{
        width: 100%;
    }
`
const Story = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px 16px;
    color: #121212;
    background-color: #fff;
    @media (min-width: 1440px){
        padding: 80px 80px 0;
    }
    & > h1{
        font-size: 34px;
        font-weight: 600;
        line-height: 1.2;
        @media (min-width: 1440px){
            font-size: 48px;
    }                               
    }

    & > img{
        width: 270px;
        height: 100px;
        @media (min-width: 1440px){
        margin: 20px 0;
    }
    }

    & > p{
        font-size: 18px;
        opacity: 0.8;
        margin: 24px 0 44px;
        @media (min-width: 1440px){
            font-size: 24px;
            margin: 15px 0 50px;
    }    
    }

    & > .icons{
        display: inline-flex;
        gap: 10px;
        @media (min-width: 768px){
            gap: 30px;
        }
        & > div{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 1px solid #121212;
            position: relative;
            @media (min-width: 768px){
                width: 45px;
                height: 45px;
        }

            & > img{
                width: 30px;
                height: 30px;
                position: absolute;
                margin-left: -15px;
                margin-top: 7px;

            }

        }
        
    }
`