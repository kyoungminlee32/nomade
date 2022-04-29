import React from "react";
import {Link} from "react-router-dom";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function MainSwiper02() {
    return (
        <div className="swiper-container eventList">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="eventSwiper"
            >
            <div className="swiper-wrapper">
                <SwiperSlide className="bannerType">
                    <Link to="#/" onClick={e => e.preventDefault()}><img src={`${process.env.PUBLIC_URL}/static/img/cms/util/event_banner01.png`} alt="NH-MEETRO필리핀무계좌 해외송금 이벤트 기간  : 2018.10.15 ~ 2018.10.31" /></Link>
                </SwiperSlide>
                <SwiperSlide className="bannerType">
                    <Link to="#/" onClick={e => e.preventDefault()}><img src={`${process.env.PUBLIC_URL}/static/img/cms/util/event_banner02.png`} alt="NH-MEETRO필리핀무계좌 해외송금 이벤트 기간  : 2018.10.15 ~ 2018.10.31" /></Link>
                </SwiperSlide>
                <SwiperSlide className="bannerType">
                    <Link to="#/" onClick={e => e.preventDefault()}><img src={`${process.env.PUBLIC_URL}/static/img/cms/util/event_banner03.png`} alt="NH-MEETRO필리핀무계좌 해외송금 이벤트 기간  : 2018.10.15 ~ 2018.10.31" /></Link>
                </SwiperSlide>
            </div>
            </Swiper>
        </div>
    )
};

export default MainSwiper02;