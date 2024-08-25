import React, { useContext } from "react";
import styled from "styled-components";
import data from "../../data.json"
import { Context } from "../../App"

export default function Categories(){

    const {addCategories, setAddCategories} = useContext(Context);
    const dataCategories = data.datas[0].categories
    
    console.log(data.datas[0].categories)


    function add(event: any) {

        event.preventDefault()
        dataCategories.push(addCategories)
        dataCategories({
            "name": "",
            "image": ""
    })}

    const addCategory = (event: any)=>{
        const formData = new FormData()
        formData.append(
            "name", addCategories.name
        )
        if (addCategories.files.length > 0) {
                // Get the first file (assuming single file upload)
                const imageFile = addCategories.image.files[0];
            
                // Append the image file to the FormData object
                formData.append('image', imageFile, imageFile.name);
            }
        
    event.preventDefault()
    const {name, value} = event.target;
    dataCategories({
        ...addCategories,
        [name]: value,
    })}

   
    return(
<>       
<MainCategories>
<h2>List of Categories</h2>
<div className="titleContainer">
        <div className="descr">
            <p className="CatName">Picture</p>
            <p className="CatName">names</p> 
        </div>     
      </div>
  <div className="listCategories">
     {dataCategories?.map((item, index)=>(
      <div className="container" key={index}>
        <div className="descr">
            <img className="CatImg" src={item.image} alt="" />
            <p className="CatName">{item.name}</p> 
        </div>
        <div className="editDelete">
            {/* <button>Edit</button> */}
            <button
            onClick={()=>{
                dataCategories.splice(index, 1)
                setAddCategories({...addCategories})
                }}
            >Delete</button>
        </div>      
      </div>
     ))}
  </div>
  <form 
  className="addContainer">
    <h2>Add category</h2>
    <div className="field">
        <input 
        placeholder="Add Category"
        className="inputCateg" 
        type="text" 
        name="name"
        value={addCategories.name}
        onChange={addCategory}
        />
        <input 
        className="chooseFile" 
        type="file"
        name= "image"
        value={addCategories.image} 
        onChange={addCategory}
        />
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

    .listCategories{
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 50vh;
        overflow-y: scroll;
    }

    .container, .editDelete{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        border-radius: 8px;
        margin-right: 20px;
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
        align-items: center;
        gap: 20px;
    }
    
    .CatName{
        color: #121212
    }
    .CatImg{
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
        flex-direction: row;
        gap: 10px
    }

    button{
        width: 100px;
        padding: 10px 15px;
        border-radius: 8px;
        border: 1px solid #121212;
        cursor: pointer;
    }

    .chooseFile{
        padding: 4px 15px;
        border-radius: 8px;
        cursor: pointer;
    }

    .inputCateg{
        padding: 5px 15px;
    }

`



