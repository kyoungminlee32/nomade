import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './static/css/main.css';
import UIPDA1002 from "./contents/UI/PDA/UIPDA1002";
import UIPDA02013 from "./contents/UI/PDA/UIPDA02013";
import UIPDA1001 from "./contents/UI/PDA/UIPDA1001";
import Introduction from "./contents/UI/PDA/Introduction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nomade" exact={true} element={<UIPDA1002 />} />
        <Route path="/nomade/UIPDA02013" element={<UIPDA02013 />} />
        <Route path="/nomade/introduction" element={<Introduction />} />
        <Route path="/nomade/UIPDA1001" element={<UIPDA1001 />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
