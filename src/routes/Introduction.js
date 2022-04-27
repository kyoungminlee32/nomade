import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Collapsible from "../components/Collapsible";

function Introduction() {
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
                      <p>react-spring is a spring-physics based animation library that should cover most of your UI related animation needs. It gives you tools flexible enough to ...</p>
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
