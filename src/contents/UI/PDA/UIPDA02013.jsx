import {React, useState} from "react";
import Header from "../../../components/Header";
import Nav from "../../../components/Nav";
import {Link} from "react-router-dom";
import FullPopup from "../../../components/SlidePopup04";
import {Autoplay,Pagination} from "swiper";
import {Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function UIPDA02013() {
  const [buttonPopup,setButtonPopup] = useState(false);
	const FullPopupOpen = () => {
		setButtonPopup(!buttonPopup);
		document.body.className='noScroll'
	}
  return (
    <>
        {/* #wrap */}
        <div id="wrap">
          <Header />
          <div id="container">
            <div className="content" data-role="content">
              <section className="with-fixedBtn">
                  <Nav />
                  <div className="swiper-container tabNavSwiper">
                    <div className="swiper-wrapper">
                      <Swiper
                        spaceBetween={0}
                        slidesPerView={5}
                        className="tabNavSwiper"
                      >
                        <SwiperSlide>
                          <Link to={{pathname:"/nomade/Introduction",}}>추천</Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link to="#/" onClick={e => e.preventDefault()}>입출금</Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link to="#/" onClick={e => e.preventDefault()}>예/적금</Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link to="#/" onClick={e => e.preventDefault()}>대출</Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link to="#/" onClick={e => e.preventDefault()}>골드바</Link>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                  <div className="swiper-container tabContSwiper">
                    <div className="swiper-wrapper">
                      <Swiper
                          spaceBetween={0}
                          slidesPerView={1}
                          // thumbs= {{
                          //   swiper: {
                          //       el: '.tabNavSwiper',
                          //       slidesPerView: 5,
                          //   }
                          // }}
                          className="tabContSwiper"
                        >
                        <SwiperSlide className="prodSlide1">
                          <div className="swiper-container prodSwiper01 prodSwiperWrap">
                            <div className="swiper-wrapper">
                              <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                                loop={true}
                                touchRatio={0}
                                allowTouchMove={false}
                                autoplay={{
                                  delay: 2000,
                                  disableOnInteraction: false,
                                }}
                                pagination={{ clickable: true }}
                                modules={[Autoplay,Pagination]}
                                className="prodSwiperWrap"
                              >
                                <SwiperSlide className="prodSwiper0101">
                                  <Link to="#/" onClick={e => e.preventDefault()}>
                                    <h5>올원 비상금대출</h5>
                                    <p>소액으로 꺼내 쓰는 비상금대출<br />한도를 지금 바로 확인해 보세요!</p>
                                  </Link>
                                </SwiperSlide>
                                <SwiperSlide className="prodSwiper0102">
                                  <Link to="#/" onClick={e => e.preventDefault()}>
                                    <h5>올원 비상금대출</h5>
                                    <p>소액으로 꺼내 쓰는 비상금대출<br />한도를 지금 바로 확인해 보세요!</p>
                                  </Link>
                                </SwiperSlide>
                                <SwiperSlide className="prodSwiper0103">
                                  <Link to="#/" onClick={e => e.preventDefault()}>
                                    <h5>올원 비상금대출</h5>
                                    <p>소액으로 꺼내 쓰는 비상금대출<br />한도를 지금 바로 확인해 보세요!</p>
                                  </Link>
                                </SwiperSlide>
                                <SwiperSlide className="prodSwiper0104">
                                  <Link to="#/" onClick={e => e.preventDefault()}>
                                    <h5>올원 비상금대출</h5>
                                    <p>소액으로 꺼내 쓰는 비상금대출<br />한도를 지금 바로 확인해 보세요!</p>
                                  </Link>
                                </SwiperSlide>
                              </Swiper>
                            </div>
                            <div className="prodMainWrap">
                              <ul className="prodMainList">
                                <li>
                                  <div className="prodMainLeft">
                                    <div>
                                      <h5>NH주거래우대통장</h5>
                                      <ul className="prodBadgeList">
                                        <li><span className="badge gray">입출금</span></li>
                                      </ul>
                                    </div>
                                    <p>금융 수수료에 금리까지 우대받는 주거래 우대통장</p>
                                  </div>
                                  <div className="prodMainRight">
                                    <ul className="prodBadgeList">
                                      <li><span className="badge gray">최고</span></li>
                                    </ul>
                                    <p><strong>3.00</strong>%</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="prodMainLeft">
                                    <div>
                                      <h5>올원 캔디 예금</h5>
                                      <ul className="prodBadgeList">
                                        <li><span className="badge gray">예금</span></li>
                                        <li><span className="badge green">올원뱅크전용</span></li>
                                      </ul>
                                    </div>
                                    <p>올원캔디를 우대금리로 교환하는 정기예금</p>
                                  </div>
                                  <div className="prodMainRight">
                                    <ul className="prodBadgeList">
                                      <li><span className="badge gray">최고</span></li>
                                    </ul>
                                    <p><strong>1.10</strong>%</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="prodMainLeft">
                                    <div>
                                      <h5>NH가고싶은 대한민국 적금</h5>
                                      <ul className="prodBadgeList">
                                        <li><span className="badge gray">예금</span></li>
                                      </ul>
                                    </div>
                                    <p>금리와 함께하는 국내여행,<br />여행 다녀오면 난 이미 부자!</p>
                                  </div>
                                  <div className="prodMainRight">
                                    <ul className="prodBadgeList">
                                      <li><span className="badge gray">최고</span></li>
                                    </ul>
                                    <p><strong>3.20</strong>%</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="prodMainLeft">
                                    <div>
                                      <h5>주택청약종합저축</h5>
                                      <ul className="prodBadgeList">
                                        <li><span className="badge gray">예금</span></li>
                                        <li><span className="badge green">올원뱅크전용</span></li>
                                      </ul>
                                    </div>
                                    <p>똑똑하고 부지런하게 내 집 마련하기. 시작이 반이다!</p>
                                  </div>
                                  <div className="prodMainRight">
                                    <ul className="prodBadgeList">
                                      <li><span className="badge gray">최고</span></li>
                                    </ul>
                                    <p><strong>1.80</strong>%</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="prodMainLeft">
                                    <div>
                                      <h5>올원 신용대출</h5>
                                      <ul className="prodBadgeList">
                                        <li><span className="badge red">NEW</span></li>
                                        <li><span className="badge gray">예금</span></li>
                                        <li><span className="badge green">올원뱅크전용</span></li>
                                      </ul>
                                    </div>
                                    <p>서류 제출 없이 간편한</p>
                                  </div>
                                  <div className="prodMainRight">
                                    <ul className="prodBadgeList">
                                      <li><span className="badge gray">최고</span></li>
                                    </ul>
                                    <p><strong>1.5</strong>억</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="prodSlide2">
                          <div className="prodSwiperWrap prodMain02">
                            <div className="prodMainTop">
                              <Link to="#/" onClick={e => e.preventDefault()}>
                                <h5>NH 1934 우대통장</h5>
                                <p>청년돌 모여라! 만 34세 이하를<br />위한 특별한 입출금통장</p>
                              </Link>
                            </div>
                          </div>
                          <div className="prodMainWrap">
                            <ul className="prodMainList">
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>NH페이모아통장</h5>
                                    <ul className="prodBadgeList">
                                      <li><span className="badge red">NEW</span></li>
                                    </ul>
                                  </div>
                                  <p>간편결제(Pay)실적 모아<br />우대금리/수수료 혜택</p>
                                </div>
                                <div className="prodMainRight">
                                  <ul className="prodBadgeList">
                                    <li><span className="badge gray">최고</span></li>
                                  </ul>
                                  <p><strong>0.90</strong>%</p>
                                </div>
                              </li>
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>NH주거래우대통장</h5>
                                  </div>
                                  <p>금융 수수료에 금리까지 우대받는 주거래 우대통장</p>
                                </div>
                                <div className="prodMainRight">
                                  <ul className="prodBadgeList">
                                    <li><span className="badge gray">최고</span></li>
                                  </ul>
                                  <p><strong>3.00</strong>%</p>
                                </div>
                              </li>
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>NH1934우대통장</h5>
                                  </div>
                                  <p>청년들 모여라! 만 34세 이하를 위한 특별한 입출금통장</p>
                                </div>
                                <div className="prodMainRight">
                                  <ul className="prodBadgeList">
                                    <li><span className="badge gray">최고</span></li>
                                  </ul>
                                  <p><strong>0.90</strong>%</p>
                                </div>
                              </li>
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>NH x 카카오페이통장</h5>
                                  </div>
                                  <p>올원뱅크와 카카오페이가 만나 즐거운 혜택을 드립니다.</p>
                                </div>
                                <div className="prodMainRight">
                                  <ul className="prodBadgeList">
                                    <li><span className="badge gray">최고</span></li>
                                  </ul>
                                  <p><strong>0.90</strong>%</p>
                                </div>
                              </li>
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>NH모여라통장(저축예금)</h5>
                                  </div>
                                  <p>회비관리 어렵지 않아요.<br />모임통장 하나면 고민 해결!</p>
                                </div>
                                <div className="prodMainRight">
                                  <ul className="prodBadgeList">
                                    <li><span className="badge gray">최고</span></li>
                                  </ul>
                                  <p><strong>0.90</strong>%</p>
                                </div>
                              </li>
                            </ul>
                            {/* <!-- 2020-10-28 수정 -->
                            <div className="iframe-banner mt-5">
                              <iframe src="../../cms/market/abme8000r_iframe02.html" style="width:100%;"></iframe>
                            </div>
                            <!-- //2020-10-28 수정 --> */}
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="prodSlide3">
                          <div className="prodSwiperWrap prodMain03">
                            <div className="prodMainTop">
                              <Link to="#/" onClick={e => e.preventDefault()}>
                                <h5>올원해봄적금</h5>
                                <p>목표를 정하고 매일 "해봄" 하면<br />최대 1.0%p우대!</p>
                              </Link>
                            </div>
                          </div>
                          <div className="prodMainWrap">
                            <div className="prodMainTitle">
                              <h3>예금</h3>
                            </div>
                            <ul className="prodMainList">
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>올원캔디예금</h5>
                                    <ul className="prodBadgeList">
                                      <li><span className="badge green">올원뱅크전용</span></li>
                                    </ul>
                                  </div>
                                  <p>올원캔디를 우대금리로 교환하는 정기예금</p>
                                </div>
                                <div className="prodMainRight">
                                  <ul className="prodBadgeList">
                                    <li><span className="badge gray">최고</span></li>
                                  </ul>
                                  <p><strong>1.10</strong>%</p>
                                </div> 
                              </li>
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>e금리우대예금</h5>
                                  </div>
                                  <p>추천을 주고 받으면 금리가 올라가는 상부상조 정기예금</p>
                                </div>
                                <div className="prodMainRight">
                                  <ul className="prodBadgeList">
                                    <li><span className="badge gray">최고</span></li>
                                  </ul>
                                  <p><strong>0.97</strong>%</p>
                                </div>
                              </li>
                            </ul>
                            <div className="prodMainTitle mt-2">
                              <h3>적금</h3>
                            </div>
                            <ul className="prodMainList">
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>올원해봄적금</h5>
                                    <ul className="prodBadgeList">
                                      <li><span className="badge green">올원뱅크전용</span></li>
                                    </ul>
                                  </div>
                                  <p>목표를 정하고 매일 "해봄"<br />하면 최대 1.0%p 우대!</p>
                                </div>
                                <div className="prodMainRight">
                                  <ul className="prodBadgeList">
                                    <li><span className="badge gray">최고</span></li>
                                  </ul>
                                  <p><strong>1.60</strong>%</p>
                                </div>
                              </li>
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>NH가고싶은 대한민국 적금</h5>
                                  </div>
                                  <p>금리와 함께하는 국내여행,<br />여행 다녀오면 난 이미 부자!</p>
                                </div>
                                <div className="prodMainRight">
                                  <ul className="prodBadgeList">
                                    <li><span className="badge gray">최고</span></li>
                                  </ul>
                                  <p><strong>3.20</strong>%</p>
                                </div>
                              </li>
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>올원 5늘도 적금</h5>
                                  </div>
                                  <p>6개월 매일 소액 자동이체 적금 (1인당 3계좌까지 가능)</p>
                                </div>
                                <div className="prodMainRight">
                                  <ul className="prodBadgeList">
                                    <li><span className="badge gray">최고</span></li>
                                  </ul>
                                  <p><strong>1.10</strong>%</p>
                                </div>
                              </li>
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>e금리우대적금</h5>
                                  </div>
                                  <p>추천만 주고 받아도 금리가 올라가는 상부상조 자유 적금</p>
                                </div>
                                <div className="prodMainRight">
                                  <ul className="prodBadgeList">
                                    <li><span className="badge gray">최고</span></li>
                                  </ul>
                                  <p><strong>3.20</strong>%</p>
                                </div>
                              </li>
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>NH직장인월복리적금</h5>
                                  </div>
                                  <p>급여계좌 고객님, 우대금리 확인하고 나만의 월복리 적금을 만들어 보세요.</p>
                                </div>
                                <div className="prodMainRight">
                                  <ul className="prodBadgeList">
                                    <li><span className="badge gray">최고</span></li>
                                  </ul>
                                  <p><strong>1.74</strong>%</p>
                                </div>
                              </li>
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>주택청약종합저축</h5>
                                  </div>
                                  <p>똑똑하고 부지런하게 내 집 마련하기, 시작이 반이다!</p>
                                </div>
                                <div className="prodMainRight">
                                  <ul className="prodBadgeList">
                                    <li><span className="badge gray">최고</span></li>
                                  </ul>
                                  <p><strong>1.80</strong>%</p>
                                </div>
                              </li>
                            </ul>
                            <div className="prodMainTitle mt-2">
                              <h3>외화예금</h3>
                            </div>
                            <ul className="prodMainList">
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>올원외화포켓적립예금</h5>
                                  </div>
                                  <p>높은 우대환율 적용과<br />외화정기 예금 금리 제공</p>
                                </div>
                                <div className="prodMainRight">
                                  <ul className="prodBadgeList">
                                    <li><span className="badge gray">최고</span></li>
                                  </ul>
                                  <p><strong>0.97</strong>%</p>
                                </div>
                              </li>
                            </ul>
                            {/* <!-- 2020-10-28 수정 --> 
                            <div className="iframe-banner mt-5">
                              <iframe src="../../cms/market/abme8000r_iframe03.html" style="width:100%;"></iframe>
                            </div>
                            <!-- //2020-10-28 수정 --> */}
                          
                            <div className="button-group flex-center mt-6">
                            <Link to="#/" onClick={e => e.preventDefault()} className="btn-text btn-under">다른 상품이 궁금하세요?</Link>
                            </div>
                            
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="prodSlide4">
                          <div className="prodSwiperWrap prodMain04">
                            <div className="prodMainTop">
                              <Link to="#/" onClick={e => e.preventDefault()}>
                                <h5>올원신용대출</h5>
                                <p>알아서 추천하고 간편하게 조회·신청</p>
                              </Link>
                            </div>
                          </div>
                          <div className="prodMainWrap">
                            <h3>신용</h3>
                            <ul className="prodMainList">
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>올원 비상금대출</h5>
                                  </div>
                                  <p>급할 때 힘이 되는</p>
                                </div>
                                <div className="prodMainRight">
                                  <span className="badge gray">최저</span>
                                  <p><strong>2.75</strong>%</p>
                                </div>
                              </li>
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>올원신용대출</h5>
                                    <ul className="prodBadgeList">
                                      <li><span className="badge red">NEW</span></li>
                                      <li><span className="badge yellow">BEST</span></li>
                                    </ul>
                                  </div>
                                  <p>서류 제출 없이 간편한</p>
                                </div>
                                <div className="prodMainRight">
                                  <span className="badge gray">최고</span>
                                  <p><strong>2.02</strong>%</p>
                                </div>
                              </li>
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>e채움공무원가계자금대출</h5>
                                  </div>
                                  <p>공무원연금공단 융자 추천자 대상</p>
                                </div>
                                <div className="prodMainRight">
                                  <span className="badge gray">최고</span>
                                  <p><strong>1.79</strong>%</p>
                                </div>
                              </li>
                            </ul>
                            <h3 className="mt-2">주택</h3>
                            <ul className="prodMainList">
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>NH모바일아파트대출2.0</h5>
                                  </div>
                                  <p>이젠 담보대출도 방문 필요 없이</p>
                                </div>
                                <div className="prodMainRight">
                                  <span className="badge gray">최저 연</span>
                                  <p><strong>1.87</strong>%</p>
                                </div>
                              </li>
                            </ul>
                            <h3 className="mt-2">카드</h3>
                            <ul className="prodMainList">
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>단기카드대출(현금서비스)</h5>
                                  </div>
                                  <p>일상에서 현금이 필요한 순간</p>
                                </div>
                              </li>
                            </ul>
                            <h3 className="mt-2">NH금융그룹</h3>
                            <ul className="prodMainList">
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>NH농협생명</h5>
                                  </div>
                                  <p>보험가입자라면 대출지원까지</p>
                                </div>
                                <img src="/public/static/img/2020/mall/main/loan/img-loan01.png" alt="" style={{width:'2rem', height:'2rem'}} />
                              </li>
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>NH농협손해보험</h5>
                                  </div>
                                  <p>보험가입자라면 대출지원까지</p>
                                </div>
                                <img src="/public/static/img/2020/mall/main/loan/img-loan02.png" alt="" style={{width:'2rem', height:'2rem'}} />
                              </li>
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>NH저축은행</h5>
                                  </div>
                                  <p>서민의 든든한 지원군</p>
                                </div>
                                <img src="/public/static/img/2020/mall/main/loan/img-loan03.png" alt="" style={{width:'2rem', height:'2rem'}} />
                              </li>
                              <li>
                                <div className="prodMainLeft">
                                  <div>
                                    <h5>NH농협캐피탈</h5>
                                  </div>
                                  <p>소득증빙 없이 쉽고 빠르게</p>
                                </div>
                                <img src="/public/static/img/2020/mall/main/loan/img-loan04.png" alt="" style={{width:'2rem', height:'2rem'}} />
                              </li>
                            </ul>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="prodSlide5">
                          <div className="product-goldbar">
                            <div className="goldbar-option">
                              <Link to="#/" onClick={e => e.preventDefault()} className="border-wide-btn mb-2">
                                <ul>
                                  <li className="text-lg text-black text-bold">골드바</li>
                                  <li className="text-xs">이용시간: 은행 영업일 09:00 ~ 16:00</li>
                                </ul> 
                                <span className="icon-goldbar"><img src="/public/static/img/2020/mall/main/goldbar/img-goldbar01.png" alt="" /></span>
                              </Link>
                              <Link to="#/" onClick={e => e.preventDefault()} className="border-wide-btn mb-2">
                                <ul>
                                  <li className="text-lg text-black text-bold">실버바</li>
                                  <li className="text-xs">이용시간: 은행 영업일 09:00 ~ 16:00</li>
                                </ul> 
                                <span className="icon-silverbar"><img src="/public/static/img/2020/mall/main/goldbar/img-goldbar02.png" alt="" /></span>
                              </Link>
                              <Link to="#/" onClick={e => e.preventDefault()} className="border-wide-btn mb-2">
                                <ul>
                                  <li className="text-lg text-black text-bold">구매내역조회</li>
                                  <li className="text-xs">골드바, 실버바 구매내역 조회</li>
                                </ul> 
                              </Link>
                              <Link to="#/" onClick={e => e.preventDefault()} className="border-wide-btn">
                                <ul>
                                  <li className="text-lg text-black text-bold">FAQ</li>
                                  <li className="text-xs">골드바, 실버바 자주 묻는 질문</li>
                                </ul> 
                              </Link>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                  <ul className="columnSet selfBottom">
                    <li className="colItem"><button type="submit" className="btn primary submit" onClick={FullPopupOpen}>Full 팝업열기</button></li>
                  </ul>
              </section>
            </div>
          </div>
        </div>
        {/* //#wrap */}
        <FullPopup  fullBottom={buttonPopup} setFullBottom={setButtonPopup} />
    </> 
    
  )
}

export default UIPDA02013;
