import { useContext } from "react";
import styled from "styled-components";
import floverVideoBg from "/image/loginBg.jpg";
import { Context } from "../App";
import HeaderAdminPanel from "../components/forAdminPanel/HeaderAdminPanel"
import NavBar from "../components/forAdminPanel/NavBar";
import Products from "../components/forAdminPanel/Products";
import Users from "../components/forAdminPanel/Users";
import Categories from "../components/forAdminPanel/Categories";
import Subscriptions from "../components/forAdminPanel/Subsciptions";
import FAQ from "../components/forAdminPanel/FAQ";


export default function AdminPanel() {
    const {adminCategories} = useContext(Context);
    const {adminProducts} = useContext(Context);
    const {adminUsers} = useContext(Context);
    const {adminSubscriptions} = useContext(Context);
    const {adminFaq} = useContext(Context);
    
    return(
        <>
        <HeaderAdminPanel />
        <MainCont>
            <NavBar />
            {adminCategories ?  <Categories /> : null}
            {adminProducts ?  <Products /> : null}
            {adminUsers ?  <Users /> : null}
            {adminSubscriptions ?  <Subscriptions /> : null}
            {adminFaq ?  <FAQ /> : null}
        </MainCont>
        
        </>
    )
}

const MainCont=styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    border-bottom: 1px solid #121212;
    border-right: 1px solid #121212;
    height: 90vh;
    width: 100%;
    background-image: url(${floverVideoBg});
    background-repeat: no-repeat;
    background-size: 500vh;
    @media (min-width: 768px){
        background-size: 200vh;
    }
    @media (min-width: 1440px){
        background-size: 100%;
    }
`