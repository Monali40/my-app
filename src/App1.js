import React from 'react'
import { useState } from 'react'

export default function App1() {
const [num,setNum] = useState(0)
const [result,setResult] = useState(0)
const handleClick = () => {
  setResult(num*num)
}
  return (
    <div>
        <p><input type="number" onChange={(e) => setNum(e.target.value)}></input></p>
        <button onClick={handleClick}>Click</button>
        <hr></hr>
        {result}
    </div>
   
  )
}

/*notes :here e.tartget.value cature value from textbox and storing to setNUM and passing to num 
/* other eg-
 const handleSubmit =(name) => {
    alert(name)
}

<button onClick={() =>handleSubmit("Monali")}>Submit</button>*/

/*create app2.js write code -  useState example
const [n1,setN1]= useState()
const [n1,setN1]= useState()
const [result,setResult]= useState()
const handleAdd =() => {
setResult (Number(n1) + Number(n2));// need to convert string number to number 
}
<p><input type="number" onChange={(e) => setN1(e.target.value)}></input></p>
<p><input type="number" onChange={(e) => setN2(e.target.value)}></input></p>
<button onClick={handleAdd}>Add</button>
{result}*/


/* useEffect Example

import {useState,useEffect } from "react";

const [num,setN1]= useState();
const [num2,setN2]= useState();

useEffect(() =>{
    alert("useEffect called");
    },[num])

    return(
    <p><input type="text" onChange={(e) => setN1(e.target.value)}></input></p>
    <p><input type="text" onChange={(e) => setN2(e.target.value)}></input></p>
    )
}*/