// import nav1 from '../asset/1.jpg';
import img4 from "../assets/4.png"
import { Link } from "react-router-dom";
import "../App.css";
function Nav(){
    return(
        <div className="nav">
            <div className="nav-box">
                <div className="logo">
                    <h1>Zee</h1>
                </div>
                <div className="ul">
                    <ul>
                        <li><a href="./index.html">home</a></li>
                        <li><a href="./pages/about.html">about</a></li>
                        <li><a href="./home.html">shop</a></li>
                        <li><a href="./home.html">contact</a></li>
                    </ul>
                </div>
                <div className="icons">
                    {/* <img src={} alt=""/> */}
                    <img src="./asset/shopping-bag.png" alt=""/>
                </div>
            </div>
            <div className="nav-div">
                <div className="navs">
                    <img src={img4} className="not" alt=""/>
                </div>
                <div className="navs">
                    <h3 id="username">  </h3><div className="person-img"><img src="./asset/1.jpg" id="profile" alt=""/></div>
                </div>
                <hr/>
                <div className="navs">
                    <Link to="/profile">
                    <h4>Log out</h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Nav;