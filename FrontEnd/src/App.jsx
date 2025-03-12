import Bottom from "./Bottom";
import Navbar from "./Navbar";

import Home from "./Home/Home";
import React from "react";
import About from "./About/About";
import Contact from "./Contact/Main";
import Product from "./Products/Products";
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from "./Register/Register";
import Login from "./Login/Login";







function App() {
  return (
    <div>
        <Navbar />
        
        <div className="content"> 

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Product />} />
            <Route path="/sign" element={<Register />} />
            <Route path="/login" element={< Login/>} />
          </Routes>
        </div> 
        

       <Bottom />


    </div>
  );


}

export default App;