import styled from "styled-components";
import Reacte, { useEffect } from "react";
import AllCategoryforHome from "../components/forHome/AllCategoriesForHome";
import AboutUsforHome from "../components/forHome/AboutUsforHome";
import WhyChooseUs from "../components/forHome/WhyChoosUs";
import LetTalk from "../components/forHome/LetTalk";
import OurService from "../components/forHome/OurService";
import Wedding from "../components/forHome/Weddind";
import OurClientSey from "../components/forHome/OurClientSay";


export default function AllCategory() {
  return (
    <>
      <HomeDiv>

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
  border-right: 1px solid #121212;
`;
