import React, { useState } from 'react'

export default function App4() {
    const [count,setCount] = useState(0)
    
    const handleIncrement =() =>{
        setCount ( count +1);
     } 
     const handleDecrement =() =>{
        setCount ( count -1);
     } 
     
     
     return (
    <div>
        <p>
            <button onClick={handleDecrement}> -  </button> 
            <button onClick={handleIncrement}>  +  </button>
            <hr></hr>
            {count}
        </p>
    </div>
  )
}
