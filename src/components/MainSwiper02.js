import React from "react";
import {Link} from "react-router-dom";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function MainSwiper02() {
    return (
        <div className="swiper-container productList">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="productSwiper"
            >
                <div className="swiper-wrapper">
                    <SwiperSlide className="bannerType">
                        <ul className="depositEvent allwanted">
                            <li>
                                {/* <!-- 해봄 case.1 비로그인시 --> */}
                                <h3>오늘도 올원뱅크와 함께 <em>해봄하세요</em></h3>
                                <p>적립실적에 따라<br />우대금리 혜택을 드립니다.</p>
                                <Link to="#/" onClick={e => e.preventDefault()} title="해봄 상품 바로가기">바로가기</Link>
                            </li>
                            <li>
                                <button type="button" className="savingCta">해봄하기</button>
                            </li>
                        </ul>
                    </SwiperSlide>
                    <SwiperSlide className="bannerType">
                        <ul className="depositEvent allwanted pocket">
                            <li>
                                {/* <!-- 18.09.20 외퐈포켓예금 케이스 수정 -->
                                <!-- 외화포켓예금  --> */}
                                <h3><em>올원외화포켓적립예금</em></h3>
                                <p>환율우대 최대 70% 적용<br /><em>쏙~입금</em>으로 간편하게 입금</p>
                                <Link to="#/" onClick={e => e.preventDefault()} title="외화포켓예금 상품 바로가기">바로가기</Link>						
                            </li>
                            <li>{/*<!-- button event 영역 주석으로 남김 -->*/}</li>
                        </ul>
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    )
};

export default MainSwiper02;