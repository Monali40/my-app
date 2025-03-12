import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import AppContext from "./AppContext";

export default function Header(props) {
  // const myStyle = {
  //   background-color: 'silver'
  // }

  const abc = useContext(AppContext);

  useEffect(()=>{
    alert(abc.getName())
  },[])

  return (
    <div className="header">
      <h1 style={{ color: "blue" }}>Online Store {abc.getName()}</h1>
      
      
      {/* <span>{Object.keys(abc.cart).length}</span> */}
      
      <p style={{ backgroundColor: "silver" }}>
        <Link to="/main">Home</Link> | <Link to="/cart">Cart</Link> |
        <Link to="/admin">Admin</Link> |<Link to="/login">Login</Link>
      </p>
      <hr></hr>
    </div>
  );
}
//use props parameter name,age
