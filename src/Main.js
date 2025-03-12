import React, { useContext, useEffect, useState } from 'react'
import "./Main.css";
import axios from 'axios'; // use axios to connect to mangodb ->node js->reactjs, like configured database to frontdata
import { UserContext } from './App';
import AppContext from './AppContext';

export default function Main() {

const [products,setProducts] = useState([])// here we used useState //stored data in products which array of objects

const myContext = useContext(AppContext)


const url ="http://localhost:8080/"
const showProducts = async() =>{ //fetch data
 const response =await axios.get(url)// retruns promise - cont update the value of product utill you get 
 //  response, line 9 only execute after line 8 is completed
 console.log(products.data)
 setProducts(response.data)
}
    useEffect(()=>{
        showProducts() //As soon as page loads componet showproducts will be called fetch data and stored data in productswhich array of objects
        //and displayed in below loop (map)

    },[])
//so allabove comment to understand how to fetch data from mongodb->nodejs->reactjs



    const addToCartOnClick = (products) =>{
       const id =  products._id;
    //    const cart = myContext.cart;
    //    if(cart[id]==null || cart[id]===undefined){
    //      myContext.cart[id] = 1
    //    }else{
    //         myContext.cart[id] = cart[id] + 1
    //    }
    //    console.log(myContext)
    }


    // const products = [
    // {name:"Product 1", price:34},
    // {name:"Product 2",price:74},
    // {name:"Product 3",price:55},  
    //      ]   //creating array of Object and 3 elements and 3 objects // below display array use map funtion, mention attribute according means values
  return (
    
    <div className="row">
        { products.map((value, index) =>(
           <div className="box">
                <h3>{value.name}</h3>
                <h3>${value.price}</h3>
            <button onClick={()=>{
                addToCartOnClick(value)
            }}>Add to Cart</button>
            </div>
        ))}
        
        
        
        </div>
        
         );
        }