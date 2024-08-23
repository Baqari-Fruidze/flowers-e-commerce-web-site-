import React, { useState, useContext } from "react";
import styled from "styled-components";
import data from "../../data.json"
import { Context } from "../../App"

export default function Subscriptions(){
    const { addSubscriptions, setAddSubscriptions} = useContext(Context)
    const dataSubscriptions = data.datas[3].subscription
    
    async function add(event : any) {
        event.preventDefault()
        dataSubscriptions.push(addSubscriptions)
        setAddSubscriptions({
            image: "",
            category: "",
            price: 0,
            delivery: "",
            theBest: "",
            firstDelivery: "",
            firstDelivery2: "",
            saveUp: 0
        })}
       
    const addSubscription = (event: any)=>{
    event.preventDefault()
    const {name, value} = event.target;
    setAddSubscriptions({
        ...addSubscriptions,
        [name]: value,
    })}


    return(
<>       
<MainCategories>
<h2>List of Subscriptions</h2>
<div className="titleContainer">
        <div className="descr" >
            <p style={{width: "45px"}} className="userName">Picture</p>
            <p style={{width: "60px"}} className="userName">Category</p>
            <p style={{width: "30px"}} className="userName">Price</p> 
            <p style={{width: "70px"}} className="userName">The Best</p> 
            <p style={{width: "60px"}} className="userName">First delivery</p>
            <p style={{width: "70px"}} className="userName">First delivery</p> 
            <p style={{width: "80px"}} className="userName">save Up</p>
        </div>
</div>
  <div className="listSubscriptions">
      
     {dataSubscriptions?.map((item, index)=>(
      <div className="container" key={index}>
        <div className="descr">
            <img className="userImg" src={item.image} alt="" />
            <p style={{width: "60px"}} className="userName">{item.category}</p> 
            <p style={{width: "30px"}} className="userName">{item.price}</p> 
            <p style={{width: "70px"}} className="userName">{item.theBest}</p>
            <p style={{width: "60px"}} className="userName">{item.firstDelivery}</p>
            <p style={{width: "70px"}} className="userName">{item.firstDelivery2}</p>
            <p style={{width: "70px"}} className="userName">{item.saveUp}</p>
        </div>
        <div className="editDelete">
            {/* <button>Edit</button> */}
            <button
            onClick={()=>{
                dataSubscriptions.splice(index, 1)
                setAddSubscriptions({...addSubscriptions})
                }}
            >Delete</button>
        </div>      
      </div>
     ))}
  </div>
  <form 
  className="addContainer">
    <h2>Add Subscriptions</h2>
    <div className="field">
        <input 
        placeholder="Add subscriptions's category"
        className="inputSubscriptions" 
        type="text" 
        name="category"
        value={addSubscriptions.category}
        onChange={addSubscription}
        />
        <input 
        placeholder="Add subscriptions's price"
        className="inputSubscriptions" 
        type="text" 
        name="price"
        value={addSubscriptions.price}
        onChange={addSubscription}
        />
        <input 
        placeholder="Add subscriptions's theBest"
        className="inputSubscriptions" 
        type="text" 
        name="theBest"
        value={addSubscriptions.theBest}
        onChange={addSubscription}
        />
        <input 
        placeholder="Add subscriptions's firstDelivery"
        className="inputSubscriptions" 
        type="text" 
        name="firstDelivery"
        value={addSubscriptions.firstDelivery}
        onChange={addSubscription}
        />
        <input 
        placeholder="Add subscriptions's firstDelivery2"
        className="inputSubscriptions" 
        type="text" 
        name="firstDelivery2"
        value={addSubscriptions.firstDelivery2}
        onChange={addSubscription}
        />
        <input 
        placeholder="Add subscriptions's saveUp"
        className="inputSubscriptions" 
        type="text" 
        name="saveUp"
        value={addSubscriptions.saveUp}
        onChange={addSubscription}
        />
        <input 
        className="chooseFile" 
        type="file"
        value={addSubscriptions.image} />
    </div>
    <button 
    onClick={add}
    className="addBt">Add</button>
  </form> 
</MainCategories>
</>
    )
}

const MainCategories = styled.div`
    background-color: #eaf07740;
    padding: 20px 0 20px 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 20px;

    .listSubscriptions{
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 30vh;
        overflow-y: scroll;
    }

    

    .container, .editDelete{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        border-radius: 8px;
        margin-right: 10px;
        
    }
    .titleContainer{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        border-bottom: 1px solid #121212;
        font-size: 20px;
        font-weight: 600;
        p{
            font-size: 20px;
        }
}

    .container{
        border-bottom: 1px solid #121212;
    }
    .descr{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
    
    .userName{
        color: #121212;
        font-size: 12px;
        text-align: left;
    }
    .userImg{
        width: 50px;
        height: 50px;

    }

    .addContainer{
        display: flex;
        flex-direction: column;
        gap: 5px
    }

    .field{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 300px;
    }

    button{
        width: 100px;
        padding: 5px 10px;
        border-radius: 8px;
        border: 1px solid #121212;
        cursor: pointer;
    }

    .chooseFile{
        padding: 4px;
        border-radius: 8px;
        cursor: pointer;
    }

    .inputUser{
        padding: 5px 15px;
    }

`
