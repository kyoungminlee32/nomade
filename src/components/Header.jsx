import {React, useState} from "react";
import {Link} from "react-router-dom";
import SideBars from "./SideBar";

function Header() {
  const [SideBar,setSideBar] =useState(false);
  const showOPen = () => {
    setSideBar(!SideBar);
    document.body.className='noScroll'
  }
  return (
    <div>
        <header id="header" className="header menu-container">
          {/* <nav>
            <h1 className="headerTitle"><Link to="/nomade">allone Bank</Link></h1>	
            <ul className="columnSet rightedColumn">
              <li>
                <button className="headerNav alarmBtn push">알림</button>
              </li>
              <li>
                <input type="checkbox" className="headerNav navBtn" id="all_menu" onClick={showOPen} /><label htmlFor="all_menu">전체메뉴</label>
              </li>
            </ul>
          </nav> */}
          <nav role="presentation">
            <ul className="columnSet leftedColumn col-valign">
              <li>
              <Link to="#/" onClick={e => e.preventDefault()} className="headerNav backBtn" role="button">뒤로가기</Link>
              </li>
            </ul>
            <h1 className="headerTitle"><Link to="/nomade">allone Bank</Link></h1>
            <ul className="columnSet rightedColumn">
              <li>
                <button className="headerNav alarmBtn push">알림</button>
              </li>
              <li>
                <input type="checkbox" className="headerNav navBtn" role="button" onClick={showOPen} />
                <label htmlFor="navBtn" id="openNav"></label>
              </li>
            </ul>
          </nav>
        </header>
        {/* <!-- 잔체메뉴 --> */}
        <SideBars trigger={SideBar} setTrigger={setSideBar} />
        {/* <!-- // 전체메뉴 --> */}
    </div> 
  )
}

export default Header;
