import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../../App";

export default function Categories(){
    const {categories, setCategories} = useContext(Context);
    const [addCategory, setAddCategory] = useState({
        id: 0,
        name: "",
        image: ""
    })

    useEffect(() => {
        async function fetchCategories() {
          const response = await fetch("http://134.122.71.97:8000/api/category");
          const data = await response.json();
          setCategories(data);
        }
        fetchCategories();
      },[]);
      console.log(addCategory)
    
      const addCateg = (event: any) => {
        event.preventDefault();
        const { name, value } = event.target;
        setAddCategory({
          ...addCategory,
          [name]: value,
        });
      };
      console.log(addCategory)

      const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        setAddCategory({
            ...addCategory,
            image: file
        });
    };
    console.log(addCategory)



      async function addNewCategory(event: any) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', addCategory.name);
        formData.append('image', addCategory.image);

        let token=localStorage.getItem("token")
        if (token) {
            token = JSON.parse(token)
        }
        const response = await fetch (
          "http://134.122.71.97:8000/api/category",
        {method: "POST",
         headers: {
          Authorization: `Bearer ${token.access}`
         },
         body: formData,
        });
         const newCategory = await response.json();
          setCategories([...categories, newCategory]);  
          console.log(categories)
          setAddCategory({ id: 0, name: "", image: ""});
        }
        console.log(addCategory)
        console.log(categories)
    
        async function deleteCategory(categoryId: any){
        const responce = await fetch(`http://134.122.71.97:8000/api/category/${categoryId}`, {
              method: "DELETE", 
              },)
          }
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
     {categories?.map((item, index)=>(
      <div className="container" key={index}>
        <div className="descr">
            <img className="CatImg" src={item.image}/>
            <p className="CatName">{item.name}</p> 
        </div>
        <div className="editDelete">
            {/* <button>Edit</button> */}
            <button onClick={()=>deleteCategory(item.id)}>Delete</button>
        </div>      
      </div>
     ))}
  </div>
  <form 
  className="addContainer">
    <h2>Add new category</h2>
    <div className="field">
        <input 
        placeholder="Add Category"
        className="inputCateg" 
        type="text" 
        name="name"
        value={addCategory.name}
        onChange={addCateg}
        />
        <input 
        className="chooseFile" 
        type="file"
        onChange={handleFileChange}
        />
    </div>
    <button 
    type="submit"
    onClick={addNewCategory}
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
        color: #121212;
        font-size: 16px;
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



