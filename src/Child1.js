import React, { useContext } from 'react'
import {a} from './App5'

export default function Child1() {
    const {user,setUser} = useContext(a) //To access user vaiable first need to extract user variable
    
    const handleSubmit=()=>{
        setUser("Karan")
    }

  return (
    <div>
        {user} 
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
// {user} -to  access user vaiable from app5.js value assigned in the parent component

// useContext - use for only for sending the values to another components and instead of props can use 