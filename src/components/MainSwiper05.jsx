import React from "react";
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function MainSwiper05() {
    return (
        <div className="groupList">
            <h2>NH금융그룹을<br /><Link to="#/" onClick={e => e.preventDefault()} title="NH금융그룹 메인으로 이동">만나보세요</Link></h2>
            <div className="swiper-container familyList">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    centeredSlides={true}
                    className="familySwiper"
                >
                    <div className="swiper-wrapper">
                        <SwiperSlide className="nh-bank">
                            <Link to="#/" onClick={e => e.preventDefault()}>
                                NH농협은행
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="nh-bank">
                            <Link to="#/" onClick={e => e.preventDefault()}>
                                NH농협카드
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="nh-bank">
                            <Link to="#/" onClick={e => e.preventDefault()}>
                                NH투자증권
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="nh-bank">
                            <Link to="#/" onClick={e => e.preventDefault()}>
                                NH농협생명보험
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="nh-bank">
                            <Link to="#/" onClick={e => e.preventDefault()}>
                                NH농협손해보험
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="nh-bank">
                            <Link to="#/" onClick={e => e.preventDefault()}>
                                NH농협캐피탈
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="nh-bank">
                            <Link to="#/" onClick={e => e.preventDefault()}>
                                NH저축은행
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="nh-bank">
                            <Link to="#/" onClick={e => e.preventDefault()}>
                                NH선물
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="nh-bank">
                            <Link to="#/" onClick={e => e.preventDefault()}>
                                NH-Amundi<br />자산운용
                            </Link>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </div>
        
    )
};

export default MainSwiper05;