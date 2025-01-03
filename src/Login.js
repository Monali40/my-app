import React from 'react';
import { useNavigate } from 'react-router-dom'; //hook 


export default function Login() {
  const Navigate =useNavigate();
  const handleSubmit= () =>{
        Navigate("/signup");
  }
    return (
    <div>Login
        <p> <input type="text" placeholder="Enter Email"></input> </p>
        <p> <input type="password" placeholder="Enter Password"></input> </p>
        <button>Login</button>
        <hr></hr>
        <button onClick={handleSubmit}>Create Account</button>

    </div>
  )
}
/*note : 1. <button onClick={handleSubmit}>Create Account</button> this is how we call function in reactjs
2. useNavigate is use to navigate one component to other components, its libraray is react-router-dom, here
 in the code function calling function */
