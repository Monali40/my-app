import React, { createContext,useState } from 'react'
import Child1 from ''./Child1'

export const a = createContext()

export default function App5() {
    const [user,setUser] = useState("Monali"); // user - variable

    const handleSubmit=()=>{
        setUser("Patil")
    }

  return (
    <a.Provider value={{user,setUser}}>
        {user}
        <button onClick={handleSubmit}>Submit</button>
        <hr></hr>
        <Child1 /> 
    </a.Provider>
  )
};
//App.js - parent component is <a.provider>
// <child1> - child component 
//<a.provider >- user value assign in the parent component in user usestate variable [user] accesseable inside child1 also can have multiple component
// a user context can have value which pass through parent to child