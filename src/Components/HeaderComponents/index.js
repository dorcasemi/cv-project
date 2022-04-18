import React from "react";
import './index.css';
import logo from'../image/sidehustlelogo.png';



const HeaderComponents =()=>{

    return(
    <>
       <div className="header">
        <div className="logoSect">
        <img src={logo} className ="logoImg"/>
        </div>
    <div className="navBar">
    <a href="#">For Employers</a>
    <a href="#">FAQs</a>
    
    </div>
    
    <div className="navBtn">
    <button className="btnTop1">Log In</button>
    <button className="btnTop2">Learn For Free</button>
    </div>
    </div>
    
    </>
    );
    }
    
    export default HeaderComponents;