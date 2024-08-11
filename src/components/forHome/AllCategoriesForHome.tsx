import styled from "styled-components";
import Reacte, { useEffect } from "react";
import data from "../../data.json"
import Categories from "./Categories"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AllCategory(){
  AOS.init({
    duration: 1200,
  })
   return(
<>
<MainCont>
    <Greating>
        <ShopName>
            <p className="shopName" data-aos="fade-up" >Flowers Luxurious Bouquets<span>®</span></p>
            <p className="shopGreating">Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
        </ShopName>

        <Suggest>
          <div>
            <img src={"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/64a03d676a877d080695084a_ewddewd%201.webp"} alt="" />
          </div>  
            <p className="suggestText" data-aos="fade-up" >Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
        </Suggest>
    </Greating>


    <Categories />
</MainCont>
</>
    )
}

const MainCont=styled.div`
   display: flex;
   flex-direction: column;
   border-bottom: 1px solid #121212;
    @media (min-width: 1440px) {
      display: grid;
       grid-template-columns: 1fr 1fr;
       height: 764px;
   }
`
const Greating = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 16px;
  gap: 16px;
  border-top: solid 1px #121212;
    @media (min-width: 768px) {
        height: 764px;
   }
   @media (min-width: 1440px) {
    border-right: solid 1px #121212;
    height: 764px;
   }
`
const ShopName=styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 16px 0 16px;
    gap: 16px;
      @media (min-width: 768px) {
          padding: 80px 80px 16px 80px ;
      }

      .shopName {
      font-weight: 600;
      letter-spacing: 1.2px;
      font-size: 40px;
        @media (min-width: 768px) {
            font-size: 67px;
        }
      }

    .shopName span {
      font-size: 20px;
      margin-left: 20px;
    }

    .shopGreating{
      font-size: 14px;
      line-height: 1.4;
      color: rgba(18, 18, 18, 0.9);
      padding-bottom: 40px;
     border-bottom: 1px solid #121212;
     
}
    
   
`

const Suggest=styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 16px 40px 16px;
  align-items: last baseline;
  gap: 16px;
  @media (min-width: 768px) {
          padding: 0 80px 0 80px ;
      }
  & > div{
    border-right: 1px solid rgba(18, 18, 18, 0.9);
    padding-right: 16px;
    @media (min-width: 768px) {
      padding-right: 40px;
      }
    & > img{
    width: 100%;
    height: 100%;
  }
 }
 .suggestText {
  font-size: 11px;
  color: rgba(18, 18, 18, 0.9);
  @media (min-width: 768px) {
      padding-left: 50px;
      font-size: 14px;
      }
}
`
