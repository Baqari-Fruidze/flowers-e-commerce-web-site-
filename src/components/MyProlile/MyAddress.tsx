import styled from "styled-components";
import floverVideoBg from "/image/loginBg.jpg";
import pin from "/image/pin.png"
import { useState } from "react";

export default function MyAddress()
{
    const [isAddressList, setIsAddressList] = useState(false)
    const [list, setList] = useState(false)
    const [address, setAddress] = useState({
        city: "",
        street: "",
        houseNumber: "",
        note: ""
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
    <Parent>
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
            <p>CITY: {address.city}</p>
            <p>STREET: {address.street}</p>
            <p>N:{address.houseNumber}</p>
            <p>NOTE: {address.note}</p>
            <button
            onClick={()=>{setIsAddressList(!isAddressList)}}
        >edit address</button>
        </div>)
        }
       
    </AddressList>) : null}

    {isAddressList ? (
        <>
        <AddAddress>
            <div className="add">
                <input
                    placeholder="Add City"
                    name= "city"
                    value = {address.city}
                    type="text"
                    onChange={addUserAddress} />
                <input
                    placeholder="Add Street"
                    name= "street"
                    value = {address.street}
                    type="text" 
                    onChange={addUserAddress} />
                <input
                    placeholder="Add House Number"
                    name= "houseNumber"
                    value = {address.houseNumber}
                    type="text"
                    onChange={addUserAddress} />
                <input
                    placeholder="note for courier"
                    className="note"
                    name= "note"
                    value = {address.note}
                    type="text" 
                    onChange={addUserAddress} />
            </div>

            <div className="saveClear">
                <button
                    className="save"
                    onClick={() => { setIsAddressList(!isAddressList); setList(true)} }
                    >save</button>
                <button
                    className="clear"
                    onClick={() => { setIsAddressList(!isAddressList)} }
                    >back</button>
            </div>
        </AddAddress>
        </>
        ) : null }
    </Parent>
   

    </>
    )

}
const Parent = styled.div`
     background-image: url(${floverVideoBg});
     display: flex;
     justify-content: center;
     padding: 40px;
     
`
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
        height: 150px;
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
    @media (min-width: 768px){
        width: 50%;
        padding: 40px;
        gap: 10%;
    }
    .note{
        height: 150px;
        @media (min-width: 768px){
            height: 200px;
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
    .saveClear{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 10px;
        }
 
    .save{
        padding: 10px;
        width: 30%;
        box-shadow: 0 0 2px 2px #BBBB;
        font-size: 14px;
        cursor: pointer;
        background-color: black;
        color: #f5f5f7;
        }
        
        .clear{
            padding: 10px;
            width: 30%;
            box-shadow: 0 0 2px 2px #BBBB;
            font-size: 14px;
            cursor: pointer;
        }
`