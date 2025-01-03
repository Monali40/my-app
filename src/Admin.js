import React, { useState } from 'react'
import axios from 'axios' //need to update mongodb when add products by admin
export default function Admin() {
 const [name,setName]= useState()
 const [price,setPrice]= useState()
 const url ="http://localhost:8080/"
 const handleSave = async()=>{
  const result= await axios.post(url,{name:name,price:price}) //need to config to mongodb and also use url which localhost 8080 and alos mentioned exact name, price
  //->abribute/variable here from nodejs name(leftside) which is exact from nodejs/mongodb mentioned and rightside(name) is which is mentioned in above 
  //->code as const[name,setName] which is called local variable// it will follow nodejs app.post and insert product in mongodb
//need to add product so we need post //this is return promise so add asyc n await// can aslo stored that result in varible
 }
 
  return (
    <div> <h3>Admin</h3>
    <p><input type="text" onChange={(e)=>setName(e.target.value)}  placeholder="Enter Product Name"></input></p>
    <p><input type="text" onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Price"></input> </p>
    <button onClick={handleSave}>Save</button>

    </div>
  )
}
