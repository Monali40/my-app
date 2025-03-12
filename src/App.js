
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Admin from "./Admin";
import Cart from "./Cart";
import { createContext, useState } from "react";


export const userName= createContext();// Create a context for user information

export default function App() {
  const [user, setUser] = useState(""); // Manage the user state (the name of the logged-in user)
  return (
    <div>
      <BrowserRouter>
      <userName.Provider value={{user, setUser}}> {/* This will now have access to the user's name */}
        
        <Header/>
        <Routes>
          <Route index element={<Main />} />
          <Route path="main" element={<Main />} />
          <Route path="cart" element={<Cart/>} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
        <Footer />
        
        </userName.Provider>
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
