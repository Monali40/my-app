import React from 'react'
import "./Main.css";
export default function Main() {
    const products = [
    {name:"Product 1", price:34},
    {name:"Product 2",price:74},
    {name:"Product 3",price:55},  
         ]   //creating array of Object and 3 elements and 3 objects // below display array use map funtion, mention attribute according means values
  return (
    <div className="row">
        { products.map((value, index) =>(
           <div className="box">
                <h3>{value.name}</h3>
                <h3>{value.price}</h3>
            <button>Add to Cart</button>
            </div>
        ))}
        
        
        
        </div>
        
         );
        }