import styled from "styled-components";
import floverVideoBg from "/image/loginBg.jpg";

export default function MyLikes(){
    return(
    <>
    <LikesCont>
        <p>address</p>
    </LikesCont>

    </>
    )

}
const LikesCont = styled.div`
     background-image: url(${floverVideoBg});
`