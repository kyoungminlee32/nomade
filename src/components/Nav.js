import React from "react";
import {Link} from "react-router-dom";
function Nav() {
  return (
    <div>
      <ul className="tab_list">
        <li><Link to="/nomade">Home</Link></li>
        <li><Link to="/nomade/about">About</Link></li>
        <li><Link to="/nomade/UIPDA1001">UIPDA1001</Link></li>
      </ul>
    </div> 
    
  );
}

export default Nav;