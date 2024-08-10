import styled from "styled-components";
import Reacte, { useEffect } from "react";
import Categories from "../components/forHome/Categories"

export default function AllCategory(){
   return(
<>
<MainCont>
    <Choose>Choose a Category</Choose>
    <Categories />
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


const Choose=styled.h1`
    text-align: center;
    padding: 100.7px 43px;
    color: #121212;
    margin-top: 0;
    font-weight: 600;
    letter-spacing: 1.2px;
    font-size: 40px;
    border: solid 1px #121212;
    @media (min-width: 768px) {
        font-size: 67px;
   }
`
