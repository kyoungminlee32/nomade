import {React, useState} from "react";
import {Link} from "react-router-dom";
import SideBar from "./SideBar";

function MainHead() {
  const [SideBar,setSideBar] = useState(false);

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
                <input type="checkbox" className="headerNav navBtn" id="all_menu" onClick={() => setSideBar(true)} /><label htmlFor="all_menu">전체메뉴</label>
              </li>
            </ul>
          </nav>
        </header>
        {/* <!-- 잔체메뉴 --> */}
        <SideBar trigger={SideBar} setTrigger={setSideBar} />
        {/* <!-- // 전체메뉴 --> */}
    </div> 
    
  )
}

export default MainHead;
