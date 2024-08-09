import styled from "styled-components";
import Reacte, { useEffect } from "react";
import AllCategoryforHome from "../units/AllCategoriesForHome"
import AboutUs from "../units/AboutUs"
 
export default function AllCategory(){
   return(
<>
    <AllCategoryforHome />
    <AboutUs />
    <WhyChoosUs />
    {/* <LetTalk /> */}
    {/* <OurService /> */}
    {/* <FlowerSubcriptions /> */}
    {/* <OurClientsSay /> */}
</>
    )
}
