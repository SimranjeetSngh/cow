import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import About from "../Components/About";
import Home from "../Components/Home";
import Contact from "../Components/ContactUs";
import ServicePage from "../Components/Services";
import Footer from "../Components/Footer";

const CowApp = () => {

  return (

   
     
      
     
          <Router>
            <Header />
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicePage />} />

              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer/>
          </Router>
        
      )
    }

export default CowApp
