import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './static/css/main.css';
import UIPDA1002 from "./routes/UIPDA1002";
import About from "./routes/About";
import UIPDA1001 from "./routes/UIPDA1001";
import Introduction from "./routes/Introduction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nomade" exact={true} element={<UIPDA1002 />} />
        <Route path="/nomade/about" element={<About />} />
        <Route path="/nomade/about/introduction" element={<Introduction />} />
        <Route path="/nomade/UIPDA1001" element={<UIPDA1001 />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
