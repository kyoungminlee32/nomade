import React from "react";
function Header() {
  return (
    <div>
        <header id="header" className="header menu-container">
          <nav>
            <h1 className="headerTitle">allone Bank</h1>	
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

export default Header;
