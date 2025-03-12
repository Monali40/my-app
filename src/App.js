import React, { createContext, useContext, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Login from "./Login";
import Signup from "./Signup";
import Admin from "./Admin";
import AppContext from "./AppContext";

// export const UserContext = createContext(AppContext);// changes for UseContext

export default function App() {

  // const uc = useContext(AppContext);
  return (
    <div>
      

      <BrowserRouter>
        <Header/> {/* Displays logged-in name */}
        <Routes>
          <Route index element={<Main />} />
          <Route path="main" element={<Main />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

/*Note:  <Main/> // later added BrowserRouter remove this main 
//  <Route index element={<Main />} /> <Route path="home" element={<Main />} />//main page call by default
// <header/> calling header components control will go header.js
// 
// */

//use props parameter name,age
