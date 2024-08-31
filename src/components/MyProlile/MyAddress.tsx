import styled from "styled-components";
import floverVideoBg from "/image/loginBg.jpg";
import pin from "/image/pin.png"
import { ReactNode, useContext, useState } from "react";
import { Context } from "../../App";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaAddress } from "../../Scema/address";
export default function MyAddress() {
  const { setIsMyProfile, isAcount, setIsAcount } = useContext(Context);
  const [isAddressList, setIsAddressList] = useState(false);
  const [list, setList] = useState(false);
  const [address] = useState({
    city: "",
    street: "",
    houseNumber: "",
    note: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaAddress) });
  const foo: SubmitHandler<{
    city: string;
    houseNumber: number;
    street: string;
  }> = (data) => {
    console.log(data);
    console.log(errors);
    console.log("check");
    setIsAddressList(!isAddressList);
    setList(true);
  };
export default function MyAddress()
{
    const { setIsMyProfile, isAcount, setIsAcount } = useContext(Context)
    const [isAddressList, setIsAddressList] = useState(false)
    const [list, setList] = useState(false)
    const [address, setAddress] = useState({
        city: "",
        street: "",
        houseNumber: "",
        note: ""
    })
    const {register, handleSubmit, formState:{errors}} = useForm({resolver: yupResolver(schemaAddress)})
    
    const foo = ((data: any)=>{
        console.log({errors})
        setAddress(data)
        FormData = {
            ...data,
            city: "",
            street: "",
            houseNumber: 0, 
            note: ""
        }
        setIsAddressList(!isAddressList); setList(true)


    }) 

    const addUserAddress = (event: any)=>{
        event.preventDefault()
        const {name, value} = event.target;
        setAddress({
            ...address,
            [name]: value
        })
    }

    
    return(
    <>
    {isAcount ? (<Parent>
    {!isAddressList ? (<AddressList>
        <img src={pin}/>
        {!list ? ( 
        <div className="userAddress">
            <p>address list is empty</p>
            <button
            onClick={()=>{setIsAddressList(!isAddressList)}}
            >add address</button>
         </div>) :
        (<div className="userAddress">
            <p>CITY: <span>{address.city}</span></p>
            <p>STREET: <span>{address.street}</span></p>
            <p>N:<span>{address.houseNumber}</span></p>
            <p>NOTE: <span>{address.note}</span></p>
            <button
            onClick={()=>{setIsAddressList(!isAddressList)}}
        >edit address</button>
        </div>)
        }
       
       <TitleIconBack>
        <h2
            onClick = {()=>{setIsMyProfile(true), setIsAcount(false)}}>back</h2>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 16.3613H3.16667C2.72464 16.3613 2.30072 16.1857 1.98816 15.8732C1.67559 15.5606 1.5 15.1367 1.5 14.6947V3.02799C1.5 2.58597 1.67559 2.16204 1.98816 1.84948C2.30072 1.53692 2.72464 1.36133 3.16667 1.36133H6.5" stroke="currentColor" stroke-width="1.71591" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.334 13.0296L16.5007 8.86296L12.334 4.69629" stroke="currentColor" stroke-width="1.71591" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 8.8623H6.5" stroke="currentColor" stroke-width="1.71591" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </TitleIconBack>

    </AddressList>) : null}

              <TitleIconBack>
                <h2
                  onClick={() => {
                    setIsMyProfile(true), setIsAcount(false);
                  }}
                >
                  back
                </h2>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 16.3613H3.16667C2.72464 16.3613 2.30072 16.1857 1.98816 15.8732C1.67559 15.5606 1.5 15.1367 1.5 14.6947V3.02799C1.5 2.58597 1.67559 2.16204 1.98816 1.84948C2.30072 1.53692 2.72464 1.36133 3.16667 1.36133H6.5"
                    stroke="currentColor"
                    stroke-width="1.71591"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12.334 13.0296L16.5007 8.86296L12.334 4.69629"
                    stroke="currentColor"
                    stroke-width="1.71591"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16.5 8.8623H6.5"
                    stroke="currentColor"
                    stroke-width="1.71591"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </TitleIconBack>
            </AddressList>
          ) : null}

          {isAddressList ? (
            <>
              <AddAddress>
                <form className="add" onSubmit={handleSubmit(foo)}>
                  <InputCont>
                    <input
                      placeholder="Add City"
                      type="text"
                      {...register("city")}
                    />
                {errors.city ? (
                    <ErrorMessage>
                        {errors?.city?.message as ReactNode}
                    </ErrorMessage>
                ) : null}
                
                </InputCont>

                <InputCont>
                <input
                    placeholder="Add Street"
                    type="text" 
                    {...register ("street")}
                    />
                    {errors.street ? (
                    <ErrorMessage>
                        {errors?.street?.message as ReactNode}
                    </ErrorMessage>
                    ) : null }
                    </InputCont>

                    <InputCont>
                <input
                    placeholder="Add House Number"
                    type="number"
                    {...register ("houseNumber")}
                    />
                    {errors.houseNumber ? (
                        <ErrorMessage>
                            {errors?.houseNumber?.message as ReactNode}
                        </ErrorMessage>
                    ) : null}
                    </InputCont>

                    <InputCont>
                <input
                    placeholder="note for courier"
                    className="note"
                    type="text"
                    {...register ("note")}
                    />
                    {errors.houseNumber ? (
                        <ErrorMessage>
                            {errors?.note?.message as ReactNode}
                        </ErrorMessage>
                    ) : null}
                    </InputCont>
                    
                <div className="saveBack">
                    <button type="submit" className="save" >save</button>
                </div>
            </form>
            <button className="back" onClick = {()=> setIsAddressList(!isAddressList)}>back</button>
        </AddAddress>
        </>
        ) : null }

    
    </Parent>) : null}

    </>
  );
}

const InputCont = styled.div`
    width: 100%;
    position: relative;
    input{
        width: 100%;
    }
`
const ErrorMessage = styled.span`
    width: 100%;
    color: red;
    font-size: 12px;
    text-align: right;
    position: absolute;
    margin: 10px -102%;
`


const TitleIconBack = styled.div<{ isMyProfile?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  & > h2 {
    font-size: 30px;
    color: #736d6d;
    text-shadow: 1px 2px #121212;
    cursor: pointer;
  }
  :hover {
    color: #3ab561;
    font-size: 32px;
  }
`;
const Parent = styled.div`
  background-image: url(${floverVideoBg});
  display: flex;
  justify-content: center;
  padding: 40px;
`;
const AddressList = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 70vh;
  background-color: #f5f5f7;
  font-size: 16px;
  @media (min-width: 768px) {
    width: 50%;
  }

  button {
    padding: 10px;
    background-color: black;
    color: #f5f5f7;
    width: 200px;
    cursor: pointer;
    font-size: 18px;
  }
  .userAddress {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
    height: 70vh;
    background-color: #f5f5f7;
    font-size: 16px;
    @media (min-width: 768px){
        width: 50%;
    }
   
        button{
        padding: 10px;
        background-color: black;
        color: #f5f5f7;
        width: 200px;
        cursor: pointer;
        font-size: 18px;
    
    }
    .userAddress{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: left;
        gap: 10px;
    }
    img{
        width: 120px;
        height: 140px;
    }
    p {
        padding: 0 20px;
        font-weight: bold;
        span{
            font-weight: normal;
        }
    }
    
`

const AddAddress = styled.div`
  width: 100%;
  height: 70vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 2%;
  background-color: #f5f5f7;
  @media (min-width: 768px) {
    width: 50%;
    padding: 40px;
    gap: 10%;
  }
  .note {
    width: 100%;
    height: 70vh;
    padding: 40px;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f7;
    @media (min-width: 768px){
        width: 50%;
        padding: 40px;
        gap: 10%;
    }
    .note{
        width: 100%;
        height: 150px;
        @media (min-width: 768px){
            height: 150px;
        }
    }
    .add{
        display: flex;
        flex-direction: column;
        gap: 10px;
        input{
            padding: 10px; 
        }
    }
    
    .save{
        padding: 10px;
        width: 30%;
        box-shadow: 0 0 2px 2px #BBBB;
        font-size: 14px;
        cursor: pointer;
        background-color: black;
        color: #f5f5f7;
        margin-top: 18px;
        }
        
    .back{
        padding: 10px;
        width: 30%;
        box-shadow: 0 0 2px 2px #BBBB;
        font-size: 14px;
        cursor: pointer;
        margin: -39px 70%;  
        
        @media (min-width: 768px){
            margin: -75px 70%;
        }
    }
`
