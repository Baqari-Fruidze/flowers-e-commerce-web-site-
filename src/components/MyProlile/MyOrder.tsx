import styled from "styled-components";
import floverVideoBg from "/image/loginBg.jpg";
import { useEffect, useContext, useState } from "react";
import { Context } from "../../App";


export default function MyOrder(){
    const { users, setUsers} = useContext(Context);
    const [order, setOrder] = useState([{
            "RecipientsName": "",
              "Recipients_Phone_number": "",
              "DataofDelivery": "",
              "Delivery_Time": "",
              "street": "",
              "houseNumber": "",
              "total": 256,
              "items": [
                {
                  "product": {
                    "image": "",
                    "name": "Blue Harmony",
                    "price": 55,
                    "category": "fresh",
                    "description": "The bohemian spirit and undeniable beauty of Blue Harmony are hard to resist. Hints of blue, coupled with ivory and lavender, make it a harmonious choice that is both calming and balancing. It’s the obvious choice for adding some soft sweetness and tranquility to your space."
                
                  },
                  "quantity": 0
                }
              ]
    }])

    useEffect(() => {
        let token=localStorage.getItem("token")
        if (token) {
            token = JSON.parse(token)
        }
        async function fetchSubscriptions() {
          const response = await fetch("http://134.122.71.97:8000/api/order", 
            
            { method: "GET",
                headers: {Authorization: `Bearer ${token.access}`}}
          );
          const data = await response.json();
          setOrder(data);
        }
        fetchSubscriptions();
      },[]);

      console.log(users)
    return(
        <>
        <Parent>
            <OrderCont>
                <DeliverInfo>
                    <h2>delivery info</h2>
                    <div>
                        <p>DataofDelivery</p>
                        <p>DataofDelivery</p>
                        <p>Delivery_Time</p>
                        <p>street</p>
                        <p>houseNumber</p>
                    </div>
                </DeliverInfo>

                <h2 style={{marginTop: "30px"}}>product info</h2>
                <Title>
                    <p>N</p>
                    <p>image</p>
                    <p>category</p>
                    <p>name</p>
                    <p>description</p>
                    <p>quantity</p>
                    <p>price</p>
                </Title>


                <Product>
                <p>N</p>
                    <p>image</p>
                    <p>category</p>
                    <p>name</p>
                    <p>description</p>
                    <p>quantity</p>
                    <p>price</p>
                </Product>


                <p>total:  <span>100 EUR</span></p>
                

            </OrderCont>
        </Parent>
        </>
        )
    
    }
    const Parent = styled.div`
        display: flex;
        @media (min-width: 768px){
            background-image: url(${floverVideoBg});
            padding: 40px;
        }
    `
    const OrderCont = styled.div`
        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        justify-content: left;
        gap: 30px;
        width: 90%;
        height: 60vh;
        background-color: #f5f5f7;
        font-size: 12px;
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

    const DeliverInfo = styled.div`
        display: flex;
        gap: 10px;
        justify-content: left;

    `

    const Title = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 10px;
    `
    const Product = styled.div`
    display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 10px
    `