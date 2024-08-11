
import styled from "styled-components";
import Reacte, { useEffect } from "react";
import AllCategoryforHome from "../units/AllCategoriesForHome"
import AboutUs from "../units/AboutUs"
import WhyChooseUs from "../units/WhyChoosUs"
 
export default function AllCategory(){
   return(
<>
    <HomeDiv>
    <AllCategoryforHome />
    <AboutUs />
    <WhyChooseUs />
    {/* <LetTalk /> */}
    {/* <OurService /> */}
    {/* <FlowerSubcriptions /> */}
    {/* <OurClientsSay /> */}
    </HomeDiv>
</>
    )

}

const HomeDiv=styled.div`
    border-left: 1px solid #121212;
    border-right: 1px solid #121212;
`
