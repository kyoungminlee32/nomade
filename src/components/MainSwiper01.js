import React from "react";
import {Link} from "react-router-dom";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function MainSwiper01() {
    return (
        <div className="swiper-container serviceList">
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mainSwiper"
            >
                <div className="swiper-wrapper">
                <SwiperSlide>
                    <ul className="columnSet withWrap services">
                        <li className="rowSpan6">
                            <Link to="/nomade/about" title="NH금융그룹 바로가기"><strong>NH금융그룹</strong><span>NH금융자산 통합조회</span></Link>
                        </li>
                        <li className="rowSpan6">
                            <Link to="#/" onClick={e => e.preventDefault()} title="금융상품몰 바로가기"><strong>금융상품몰</strong> <span>실속금융상품 가입해봄</span></Link>
                        </li>
                        <li className="rowSpan6">
                            <Link to="#/" onClick={e => e.preventDefault()} title="올원송금 바로가기"><strong>올원송금</strong> <span>음성으로 쉽고 빠르게!</span></Link>
                        </li>
                        <li className="rowSpan6">
                            <Link to="#/" onClick={e => e.preventDefault()} title="알뜰!환전 바로가기"><strong>알뜰!환전</strong><span>최대 90% 환율우대</span></Link>
                        </li>
                        <li className="rowSpan6">
                            <Link to="#/" onClick={e => e.preventDefault()} title="더+모임  바로가기"><strong>더<sup>+</sup>모임</strong><span>모임통장관리 더<sup>+</sup> 쉽게!</span></Link>
                        </li>
                        <li className="rowSpan6">
                            <Link to="#/" onClick={e => e.preventDefault()} title="올원x코나카드 바로가기"><strong>올원<em className="fz-15">x</em>코나카드</strong><span>용돈/데이트 카드 충전!</span></Link>
                        </li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="loginRefer">
                        <h2>입출금계좌가 없으신가요?</h2>
                        <p>영업점 방문없이<br />모바일로 간편하게!
                        </p>
                        <button type="button" className="btn">입출금계좌개설 바로가기</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="accountList rowSet">
                        <button type="button" className="btn">계좌 더보기</button>
                        <div className="editorLayer" tabIndex="0">
                            <h3 className="visualHide">계좌 메뉴</h3>
                            <div className="btnArea">
                                <Link to="#/" onClick={e => e.preventDefault()} role="button">닉네임 관리</Link>
                                <Link to="#/" onClick={e => e.preventDefault()} role="button">계좌번호 복사</Link>
                                <Link to="#/" onClick={e => e.preventDefault()} role="button">올원계좌 해지</Link>
                            </div>
                            <Link to="#/" onClick={e => e.preventDefault()} role="button" className="close_btn">닫기</Link>
                        </div>
                        <dl>
                            <dt>저축예금
                            <span>302-1234-4563-02</span>
                            </dt>
                            <dd data-currency="원">465,000</dd>
                        </dl>
                        <ul className="columnSet account_cta">
                            <li className="colItem">
                                <Link to="#/" onClick={e => e.preventDefault()} title="페이지 이동">거래내역</Link>
                            </li>
                            <li className="colItem">
                                <Link to="#/" onClick={e => e.preventDefault()} title="페이지 이동">송금하기</Link>
                            </li>
                        </ul>
                        <div className="offPayment">
                            <Link to="#/" onClick={e => e.preventDefault()}>오프라인 결제하기<span></span></Link>
                        </div>
                    </div>
                </SwiperSlide>
                </div>
            </Swiper>
        </div>
    )
};

export default MainSwiper01;