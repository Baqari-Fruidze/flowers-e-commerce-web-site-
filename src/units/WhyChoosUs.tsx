import styled from "styled-components";
import Reacte, { useEffect } from "react";

export default function AllCategory(){
   return(
<>
<MainCont>
    <WhyChoose>
        Why choose us ?    
    </WhyChoose>

    <Greating>
        <div>
            <p className="boxTiTle">Stylish bouquets by florists</p>
            <p className="boxDescription">At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.</p>
        </div>

        <div>
            <p className="boxTiTle">On-time delivery</p>
            <p className="boxDescription">Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.</p>
        </div>

        <div>
            <p className="boxTiTle">Safe payment</p>
            <p className="boxDescription">You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.</p>
        </div>

        <div>
            <p className="boxTiTle">Subscription by your needs</p>
            <p className="boxDescription">With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs.</p>
        </div>
    </Greating>

</MainCont>
</>
    )
}

const MainCont=styled.div`
   display: flex;
   flex-direction: column;
    @media (min-width: 1440px) {
      display: grid;
       grid-template-columns: 1fr 1fr;
       height: 900px;
   }
`
const WhyChoose=styled.p`
    padding: 100px;
    background-color: pink;
`
const Greating = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 16px;
    @media (min-width: 768px) {
        height: 900px;
   }
`
const ShopName=styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 16px 0 16px;
    gap: 16px;
      @media (min-width: 768px) {
          padding: 80px 80px 50px 80px ;
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
          padding: 80px 80px 50px 80px ;
      }
  & > div{
    border-right: 1px solid rgba(18, 18, 18, 0.9);
    padding-right: 16px;
    & > img{
    width: 100%;
    height: 100%;
  }
 }
 .suggestText {
  font-size: 11px;
  color: rgba(18, 18, 18, 0.9);
}
`
