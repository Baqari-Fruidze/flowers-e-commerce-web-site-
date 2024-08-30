import styled from "styled-components";
import floverVideoBg from "/image/loginBg.jpg";
import { useState, useEffect, useContext } from "react";
import { Context } from "../../App";

export default function MySetting(){
    const [changepass, setChangepass] = useState(true)
    const [isReview, setIsReview] = useState(false)
    
    const { tokenChecker, setTockenChecker, users, isMyProfile, setIsMyProfile, isAcount, setIsAcount } = useContext(Context);
  useEffect(() => {
    const tokenChecker = async () => {
      let token = localStorage.getItem("token");
      if (token) {
        token = JSON.parse(token);
        const res = await fetch("http://134.122.71.97:8000/auth/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer  ${token.access}`,
          },
        });
        if (res.ok) {
          setTockenChecker(true);
        } else console.log("No")
      }
    };
    tokenChecker();
  }, []);
  console.log(tokenChecker)
  console.log(users);
  console.log(isMyProfile)

    return(
        <>
        {isAcount ?(<Parent>
        <SettingCont>
            <Title>
                <div>
                    <BtnPers
                    changepass={changepass}
                    onClick={()=>{setChangepass(true)}}
                    >Persolan Info</BtnPers>
                    <BtnPass
                    changepass={changepass}
                    onClick={()=>{setChangepass(false)}}
                    >Change Password</BtnPass>
                </div>
                <div style={{display: "flex"}}>
                    <p>Hello, {users.username}</p>
                    <div style={{display: "flex", flexDirection: "column", gap: "2px", fontSize: "10px"}} >
                        <img src={users.profilePicture} alt="img" />
                        <button style={{border: "none", backgroundColor: "#f5f5f7"}}>Edit</button>
                    </div>
                </div>
            </Title>
{changepass ? (<MainInfo>
                <div className="infoTitleInfo">
                    <p className="infotitle">e-Mail</p>
                    <p>{users.email}</p>
                </div>

                <div>
                    <div className="infoTitleInfo">
                        <p className="infotitle">first Name, last Name</p>
                        <span >{users.first_name} <span >{users.last_name}</span></span>
                    </div>
                    <button>Edit</button>
                </div>

                <div>
                    <div className="infoTitleInfo">
                        <p className="infotitle">phone Number</p>
                        <p>{users.phoneNumber}</p>
                    </div>
                    <button>Edit</button>
                </div>
            </MainInfo> ) : null}
       

{!changepass ? (<Changepassword>
           
                <div className="infoTitleInfo">
                    <p>Password</p>
                    <p >{users.password}</p>
                </div>
                <button>Edit</button>
            

        </Changepassword> ) : null}

        <TitleIconBack>
            <h2 
            onClick = {()=>{setIsReview(true)}}
            className="Review">Leave us a Review</h2>
            <div>
                <h2
                onClick = {()=>{setIsMyProfile(true), setIsAcount(false)}}>back</h2>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 16.3613H3.16667C2.72464 16.3613 2.30072 16.1857 1.98816 15.8732C1.67559 15.5606 1.5 15.1367 1.5 14.6947V3.02799C1.5 2.58597 1.67559 2.16204 1.98816 1.84948C2.30072 1.53692 2.72464 1.36133 3.16667 1.36133H6.5" stroke="currentColor" stroke-width="1.71591" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.334 13.0296L16.5007 8.86296L12.334 4.69629" stroke="currentColor" stroke-width="1.71591" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 8.8623H6.5" stroke="currentColor" stroke-width="1.71591" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
        </TitleIconBack>
        </SettingCont>
        </Parent>) : null}
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
        gap: 30px;
        @media (min-width: 1440px) {
            flex-direction: row;
        }
        button{
            width: 200px;
            padding: 15px 10px;
            border-radius: 30px;
            font-size: 16px;
            cursor: pointer;  
        } 
    }
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        }
        .Review{

        }
        `

const BtnPers = styled.button<{changepass?: boolean}>`
    background-color: ${(props)=>(props.changepass ? "#64da88" : "#f5f5f7")}; 
    box-shadow: 0 5px 10px #121212; 
`
const BtnPass = styled.button<{changepass?: boolean}>`
    background-color: ${(props)=>(!props.changepass ? "#64da88" : "#f5f5f7")};
    box-shadow: 0 5px 10px #121212; 
`

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
            font-size: 16px;
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
        align-items: baseline;
        border-bottom: 1px solid #928f8f;
        padding-bottom: 10px;
        margin-top: 70px;
        button{
            border: none;
            background-color: #f5f5f7;
            font-size: 16px;
            margin-top: 100px;
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
const TitleIconBack = styled.div<{isMyProfile?: boolean}>`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    cursor: pointer;
    & > h2{
        color: #3ab561;
        font-size: 30px;
        text-shadow: 1px 2px #121212;
    }    
    div{
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
    & > h2{
        font-size: 30px;
        color:  #736d6d;
        text-shadow: 1px 2px #121212;
    }  
        :hover{
            color: #3ab561;
            } 
        }
   
   
`
