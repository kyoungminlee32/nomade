import React from "react";
import {Link} from "react-router-dom";
function MainHead() {
  return (
    <div>
        <header id="header" className="header menu-container main colour1">
          <nav>
            <h1 className="headerTitle"><Link to="/nomade">allone Bank</Link></h1>	
            <ul className="columnSet rightedColumn">
              <li>
                <button className="headerNav alarmBtn push">알림</button>
              </li>
              <li>
                <input type="checkbox" className="headerNav navBtn" id="all_menu" /><label htmlFor="all_menu">전체메뉴</label>
              </li>
            </ul>
          </nav>
        </header>
    </div> 
    
  )
}

export default MainHead;
