import React from 'react';
import { useNavigate } from 'react-router-dom'; //hook 
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [email,setEmail]= useState()
  const [pass,setPass]= useState()
  const [result,setResult]= useState()
  const Navigate =useNavigate(); // useNavigate us hook and navigate in varible
 
  const handleSubmit= () =>{
        Navigate("/signup");
  }
    const url= "http://localhost:8080/loginfind"
    const handleLogin= async() =>{
    const result = await axios.post(url,{email,pass})
 //console.log(result)
 //console.log(result.data.message) // return data which is getting/ stored in th result varible which is coming from backend node so it will print that true /false flag in console
 //let flag= result.data.message ? "Access Grandted "  : "Access Denied" ; //stored in flag
 //setResult(flag); // flag result passing setResult and stored into result

 if (result.data.message) 
 Navigate("/main");
else setResult("Access Denied");

  }

    return (
    <div>Login 
      <h2>{result}</h2> 
        <p> <input type="text" onChange={(e) =>setEmail(e.target.value)}  placeholder="Enter Email"></input> </p>
        <p> <input type="password" onChange={(e) =>setPass(e.target.value)} placeholder="Enter Password"></input> </p>
        <button onClick={handleLogin}>Login</button>
        <hr></hr>
        <button onClick={handleSubmit}>Create Account</button>

    </div>
  )
}
/*note : 1. <button onClick={handleSubmit}>Create Account</button> this is how we call function in reactjs
2. useNavigate is use to navigate one component to other components, its libraray is react-router-dom, here
 in the code function calling function */

/* note  : after login i am can see products page but the thing is without login also i would see all products from direct on main page 
so this get API is not secured API i would say so cause solution is we need token for it , controller, model, router also password should encrypted
in the mondodb should not show password */