import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { userName } from './App'


export default function Header(props) {
 
 const {user} =useContext(userName); // Accessing the user from the context
  
  return (
    <div className="header">
      
      <h1 style={{ color: "Black", display: "flex",justifyContent: "space-between",paddingLeft:"10px" }}>
         Home Foodie {user && <span style={{paddingRight:"10px" }}>Welcome, {user}</span>}</h1> {/* Display user's name if it's set */}
      <p style={{ backgroundColor: "silver" }}>
        <Link to="/main">Home</Link> | <Link to="/cart">Cart</Link> |
        <Link to="/admin">Admin</Link> |<Link to="/login">Login</Link>
      </p>
      <hr></hr>
      {/* <p>{user && `Welcome, ${user}`}</p> Display user's name if it's set */}
    </div>
  );
}
//use props parameter name,age
