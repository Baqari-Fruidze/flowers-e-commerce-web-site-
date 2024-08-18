import React from "react";
import styled from "styled-components";
import FlowerSubscription from "../components/forSubscribe/FlowerSubscription";
import HowDoesItWork from "../components/forSubscribe/HowDoesItWork";
import SelectingAPlan from "../components/forSubscribe/SelectingAPlan";

export default function Subscribe() {
    
    return(
        <>
        <FlowerSubscription />
        <HowDoesItWork />
        <SelectingAPlan />
        
        </>
    )
}