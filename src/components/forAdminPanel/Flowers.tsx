import React, { useState, useContext } from "react";
import styled from "styled-components";
import data from "../../data.json"
import { Context } from "../../App"

export default function Flowers(){
    const [addFlowers, setAddFlowers] = useState({
        name: "",
        price: 0,
        category: "",
        description: "",
        inStock: 0,
        src: null
    })
    const dataFlowers = data.datas[1].flowers
    
    console.log(data.datas[1].flowers)

    async function add(event) {
        event.preventDefault()
        dataFlowers.push(addFlowers)
        setAddFlowers({
            "name": "",
            "price": 0,
            "category": "",
            "description": "",
            "inStock": 0,
            "src": null
        })}
       
    const addFlower = (event)=>{
    event.preventDefault()
    const {name, value} = event.target;
    setAddFlowers({
        ...addFlowers,
        [name]: value,
    })}


    return(
<>       
<MainCategories>
<h2>List of Flowers</h2>
<div className="titleContainer">
        <div className="descr">
            <p style={{width: "45px"}} className="flowerName"> Picture</p>
            <p style={{width: "50px"}} className="flowerName">Name</p> 
            <p style={{width: "50px"}} className="flowerName">Category</p> 
            <p style={{width: "260px"}} className="flowerName">Description</p>
            <p style={{width: "20px"}} className="flowerName">Price</p> 
            <p className="flowerName">InStock</p>
        </div>
</div>
  <div className="listFlowers">
      
     {dataFlowers?.map((item, index)=>(
      <div className="container" key={index}>
        <div className="descr">
            <img className="flowerImg" src={item.src} alt="" />
            <p style={{width: "50px"}} className="flowerName">{item.name}</p> 
            <p style={{width: "50px"}} className="flowerName">{item.category.name}</p> 
            <p style={{width: "280px"}} className="flowerName">{item.description}</p>
            <p style={{width: "10px"}} className="flowerName">{item.price}</p>
            <p className="flowerName">{item.inStock}</p>
        </div>
        <div className="editDelete">
            <button>Edit</button>
            <button>Delete</button>
        </div>      
      </div>
     ))}
  </div>
  <form 
//   onChange={addCategory}
  className="addContainer">
    <h2>Add flowers</h2>
    <div className="field">
        <input 
        placeholder="Add flower's name"
        className="inputFlower" 
        type="text" 
        name="name"
        value={addFlowers.name}
        onChange={addFlower}
        />
        <input 
        placeholder="Add flower's category"
        className="inputFlower" 
        type="text" 
        name="category"
        value={addFlowers.category}
        onChange={addFlower}
        />
        <input 
        placeholder="Add flower's description"
        className="inputFlower" 
        type="text" 
        name="description"
        value={addFlowers.description}
        onChange={addFlower}
        />
        <input 
        placeholder="Add flower's price"
        className="inputFlower" 
        type="text" 
        name="price"
        value={addFlowers.price}
        onChange={addFlower}
        />
        <input 
        placeholder="Add flower's QTY inStock"
        className="inputFlower" 
        type="text" 
        name="inStock"
        value={addFlowers.inStock}
        onChange={addFlower}
        />
        <input 
        className="chooseFile" 
        type="file"
        value={addFlowers.image} />
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
    gap: 20px;
    font-size: 20px;

    .listFlowers{
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 28vh;
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
    
    .flowerName{
        color: #121212;
        font-size: 12px;
        text-align: left;
    }
    .flowerImg{
        width: 50px;
        height: 50px;

    }

    .addContainer{
        display: flex;
        flex-direction: column;
        gap: 10px
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

    .inputFlower{
        padding: 5px 15px;
    }

`



