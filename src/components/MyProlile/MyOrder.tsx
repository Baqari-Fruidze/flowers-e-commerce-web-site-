import styled from "styled-components";
import floverVideoBg from "/image/loginBg.jpg";
import { useEffect, useContext, useState } from "react";
import { Context } from "../../App";


export default function MyOrder(){
    
    const { users, setUsers, isMyProfile, setIsMyProfile, isAcount, setIsAcount} = useContext(Context);
    const [showOrder, setShowOrder] = useState(false)
        const [order, setOrder] = useState([{
            "RecipientsName": "",
              "Recipients_Phone_number": "",
              "DataofDelivery": "",
              "Delivery_Time": "",
              "city": "",
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

      console.log(order)
      console.log(isAcount)
    return(
<>
{isAcount ? (<Parent>
    <MainCont>
         
        <Orders>
        {order.map((item, index) => (
            <Order key = {index}>
                <OrderNumber>
                    <p
                    onClick={(() => {setShowOrder (showOrder !== index ? order.indexOf(item) : null) })}
                    >Order Number N</p>
                </OrderNumber>
                <OrderCont
                style={showOrder !== index
                    ? {display: "none"}
                    : {display: "block"} 
                }
                >
                
                <DeliverInfo>    
                    <h2>delivery info</h2>
                    <div>
                        <div> 
                            <p>date of delivey: {item.DataofDelivery}</p>
                            <p>delivety time: {item.Delivery_Time}</p>
                        </div>
                        <div>
                            <p>city: {item.city}</p>
                            <p>street: {item.street}</p>
                            <p>house N: {item.houseNumber}</p>
                        </div>
                    </div>
                </DeliverInfo>
    
                <h2 style={{marginTop: "30px"}}>product info</h2>
                <Products>
                    <Title>
                        <p>N</p>
                        <p>image</p>
                        <p>category</p>
                        <p>name</p>
                        <p>description</p>
                        <p>quantity</p>
                        <p>price</p>
                    </Title>

                    {order[0].items.map((prod, index) =>(
                    <>
                        <Product>
                            <p>{index+1}</p>
                            <p>{prod.product.image}</p>
                            <p>{prod.product.category}</p>
                            <p>{prod.product.name}</p>
                            <p>{prod.product.description}</p>
                            <p>{prod.quantity}</p>
                            <p>{prod.product.price}</p>
                        </Product>
                        <p className="total">Total:  <span>{prod.product.price} EUR</span></p>
                    </>
                    ))}
                </Products>
                </OrderCont>
            </Order>
))}
        </Orders> 
            
        <TitleIconBack>
            <h2 onClick = {()=>{setIsMyProfile(true), setIsAcount(false)}}>back</h2>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 16.3613H3.16667C2.72464 16.3613 2.30072 16.1857 1.98816 15.8732C1.67559 15.5606 1.5 15.1367 1.5 14.6947V3.02799C1.5 2.58597 1.67559 2.16204 1.98816 1.84948C2.30072 1.53692 2.72464 1.36133 3.16667 1.36133H6.5" stroke="currentColor" stroke-width="1.71591" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.334 13.0296L16.5007 8.86296L12.334 4.69629" stroke="currentColor" stroke-width="1.71591" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 8.8623H6.5" stroke="currentColor" stroke-width="1.71591" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </TitleIconBack>
    </MainCont>
</Parent> ) : null}
</>
)}
    const Parent = styled.div`
        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        @media (min-width: 768px){
            background-image: url(${floverVideoBg});
            padding: 40px;
        }
    `
    const MainCont = styled.div`
        padding: 20px;
        display: flex;
        flex-direction: column;
        background-color:#f5f5f7;
        height: 500px;
    `
    const Orders = styled.div`
        display: flex;
        flex-direction: column;
        gap: 5px;
        height: 400px;
        overflow-y: auto;
    `
    const Order = styled.div`
        display: flex;
        flex-direction: column;
        /* gap: 20px; */
    `
    const OrderNumber = styled.div`
        background-color: #64da88;
        /* padding: 10px 0; */
        p{
            font-size: 20px;
            cursor: pointer;
            padding: 10px;
        }
    `
    const OrderCont = styled.div`
        /* padding: 20px 10px; */
        display: flex;
        flex-direction: column;
        justify-content: left;
        /* gap: 30px; */
        width: 90%;
        background-color: #f5f5f7;
        font-size: 12px;
        & > p{
            font-size: 20px;
            font-weight: bold;
            border-top: 1px solid #121212;
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
    const Products = styled.div`
        display: flex;
        flex-direction: column;
        /* gap: 20px; */

    `

    const DeliverInfo = styled.div`
        display: flex;
        flex-direction: column;
        /* gap: 20px; */
        & > div{
            display: flex;
        flex-direction: row;
        gap: 250px;
        }

    `

    const Title = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
        margin-top: 10px;
        background-color: #c7cdc7;
        padding: 5px;
        /* flex-direction: row; */
        /* justify-content: space-around; */
        /* gap: 10px; */
    `
    const Product = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
        justify-content: space-around;
        border-top: 1px solid #121212;
    `
    const TitleIconBack = styled.div<{isMyProfile?: boolean}>`
        display: flex;
        flex-direction: row;
        justify-content: end;
        gap: 20px;
        align-items: center;
        padding: 10px;
        border-top: 1px dashed #adaaaa;
    & > h2{
        font-size: 30px;
        color:  #736d6d;
        text-shadow: 1px 2px #121212;
        cursor: pointer;
        }  
    :hover{
        color: #3ab561;
        font-size: 32px;
        }     
   
`