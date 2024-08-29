
import styled from "styled-components";
import craftedBouquets from "/image/4.jpg";
import gifts from "/image/2.webp";
import specialDay from "/image/3.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function OurFounderPassion() {
    AOS.init({
        duration: 1000,
      })
    return(
        <>
            <MainCont >
                <Found  data-aos="fade-up">
                    <p>ABOUT US</p>
                    <h1>Our Founder's Passion</h1>
                    <p  className="about">Flowers Luxurious Bouquets was founded in 2010 by Natalia Zelinska  with the goal of bringing unique and exquisite bouquets to the people of Kyiv. Natalia has always had a passion for flowers and design, and his vision was to create a local floral studio that would specialize in the creation and delivery of fresh, beautiful, and distinctive bouquets.</p>
                </Found>    

                <ExpertlyCraftedBouquets>
                    <img  data-aos="fade-up" src={craftedBouquets} alt="" />
                    <div>
                        <h1 data-aos="fade-up">Expertly Crafted Bouquets</h1>
                        <p data-aos="fade-up"className="desc">At Kyiv LuxeBouquets, we take pride in our team of talented and experienced florists who carefully select each bloom, ensuring that only the freshest and most stunning flowers make it into our bouquets. We work directly with farms to source the highest quality flowers, and our skilled florists expertly craft each bouquet to perfection.</p>
                    </div>
                </ExpertlyCraftedBouquets>

                <BouquetsGiftsAmbiance>
                    <div  className="imgRight">
                        <img data-aos="fade-up" src={gifts} alt="" />
                        <div>
                            <h1 data-aos="fade-up" >Expertly Crafted Bouquets</h1>
                            <p data-aos="fade-up">At Kyiv LuxeBouquets, we take pride in our team of talented and experienced florists who carefully select each bloom, ensuring that only the freshest and most stunning flowers make it into our bouquets. We work directly with farms to source the highest quality flowers, and our skilled florists expertly craft each bouquet to perfection.</p>
                        </div>
                    </div>
        
                    <div  data-aos="fade-up" className="imgLeft">
                        <div>
                            <h1 data-aos="fade-up" >Expertly Crafted Bouquets</h1>
                            <p data-aos="fade-up">At Kyiv LuxeBouquets, we take pride in our team of talented and experienced florists who carefully select each bloom, ensuring that only the freshest and most stunning flowers make it into our bouquets. We work directly with farms to source the highest quality flowers, and our skilled florists expertly craft each bouquet to perfection.</p>
                        </div>
                        <img data-aos="fade-up" src={gifts} alt="" />
                    </div>
                </BouquetsGiftsAmbiance>

                <MakingEveryDaySpecial>
                    <img data-aos="fade-up" src={specialDay} alt="" />
                    <div>
                        <h1 data-aos="fade-up">Expertly Crafted Bouquets</h1>
                        <p data-aos="fade-up">At Kyiv LuxeBouquets, we take pride in our team of talented and experienced florists who carefully select each bloom, ensuring that only the freshest and most stunning flowers make it into our bouquets. We work directly with farms to source the highest quality flowers, and our skilled florists expertly craft each bouquet to perfection.</p>
                    </div>
                </MakingEveryDaySpecial>
            </MainCont>
        </>
        
    )
}

const MainCont = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #121212;
    
`
const Found = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 40px 16px;
    color: #121212;
    border-bottom: 1px solid #121212;
    & > p{
        font-size: 12px;
        @media (min-width: 1440px){
            font-size: 24px;
        }
    }
    & > h1{
        margin: 24px 0 16px;
        @media (min-width: 1440px){
            font-size: 36px;
            margin: 30px;
        }
    }
    .about{
        font-size: 18px;
        line-height: 1.2;
        opacity: 0.7;
        @media (min-width: 1440px){
            font-size: 22px;
        }
    }

    @media (min-width: 1440px){
            padding: 70px 400px;
        }

`

const ExpertlyCraftedBouquets = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #121212;
    @media (min-width: 1440px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    }
    & > div{
        padding: 40px 16px;
        border-bottom: 1px solid #121212;
        @media (min-width: 1440px){
            padding:170px 80px;
        }
        & > p{
            font-size: 18px;
            color: #6e6c6c;
        margin: 24px 0 44px;
        @media (min-width: 1440px){
            font-size: 24px;
            margin: 100px 0 80px;
            }    
        }
    & > h1{
        margin: 24px 0 16px;
        @media (min-width: 1440px){
            font-size: 36px;
            }
        }
    }
        img{
            height:100%;
            width: 100%;
            border-bottom: 1px solid #121212;
            @media (min-width: 1440px){
            border-right: 1px solid #121212;
            }
        }
`

const BouquetsGiftsAmbiance = styled.div`
    .imgRight{
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #121212;
        & > div{
            padding: 40px 16px;
            border-bottom: 1px solid #121212;
            & > p{
                font-size: 18px;
                color: #6e6c6c;
            margin: 24px 0 44px;
            }
            & > h1{
                margin: 24px 0 16px;
            }
        }
        img{
            height:100%;
            width: 100%;
            border-bottom: 1px solid #121212;
        }
        @media (min-width: 1440px){
            display: none;
        }      
    }
    .imgLeft{
        display: none;
        @media (min-width: 1440px){
            display: grid;
            grid-template-columns: 1fr 1fr;
                /* & > img{
                width: 100%;
                height: 100%;
                } */
            }
        div{
            @media (min-width: 1440px){
            text-align: center;
            font-size: 36px;
            padding: 170px 80px;
            }
            & > p{ 
                @media (min-width: 1440px){
                font-size: 24px;
                margin-top: 100px;
                color: #6e6c6c;
                } 
            }  
            & > h1{
            @media (min-width: 1440px){
            font-size: 36px;
            }
        }  
    }  
        img{
            @media (min-width: 1440px){
            border-left: 1px solid #121212;
            height:100%;
            }
        }
}
`
const MakingEveryDaySpecial = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #121212;
    @media (min-width: 1440px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    }
    & > div{
        padding: 40px 16px;
        border-top: 1px solid #121212;
        @media (min-width: 1440px){
            padding:170px 80px;
        }
        & > p{
            font-size: 18px;
            color: #6e6c6c;
        margin: 24px 0 44px;
        @media (min-width: 1440px){
            font-size: 24px;
            margin: 100px 0 80px;
            }    
        }
    & > h1{
        margin: 24px 0 16px;
        @media (min-width: 1440px){
            font-size: 36px;
            }
        }
    }
        img{
            width: 100%;
            height:100%;
            @media (min-width: 1440px){
            border-right: 1px solid #121212;
            border-top: 1px solid #121212;
            }
        }
`