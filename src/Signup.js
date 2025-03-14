import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { userName } from './App'; // Import the context



export default function Signup() {
  const {setUser} = useContext(userName); // Accessing setUser from context
  const [email,setEmail]= useState("")
  const [pass,setPass]= useState("") // whatever we type in frontend textbox like name,email,pass it will store in variable (setName) and pass to varible name,email.pass by useState
  const [name, setName] = useState(""); // Managing name input separately

  const Navigate = useNavigate()

  const handleSubmit=()=>{
    Navigate("/login")
  }

  const url = "http://localhost:8080/users1"
  const handleSignup = async()=>{
    
    const result= await axios.post(url,{name,email,pass});
    setUser(name); // Set the name in the context after successful signup
    Navigate("/Main")// when any new user signup button will navigate to Main page it will show all products to user
    
  }
  return (
    <div>Signup
        <p> <input type="text" onChange={(e) =>setName(e.target.value)} placeholder="Enter Name"></input> </p> 
        <p> <input type="text" onChange={(e) =>setEmail(e.target.value)} placeholder="Enter Email"></input> </p>
        <p> <input type="password" onChange={(e) =>setPass(e.target.value)} placeholder="Enter Password"></input> </p>
       
        <button onClick={handleSignup}>Signup</button>
        <hr></hr>
       
        <button onClick={handleSubmit}>Already a member ? Login here</button>

    </div>

  )
}

