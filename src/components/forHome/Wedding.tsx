import React from "react";
import styled from "styled-components";
import weddingImg from "/image/wedding.jpg"

export default function Wedding(){
    return(
        <>
            <WeddingService>
                <p className="service">SERVICE</p>
                <h1>Wegging & Event Decor</h1>
                <p className="weddingDescr">Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.</p>
                <button>INQUIRE NOW</button>
            </WeddingService>

        </>
    )
}

const WeddingService=styled.div`
    background-image: url(${weddingImg});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 150%;
    width: 100%;
    height: 100vh;
    color: #fff;
    padding: 51px 16px;
    @media (min-width: 768px){
        background-size: 100%;
    }

`