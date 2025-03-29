import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import About from "../Components/About";
import Contact from "../Components/ContactUs";
import Home from "../Components/Home";
import ServicePage from "../Components/Services";

const CowApp = () => {

  return (

   
     
      
     
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<ServicePage />} />

            </Routes>
          </Router>
        
      )
    }

export default CowApp
