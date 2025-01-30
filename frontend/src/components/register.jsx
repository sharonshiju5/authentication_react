import "../css/register.css"
import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom";

function CreateUser(){
    const [data, setData] = useState({
        username:"",
        email:"",
        password:"",
        cpassword:""
      })
    const addUser=async()=>{
        try {
          const res = await fetch("http://localhost:3000/api/adduser",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
          })
          console.log(res);
          
        } catch (error) {
          console.log(error);
          
        }
      }
    return(
        <>
        <div className="reg-container" id='container'>
        <div className="form-div" id='form-div'>
          <div className="sign">
            <div>
              <h1 className="welcome">welcome back</h1>
              <div className="div">
              <p>to keep conected with us please <br />     login with your personal info</p>
              </div>
              <button>
                <Link to="/login">SIGIN IN</Link>
              </button>
            </div>
          </div>
          <div className="form">
            <div className="second-div">
              <h1>create account</h1>
              <div className="feilds">
                <form>
                  <input onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} type="text" name='username' placeholder='name' id='name' />
                  <input onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} type="text" name='email' placeholder='email' id='email' />
                  <input onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} type="text" name='password' placeholder='password' id='pass' />
                  <input onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} type="text" name='cpassword' placeholder='conform password' id='pass' />
                  <input  type="submit" onClick={addUser} value={"SIGN UP"} className='submit' />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default CreateUser