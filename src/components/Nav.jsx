import React from "react";
import {Link} from "react-router-dom";
function Nav() {
  return (
    <div>
      <ul className="tab_list">
        <li><Link to="/nomade">UIPDA1002</Link></li>
        <li><Link to={{
          pathname:"/nomade/UIPDA02013",
          state:{
            fromNavigition:true
          }
        }}>UIPDA02013</Link></li>
        <li><Link to="/nomade/UIPDA1001">UIPDA1001</Link></li>
      </ul>
    </div> 
  );
}

export default Nav;