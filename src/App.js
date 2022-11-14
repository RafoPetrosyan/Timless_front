import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "views/Home";
import Services from "views/Services";
import Gallery from "views/Gallery";
import AboutUs from "views/AboutUs";
import Contact from "views/Contact";

const App = () => (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/about-us' element={<AboutUs/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
)

export default App;
