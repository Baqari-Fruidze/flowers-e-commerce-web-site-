import styled from "styled-components";
import Reacte, { useEffect } from "react";
import AllCategoryforHome from "../components/forHome/AllCategoriesForHome";
import AboutUsforHome from "../components/forHome/AboutUsforHome";
import WhyChooseUs from "../components/forHome/WhyChoosUs";
import LetTalk from "../components/forHome/LetTalk";
import OurService from "../components/forHome/OurService";
import Wedding from "../components/forHome/Wedding";
import OurClientSey from "../components/forHome/OurClientSay";
import floverVideoBg from "/image/loginBg.jpg"


export default function AllCategory() {
  return (
    <>
      <HomeDiv>
        <iframe src="https://player.vimeo.com/video/917253515" ></iframe>
        <AllCategoryforHome />
        <AboutUsforHome />
        <WhyChooseUs />
        <LetTalk />
        <OurService />
        <Wedding />
        <OurClientSey />

      </HomeDiv>
    </>
  );

}

const HomeDiv = styled.div`
  border-left: 1px solid #121212;
  border-right: 2px solid #121212;
    Iframe{
      background-image: url(${floverVideoBg});
      background-repeat: no-repeat;
      background-size: 100%;
      width: 100%;
      height: 50vh;
      @media (min-vidth: 758px){
      height: 70vh;
      }
  
  }
  

`;

