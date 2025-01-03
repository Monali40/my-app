import React from "react";
import "./Footer.css";
// import Temp from "./Temp";

import { useState } from  "react";


export default function Footer() {
  console.log("Reloading");
  const [name, setName] = useState();
  const greet = () => {
    alert(name);
  };
  // const greet =()=>{
  //   alert("Hello")
  // }

  // const greet1 =(name)=>{
  //   alert(name)
  // }
  return (
    <div>
    <hr></hr> 
    <input type="text" onChange={(e)=>setName(e.target.value)}></input>
    <button onClick={greet}>Click</button>

    {/* <button onClick={()=>greet1("John")}>Click</button> */}
   {/* <Temp name="John" />  */}
   
   {/* if you want call anything from other js file  */}
    <h3 class="copy">@Copyright 2024. All right reserved.</h3>  
    </div>
  )
}
