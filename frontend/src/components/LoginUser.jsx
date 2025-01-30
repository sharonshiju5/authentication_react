import "../css/register.css"
import React from "react"
import { useState } from "react"
import { Link,useNavigate } from "react-router-dom";
function LogUser(){
    const [data, setData] = useState({
        email:"",
        password:"",
      })
      const navigate=useNavigate();
    const LoginUser =async(e)=>{
      e.preventDefault();
        try {
          const res = await fetch("http://localhost:3000/api/login",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
          })
          console.log(res);
            
            const{ msg,token}=await res.json();
            if(res.status==200){
                alert(msg)
                
                console.log(msg);
                
                sessionStorage.setItem("token",token);
                navigate("/");
            }else{
                // alert(msg);
            }
        } catch (error) {
          console.log(error);
          
        }
      }
    return(
        <>
    <div className="reg-container" id='container'>
        <div className="form-div" id='form-div'>
        <div className="form">
            <div className="second-div">
              <h1>login in account</h1>
              <div className="feilds">
                <form>
                  <input onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} type="text" name='email' placeholder='email' id='email' />
                  <input onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} type="text" name='password' placeholder='password' id='pass' />
                  <input  type="submit" onClick={LoginUser} value={"SIGN UP"} className='submit' />
                </form>
              </div>
            </div>
          </div>
          <div className="sign">
            <div>
              <h1 className="welcome">welcome back</h1>
              <div className="div">
              <p>to keep conected with us please <br />     register with your personal info</p>
              </div>
              <button>
                <Link to="/profile">SIGIN IN</Link>
              </button>
            </div>
          </div>
          
        </div>
    </div>









            {/* <div>
                <form action="">
                    <input onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} type="text"name='username' placeholder='username' />
                    <input onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} type="text"name='email' placeholder='email' />
                    <input onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} type="text"name='password' placeholder='password' />
                    <input onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} type="text"name='cpassword' placeholder='conform password' />
                    <button onClick={addUser}>Submit</button>
                </form>
            </div> */}
        </>
    )
}
export default LogUser