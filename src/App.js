import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './static/css/main.css';
import Home from "./routes/Home";
import About from "./routes/About";
import UIPDA1001 from "./routes/UIPDA1001";

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/nomade" element={<Home />} />
        <Route path="/nomade/about" element={<About />} />
        <Route path="/nomade/UIPDA1001" element={<UIPDA1001 />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
