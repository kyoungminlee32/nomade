import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";

function About() {
  return (
    <div>
        {/* #wrap */}
        <div id="wrap">
                <Header />
          <div id="container">
            <div className="content" data-role="content">
              <section className="with-fixedBtn">
                <div style={{width:'100%',height:'900px',background:'#ddd'}}>
                  <Nav />
                  소개페이지
                </div>
              </section>
            </div>
          </div>
          <footer id="footer"></footer>
        </div>
        {/* //#wrap */}
    </div> 
    
  )
}

export default About;
