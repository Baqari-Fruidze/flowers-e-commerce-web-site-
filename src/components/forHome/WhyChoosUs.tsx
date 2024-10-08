import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyChooseUs() {
  AOS.init({
    duration: 1200,
  });
  return (
    <>
      <MainCont>
        <p data-aos="zoom-in">Why choose us ?</p>

        <ReasonWhy>
          <div>
            <p className="boxTitle">Stylish bouquets by florists</p>
            <p className="boxDescription" data-aos="fade-up">
              At our floral studio, our professional florists craft the most
              elegant and stylish bouquets using only the freshest and highest
              quality materials available. We stay up-to-date with the latest
              floral design trends and offer unique arrangements that are sure
              to impress. Let us brighten up your day with our stunning bouquets
              and same-day delivery service.
            </p>
          </div>

          <div>
            <p className="boxTitle">On-time delivery</p>
            <p className="boxDescription" data-aos="fade-up">
              Never miss a moment with our on-time flower delivery service. Our
              couriers will deliver your bouquet personally, without boxes, to
              ensure it arrives in perfect condition. Trust us to deliver your
              thoughtful gift reliably.
            </p>
          </div>

          <div>
            <p className="boxTitle">Safe payment</p>
            <p className="boxDescription" data-aos="fade-up">
              You can feel secure when placing an order with us, as we use
              industry-standard security measures to protect your payment
              information. Your transaction will be safe and hassle-free, so you
              can shop with confidence.
            </p>
          </div>

          <div>
            <p className="boxTitle">Subscription by your needs</p>
            <p className="boxDescription" data-aos="fade-up">
              With our subscription service tailored to your specific needs, you
              can enjoy the convenience of having beautiful bouquets delivered
              straight to your door at regular intervals. Our flexible service
              is perfect for busy individuals or those who want to ensure they
              always have fresh flowers on hand. You'll save time and money with
              this hassle-free solution to your floral needs.
            </p>
          </div>
        </ReasonWhy>
      </MainCont>
    </>
  );
}

const MainCont = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 800px;
  }

  & > p {
    padding: 40px 16px;
    font-size: 34px;
    font-weight: 600;

    @media (min-width: 768px) {
      padding: 80px 112px;
      font-size: 50px;
    }
    @media (min-width: 1440px) {
      padding: 100px;
      font-size: 57px;
    }
  }
`;
const ReasonWhy = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (min-width: 1440px) {
    overflow-y: auto;
    border-left: 1px solid #121212;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 40px 16px;
    border-top: 1px solid #121212;
    &::-webkit-scrollbar {
      display: none;
    }
    @media (min-width: 765px) {
      padding: 80px;
    }

    .boxTitle {
      font-size: 26px;
      font-weight: 500;
      color: #121212;
      @media (min-width: 765px) {
        font-size: 38px;
      }
    }

    .boxDescription {
      font-size: 16px;
      color: #6e6c6c;
      @media (min-width: 1440px) {
        font-size: 18px;
      }
    }
  }
`;
