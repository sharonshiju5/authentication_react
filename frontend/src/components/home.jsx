import Nav from "./nav"
import "../css/home.css"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"
import { useEffect } from "react"
import { Link,useNavigate } from "react-router-dom";
import { data } from "react-router-dom"
function HomePage({setID}){
  const navigate=useNavigate();

    const Token =async()=>{
        try {
            const token=localStorage.getItem("token")
            // console.log(token);
            if (!token) {
            //     console.error("No token found!");
                alert("You need to log in first.");
                navigate("/login")
                  
                return;
            }
          const res = await fetch("http://localhost:3000/api/home",{
            method:"GET",
            headers:{
              "Content-Type":"application/json",
              Authorization:`Bearer ${token}`
            },
          })
          const data=await res.json()
          console.log(data);
          
          if (res.status === 200) {
            const name=data.username
            console.log(name);
            // setUser(name);
            setID(name);
            console.log(name);
            
            
          }
        } catch (error) {
          console.log(error);
          
        }
      }
      useEffect(() => {
        Token();
      }, []);
          return(
        <div className="section">
         {/* <ToastContainer /> */}
        
        <div className="container">
            <div className="divs">
                <h1>Zee e-commerce</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit beatae amet, ut architecto maiores aspernatur eos dolore impedit rem dignissimos modi perferendis sunt velit expedita totam eaque qui labore.</p>
            </div>
            <div className="divs">
                <img src={img2} alt="" id="img1"/>
            </div>
        </div>
        <div className="container" id="cnt">
            <div className="divs">
                <h1>Zee e-commerce</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit beatae amet, ut architecto maiores aspernatur eos dolore impedit rem dignissimos modi perferendis sunt velit expedita totam eaque qui labore.</p>
            </div>
            <div className="divs">
              <img src="" alt="" />
                <img src={img3} alt="" id="img2" />
            </div>
        </div>
        </div>
    )
}
export default HomePage