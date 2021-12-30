import React from "react";
import Header from "./header/Header";
import Body from "./body/Body";
import Footer from "./Footer/Footer";
import { Routes, Route, Link } from "react-router-dom";
import About from './about/About'

import "./App.css";
  
function App() {
    return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
