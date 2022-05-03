import React, {useState} from 'react';
import {Link} from "react-router-dom";

function Tabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabContArr=[
    {
        tabTitle:(
          <li className={activeIndex===0 ? "colItem is-on" : "colItem"} onClick={()=>tabClickHandler(0)}><Link to="#/" onClick={e => e.preventDefault()}>탭1</Link></li>
        ),
        tabCont:(
            <div id="tabCont1" className={activeIndex===0 ? "tabContent is-current" : "tabContent"}>탭1 내용</div>
        )
    },
    {
        tabTitle:(
          <li className={activeIndex===1 ? "colItem is-on" : "colItem"} onClick={()=>tabClickHandler(1)}><Link to="#/" onClick={e => e.preventDefault()}>탭2</Link></li>
        ),
        tabCont:(
            <div id="tabCont2" className={activeIndex===1 ? "tabContent is-current" : "tabContent"}>탭2 내용</div>
        )
    }
  ];
  const tabClickHandler=(index)=>{
    setActiveIndex(index)
  }

  return (
    <>
      <nav class="tabNav tabOverflow">
        <ul className="columnSet">
          {tabContArr.map((section, index)=>{
            return section.tabTitle
          })}
        </ul>
      </nav>
      
      {/* // activeIndex의 탭콘트만 보여줌! */}
      <div>
        { tabContArr[activeIndex].tabCont }
      </div>
    </> 
    
  )
}

export default Tabs;
