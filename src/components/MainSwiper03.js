import React from "react";
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function MainSwiper03() {
    return (
        <ul className="suggestion columnSet columnSet-valign">
            <li><h2>추천<br />서비스</h2></li>
            <li className="rowSpan8">
                <div className="swiper-container suggestList">
                    <Swiper
                        spaceBetween={7}
                        slidesPerView={4}
                        className="suggestSwiper"
                    >
                        <div className="swiper-wrapper">
                            <SwiperSlide className="bannerType">
                                <Link to="#/" onClick={e => e.preventDefault()} title="경조금보내기  바로가기">경조금보내기 </Link>
                            </SwiperSlide>
                            <SwiperSlide className="bannerType">
                                <Link to="#/" onClick={e => e.preventDefault()} title="경조금보내기  바로가기">경조금보내기 </Link>
                            </SwiperSlide>
                            <SwiperSlide className="bannerType">
                                <Link to="#/" onClick={e => e.preventDefault()} title="경조금보내기  바로가기">경조금보내기 </Link>
                            </SwiperSlide>
                            <SwiperSlide className="bannerType">
                                <Link to="#/" onClick={e => e.preventDefault()} title="경조금보내기  바로가기">경조금보내기 </Link>
                            </SwiperSlide>
                            <SwiperSlide className="bannerType">
                                <Link to="#/" onClick={e => e.preventDefault()} title="경조금보내기  바로가기">경조금보내기 </Link>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </li>
        </ul>
    )
};

export default MainSwiper03;