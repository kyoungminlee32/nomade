import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import {Link} from "react-router-dom";

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
                  <Link to={{
                    pathname:"/nomade/about/Introduction",
                  }}>소개페이지</Link>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* //#wrap */}
    </div> 
    
  )
}

export default About;
