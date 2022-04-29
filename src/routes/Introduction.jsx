import {React, useState} from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Collapsible from "../components/Collapsible";
import SlideUp from "../components/SlidePopup01";
import SlideCenter from "../components/SlidePopup02";

function Introduction() {
    const [slidecenter,setSlideCenter] =useState(false);
    const [slidebottom,setSlideBottom] =useState(false);
    const showCenterOPen = () => {
      setSlideCenter(!slidecenter);
      document.modalWrap.className='show'
    }
    const showBottomOPen = () => {
      setSlideBottom(!slidebottom);
      document.modalWrap.className='show'
    }
    return(
      <div>
        {/* #wrap */}
        <div id="wrap">
          <Header />
          <div id="container">
            <div className="content" data-role="content">
              <section className="with-fixedBtn">
                <div style={{width:'100%',height:'900px',background:'#ddd'}}>
                  <Nav />
                  <Collapsible label="this is the lable">
                    <div>
                      <h1>this is the Collapsible</h1>
                      <p><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">react-spring is a spring-physics based animation library that should cover most of your UI related animation needs. It gives you tools flexible enough to ...</a></p>
                      <p>react-spring is a spring-physics based animation library that should cover most of your UI related animation needs. It gives you tools flexible enough to ...</p>
                    </div>
                  </Collapsible>
                  <Collapsible label="click me">
                    <div>
                      <ul>
                        <li>some sutff</li>
                        <li>some sutff</li>
                        <li>some sutff</li>
                      </ul>
                    </div>
                  </Collapsible>
                  <Collapsible label="smile">
                    <form>
                      <input type="datetime-local" />
                      <button>Submit</button>
                    </form>
                  </Collapsible>
                  <ul className="columnSet selfBottom">
                    <li className="colItem"><button type="button" className="btn primary cancel" onClick={showCenterOPen}>중앙 팝업열기</button></li>
                    <li className="colItem"><button type="submit" className="btn primary submit" onClick={showBottomOPen}>하단 팝업열기</button></li>
                  </ul>
                  <SlideCenter fixcenter={slidecenter} setFixCenter={setSlideCenter} />
                  <SlideUp fixbottom={slidebottom} setFixBottom={setSlideBottom} />
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* //#wrap */}
      </div>
    )
}

export default Introduction;
