import { useContext,  useEffect, } from "react";
import styled from "styled-components";
import { Context } from "../../App"

export default function Users(){
    const {users, setUsers}=useContext(Context)

      useEffect(() => {
        async function fetchUsers() {
          const response = await fetch("http://134.122.71.97:8000/api/signup");
          const data = await response.json();
          setUsers(data);
        }
        fetchUsers();
      },[]);

      async function deleteUser(userId: any){
        const responce = await fetch(`http://134.122.71.97:8000/api/signup/${userId}`, {
            method: "DELETE", 
            },)
        }
    
    return(
<>       
<MainCategories>
<h2>List of Users</h2>
<div className="titleContainer">
        <div className="descr" >
            <p style={{width: "45px"}} className="userName">Picture</p>
            <p style={{width: "30px"}} className="userName">User Name</p>
            <p style={{width: "120px"}} className="userName">e-mail</p> 
            <p style={{width: "50px"}} className="userName">Last name</p> 
            <p style={{width: "50px"}} className="userName">First name</p>
            <p style={{width: "60px"}} className="userName">Password</p> 
            <p style={{width: "20px"}} className="userName">phone Number</p>
        </div>
</div>
  <div className="listUsers">
      
     {users?.map((item, index)=>(
      <div className="container" key={index}>
        <div className="descr">
            <img className="userImg" src={item.profilePicture} alt="" />
            <p style={{width: "30px"}} className="userName">{item.username}</p> 
            <p style={{width: "120px"}} className="userName">{item.email}</p> 
            <p style={{width: "50px"}} className="userName">{item.last_name}</p>
            <p style={{width: "50px"}} className="userName">{item.first_name}</p>
            <p style={{width: "50px"}} className="userName">{item.password}</p>
            <p style={{width: "70px"}} className="userName">{item.phoneNumber}</p>
        </div>
        <div className="editDelete">
            <button
             onClick={() => {
                deleteUser(item.id)
              }}
            >Delete</button>
        </div>      
      </div>
     ))}
  </div>
  
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

    .listUsers{
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

    .inputUser{
        padding: 5px 15px;
    }

`
