import styled from "styled-components";
import floverVideoBg from "/image/loginBg.jpg";
import { useState } from "react";

export default function MySetting(){
    const [changepass, setChangepass] = useState(true)
    

    return(
        <>
        <Parent>
        <SettingCont>
            <Title>
                <div>
                <button
                onClick={()=>{setChangepass(true)}}
                >Persolan Info</button>
                <button
                onClick={()=>{setChangepass(false)}}
                >Change Password</button>
                </div>
                <img src={floverVideoBg} alt="img" />
            </Title>
{changepass ? (<MainInfo>
                <div className="infoTitleInfo">
                    <p className="infotitle">e-Mail</p>
                    <p className="info">katrinazuus@gmail.com</p>
                </div>

                <div>
                    <div className="infoTitleInfo">
                        <p className="infotitle">first Name, last Name</p>
                        <span  className="info">admin <span  className="info">admin</span></span>
                    </div>
                    <button>Change</button>
                </div>

                <div>
                    <div className="infoTitleInfo">
                        <p className="infotitle">Mobile Number</p>
                        <p className="info">577054010</p>
                    </div>
                    <button>Change</button>
                </div>
            </MainInfo> ) : null}
       

{!changepass ? (<Changepassword>
           
                <div className="infoTitleInfo">
                    <p className="infotitle">Mobile Number</p>
                    <p className="info">577054010</p>
                </div>
                <button>Change</button>
            

        </Changepassword> ) : null}
        </SettingCont>
        </Parent>
        </>
        )
    }
const Parent = styled.div`
    display: flex;
    padding: 20px;
    @media (min-width: 768px){
        background-image: url(${floverVideoBg});
        padding: 40px;
    }
`
const SettingCont = styled.div`
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 70px;
    width: 100%;
    height: 600px;
    background-color: #f5f5f7;
    font-size: 14px;
    @media (min-width: 768px){
        padding: 40px;
    }
    & > p{
        font-size: 20px;
        font-weight: bold;
        & > span {
        font-size: 16px;
        font-weight: normal;
    }
    }
    @media (min-width: 768px){
        width: 100%;
        padding: 40px;
        font-size: 16px;
    }
`
const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        @media (min-width: 768px) {
            flex-direction: row;
        }
        button{
            width: 200px;
            padding: 15px 10px;
            border-radius: 30px;
            background-color: #83d4d6;
            font-size: 16px;
        }
    }
    
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        }`

const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    & > div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 10px;
        border-bottom: 1px solid #928f8f;
        padding-bottom: 10px;
        button{
            border: none;
            background-color: #f5f5f7;
        }
        
    }
    .infoTitleInfo{
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

    .infotitle{
    font-size: 18px;
    font-weight: bold;
    }
`
const Changepassword = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid #928f8f;
        padding-bottom: 10px;
        margin-top: 110px;
        button{
            border: none;
            background-color: #f5f5f7;
        }
        
    .infoTitleInfo{
        
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

    .infotitle{
    font-size: 18px;
    font-weight: bold;
    }
`
