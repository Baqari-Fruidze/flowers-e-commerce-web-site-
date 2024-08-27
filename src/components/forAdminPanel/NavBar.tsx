import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../../App"; 

export default function() {
    const {adminCategories, setAdminCategories } = useContext(Context);
    const {adminFlowers, setAdminFlowers} = useContext(Context);
    const {adminUsers, setAdminUsers} = useContext(Context);
    const {adminSubscriptions, setAdminSubscriptions} = useContext(Context);
    const {adminFaq, setAdminFaq} = useContext(Context);
    
    return(
        <>
        <NavBar>
           <ol>
                <ul onClick={(()=>{ 
                    setAdminCategories(adminCategories == false ? true : false);
                    setAdminFlowers(false)
                    setAdminUsers(false)
                    setAdminSubscriptions(false)
                    setAdminFaq(false)
                    })} >Categories</ul>
                <ul onClick={(()=>{ 
                    setAdminFlowers(adminFlowers == false ? true : false) 
                    setAdminCategories(false)
                    setAdminUsers(false)
                    setAdminSubscriptions(false)
                    setAdminFaq(false)
                    })} >Flowers</ul>
                <ul onClick={(()=>{ 
                    setAdminUsers(adminUsers == false ? true : false) 
                    setAdminCategories(false)
                    setAdminFlowers(false)
                    setAdminSubscriptions(false)
                    setAdminFaq(false)
                    })} >Users</ul>
                <ul onClick={(()=>{ 
                    setAdminSubscriptions(adminSubscriptions == false ? true : false) 
                    setAdminCategories(false)
                    setAdminFlowers(false)
                    setAdminUsers(false)
                    setAdminFaq(false)
                    })} >Subscriptions</ul>
                <ul onClick={(()=>{ 
                    setAdminFaq(adminFaq == false ? true : false) 
                    setAdminCategories(false)
                    setAdminFlowers(false)
                    setAdminUsers(false)
                    setAdminSubscriptions(false)
                    })} >FAQ</ul>
            </ol>
        </NavBar>
        </>
    )
}

const NavBar = styled.div`
    background-color: #f5f5f7;
    padding: 40px 16px 0;
    font-size: 14px;
    color: #121212;
    border-right: 1px solid #121212;
    border-left: 1px solid #121212;
    @media (min-width: 768px){
        font-size: 16px;
    }

    @media (min-width: 1440px){
        font-size: 18px;
    }

    ul{
        padding: 20px 0;
        cursor: pointer;
    }

`