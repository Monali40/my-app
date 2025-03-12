import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState,useContext } from 'react'
import { UserContext } from './App'
import AppContext from './AppContext'

export default function Signup() {
  // const uc = useContext(Context);// changes useContext
  //const [name,setName]= useState()

  const uc = useContext(AppContext)

  const [email,setEmail]= useState()
  const [pass,setPass]= useState() // whatever we type in frontend textbox like name,email,pass it will store in variable (setName) and pass to varible name,email.pass by useState
  
  const Navigate = useNavigate()

  const handleSubmit=()=>{
    Navigate("/login")
  }

  const url = "http://localhost:8080/users1"
  const handleSignup = async()=>{
    alert(uc.getName())
    const result= await axios.post(url,{name:uc.getName(),email:email,pass:pass})
    // uc.setName(name);
    Navigate("/Main")// when any new user signup button will navigate to Main page it will show all products to user
    
  }
  return (
    <div>Signup
        <p> <input type="text" onChange={(e) =>{uc.setName(e.target.value)}} placeholder="Enter Name"></input> </p> 
        <p> <input type="text" onChange={(e) =>setEmail(e.target.value)} placeholder="Enter Email"></input> </p>
        <p> <input type="password" onChange={(e) =>setPass(e.target.value)} placeholder="Enter Password"></input> </p>
       
        <button onClick={handleSignup}>Signup</button>
        <hr></hr>
       
        <button onClick={handleSubmit}>Already a member ? Login here</button>

    </div>

  )
}
