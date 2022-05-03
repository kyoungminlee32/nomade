import React, {useState} from "react";
import Header from "../../../components/Header";
import Nav from "../../../components/Nav";
import Tabs from "../../../components/Tabs";
import {Link} from "react-router-dom";

function UIPDA02013() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabClickHandler=(index)=>{
    setActiveIndex(index)
  }
  return (
    <>
        {/* #wrap */}
        <div id="wrap">
          <Header />
          <div id="container">
            <div className="content" data-role="content">
              <Nav />
              <Tabs />
              <section className="fullWidth no-fixed">
                <div className="prd-listMain">
                  <nav className="tabNav tabOverflow">
                    <ul className="columnSet">
                      <li className={activeIndex===0 ? "colItem is-on" : "colItem"} onClick={()=>tabClickHandler(0)} data-tab="tabCont1"><Link to="#/" onClick={e => e.preventDefault()}>입출금계좌개설</Link></li>
                      <li className={activeIndex===1 ? "colItem is-on" : "colItem"} onClick={()=>tabClickHandler(1)} data-tab="tabCont2"><Link to="#/" onClick={e => e.preventDefault()}>예/적금</Link></li>
                      <li className={activeIndex===2 ? "colItem is-on" : "colItem"} onClick={()=>tabClickHandler(2)} data-tab="tabCont3"><Link to="#/" onClick={e => e.preventDefault()}>대출</Link></li>
                      <li className={activeIndex===3 ? "colItem is-on" : "colItem"} onClick={()=>tabClickHandler(3)} data-tab="tabCont4"><Link to="#/" onClick={e => e.preventDefault()}>펀드</Link></li>
                      <li className={activeIndex===4 ? "colItem is-on" : "colItem"} onClick={()=>tabClickHandler(4)} data-tab="tabCont5"><Link to="#/" onClick={e => e.preventDefault()}>외환</Link></li>
                      <li className={activeIndex===5 ? "colItem is-on" : "colItem"} onClick={()=>tabClickHandler(5)} data-tab="tabCont6"><Link to="#/" onClick={e => e.preventDefault()}>카드</Link></li>
                      <li className={activeIndex===6 ? "colItem is-on" : "colItem"} onClick={()=>tabClickHandler(6)} data-tab="tabCont7"><Link to="#/" onClick={e => e.preventDefault()}>보험</Link></li>
                      <li className={activeIndex===7 ? "colItem is-on" : "colItem"} onClick={()=>tabClickHandler(7)} data-tab="tabCont8"><Link to="#/" onClick={e => e.preventDefault()}>골드바</Link></li>
                    </ul>
                  </nav>

                  {/* <!-- 입출금계좌개설  --> */}
                  <div id="tabCont1" className={activeIndex===0 ? "tabContent prd01 is-current" : "tabContent prd01"}> 
                    <h2 className="visualHide">입출금계좌개설</h2>
                    <div className="topVisual">
                      <h2>영업점 방문 없이<br />모바일로 간편하게!</h2>
                      <p className="subTitle">Magic Tree(매직트리)<br />전자금융전용 무통장 요구불 예금</p>
                      <p className="subDesc">상품을 선택하고, 본인인증 단계를<br />거치면 계좌개설이 가능합니다.</p>
                      <button type="submit" className="btn">자세히보기</button>
                    </div>
                    <ul className="boardList showArrow toplined">
                      <li>
                        <Link to="#/" onClick={e => e.preventDefault()} className="boxHead">
                          <div className="objCon">
                            <strong className="dataTxt tTitle">Magic Tree (매직트리)</strong>
                            <span className="dataTxt tCon">전자금융전용 무통장 요구불예금</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="#/" onClick={e => e.preventDefault()} className="boxHead">
                          <div className="objCon">
                            <strong className="dataTxt tTitle">NH카카오페이통장</strong>
                            <span className="dataTxt tCon">NH & kakao pay 결함 모바일 전용 입출금 통장</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="#/" onClick={e => e.preventDefault()} className="boxHead">
                          <div className="objCon">
                            <strong className="dataTxt tTitle">네이버페이통장</strong>
                            <span className="dataTxt tCon">네이버와 연계된 특별한 통장상품 </span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- //입출금계좌개설  --> */}

                  {/* <!-- 예/적금 --> */}
                  <div id="tabCont2" className={activeIndex===1 ? "tabContent prd02 is-current" : "tabContent prd02"}> 
                    <h2 className="visualHide">예/적금</h2>
                    <div className="topVisual">
                      <h2>올원뱅크 회원<br />200만 돌파 기념</h2>
                      <p className="subTitle">200만 가입 기념 특판예금<br />올원뱅크 전용 특판 큰만족 실세예금</p>
                      <p className="subDesc">올원전용 거치식 특판 예금 상품입니다.<br />&#8251; 판매한도 소진 시 가입이 불가 합니다.</p>
                      <button type="submit" className="btn">자세히보기</button>
                    </div>
                    <div className="prdList type02">
                      <ul className="aBlock">
                        <li>
                          <Link to="#/" onClick={e => e.preventDefault()}>
                            <div>
                              <p className="name">e금리우대예금</p>
                              <p className="desc">인터넷 및 스마트뱅킹 전용거치식 예금</p>
                            </div>
                            <div>
                              <p className="perLow">최저 연 0.50%<span>(12개월 이상)</span></p>
                              <p className="perHigh"><span>최고</span>2.50%</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="#/" onClick={e => e.preventDefault()}>
                            <div>
                              <p className="name">e금리우대적금</p>
                              <p className="desc">인터넷 및 스마트뱅킹 전용 적금</p>
                            </div>
                            <div>
                              <p className="perLow">최저 연 0.50%<span>(12개월 이상)</span></p>
                              <p className="perHigh"><span>최고</span>2.50%</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="#/" onClick={e => e.preventDefault()}>
                            <div>
                              <p className="name">주택청약종합저축</p>
                              <p className="desc">적금형식/일시예치식</p>
                            </div>
                            <div>
                              <p className="perLow">최저 연 0.50%<span>(12개월 이상)</span></p>
                              <p className="perHigh"><span>최고</span>2.50%</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="#/" onClick={e => e.preventDefault()}>
                            <div>
                              <p className="name">NH 오토적금</p>
                              <p className="desc">자동차 구매전용 적립식 상품</p>
                            </div>
                            <div>
                              <p className="perLow">최저 연 0.50%<span>(12개월 이상)</span></p>
                              <p className="perHigh"><span>최고</span>2.50%</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="#/" onClick={e => e.preventDefault()}>
                            <div>
                              <p className="name">네이버페이통장</p>
                              <p className="desc">네이버와 연계된 특별한 통장상품</p>
                            </div>
                            <div>
                              <p className="perLow">최저 연 0.50%<span>(12개월 이상)</span></p>
                              <p className="perHigh"><span>최고</span>2.50%</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="#/" onClick={e => e.preventDefault()}>
                            <div>
                              <p className="name">모임통장(입출금)</p>
                              <p className="desc">모임서비스를 위한 우대금리 적용통장</p>
                            </div>
                            <div>
                              <p className="perLow">최저 연 0.50%<span>(12개월 이상)</span></p>
                              <p className="perHigh"><span>최고</span>2.50%</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="#/" onClick={e => e.preventDefault()}>
                            <div>
                              <p className="name">NH 해봄적금</p>
                              <p className="desc">빠르고 간편한 올원뱅크 전용상품</p>
                            </div>
                            <div>
                              <p className="perLow">최저 연 0.50%<span>(12개월 이상)</span></p>
                              <p className="perHigh"><span>최고</span>2.50%</p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- //예/적금 --> */}

                  <div id="tabCont3" className={activeIndex===2 ? "tabContent is-current" : "tabContent"}>대출</div>
                  <div id="tabCont4" className={activeIndex===3 ? "tabContent is-current" : "tabContent"}>펀드</div>
                  <div id="tabCont5" className={activeIndex===4 ? "tabContent is-current" : "tabContent"}>외환</div>
                  <div id="tabCont6" className={activeIndex===5 ? "tabContent is-current" : "tabContent"}>카드</div>
                  <div id="tabCont7" className={activeIndex===6 ? "tabContent is-current" : "tabContent"}>보험</div>
                  <div id="tabCont8" className={activeIndex===7 ? "tabContent is-current" : "tabContent"}>골드바</div>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* //#wrap */}
    </> 
    
  )
}

export default UIPDA02013;
