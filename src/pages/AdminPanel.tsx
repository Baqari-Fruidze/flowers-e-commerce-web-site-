import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../App";
import HeaderAdminPanel from "../components/forAdminPanel/HeaderAdminPanel"
import NavBar from "../components/forAdminPanel/NavBar";
import Flowers from "../components/forAdminPanel/Flowers";
import Users from "../components/forAdminPanel/Users";
import Categories from "../components/forAdminPanel/Categories";
import Subscriptions from "../components/forAdminPanel/Subsciptions";
import FAQ from "../components/forAdminPanel/FAQ";


export default function AdminPanel() {
    const {adminCategories} = useContext(Context);
    const {adminFlowers} = useContext(Context);
    const {adminUsers} = useContext(Context);
    const {adminSubscriptions} = useContext(Context);
    const {adminFaq} = useContext(Context);
    
    console.log(adminCategories)
    return(
        <>
        <HeaderAdminPanel />

        <MainCont>
            <NavBar />
            {adminCategories ?  <Categories /> : null}
            {adminFlowers ?  <Flowers /> : null}
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
    height: 90vh;
`