import React, { useState,useEffect } from 'react'

export default function App3() {
    const[num, setNum] = useState("1")
    const[num2, setNum2] = useState()
useEffect (()=>{
    if (num ==="1") setNum2("One")
        else if (num === "2") setNum2("Two")
    else setNum2("Unknown");
    // setNum2 ("useEffect called"); //fist time components get loaded/calling/ refresh page call this useEffect 
},[num])
  return (
    <div>
        <p><input type="text" onChange={(e)=>setNum(e.target.value)}></input></p>
        <p><input type="text" value={num2} onChange={(e)=>setNum2(e.target.value)}></input></p>
        <hr></hr>
    </div>
  )
}
