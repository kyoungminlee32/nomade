import './App.css';
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import AboutInfo01 from "./routes/AboutInfo01";

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/nomade" element={<Home />} />
        <Route path="/nomade/about" element={<About />} />
        <Route path=":AboutInfo01" element={<AboutInfo01 />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
