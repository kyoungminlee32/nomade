import React from "react";
import {Pagination, Navigation } from "swiper";
import {Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function MainSwiper(props) {
    return (props.trigger) ? (
        <div className="modalWrap" id="modalFull" style={{display:'block'}}>
            <div className="modalFull tutorialPop">
                <div className="header">
                    <button type="button" className="btn closeBtn" id="fullClose" onClick={() => props.setTrigger(false)}>닫기</button>
                </div>
                <div className="modal-contents" data-role="content">
                    <div className="swiper-container tutorial-Slider">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            modules={[Navigation, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="tutorialText">
                                    <img src={`${process.env.PUBLIC_URL}/static/img/tutorial/tutorial_text01.png`} alt="24시간!365일!잠들지 않는 올원뱅크 #새로운서비스 #새로운기능 #새로운 상품 새롭게 바뀐 올원뱅크 어떻게 달라졌을까요?"/>
                                </div>
                                <div className="tutorialContent">
                                    <img src={`${process.env.PUBLIC_URL}/static/img/tutorial/tutorial_content01.png`} alt="올원뱅크 메인 화면" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tutorialText">
                                    <img src={`${process.env.PUBLIC_URL}/static/img/tutorial/tutorial_text02.png`} alt="24시간!365일!잠들지 않는 올원뱅크 #새로운서비스 #새로운기능 #새로운 상품 새롭게 바뀐 올원뱅크 어떻게 달라졌을까요?"/>
                                </div>
                                <div className="tutorialContent">
                                    <ul className="slidesAnimation">
                                        <li className="ani1"><img src={`${process.env.PUBLIC_URL}/static/img/tutorial/tutorial_content02.gif`} alt="올원뱅크 메인 화면" /></li>
                                    </ul>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tutorialText">
                                    <img src={`${process.env.PUBLIC_URL}/static/img/tutorial/tutorial_text03.png`} alt="24시간!365일!잠들지 않는 올원뱅크 #새로운서비스 #새로운기능 #새로운 상품 새롭게 바뀐 올원뱅크 어떻게 달라졌을까요?"/>
                                </div>
                                <div className="tutorialContent">
                                    <ul className="slidesAnimation">
                                        <li className="ani1"><img src={`${process.env.PUBLIC_URL}/static/img/tutorial/tutorial_content03.gif`} alt="올원뱅크 메인 화면" /></li>
                                    </ul>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tutorialText">
                                    <img src={`${process.env.PUBLIC_URL}/static/img/tutorial/tutorial_text04.png`} alt="24시간!365일!잠들지 않는 올원뱅크 #새로운서비스 #새로운기능 #새로운 상품 새롭게 바뀐 올원뱅크 어떻게 달라졌을까요?"/>
                                </div>
                                <div className="tutorialContent">
                                    <ul className="slidesAnimation">
                                        <li className="ani1"><img src={`${process.env.PUBLIC_URL}/static/img/tutorial/tutorial_content04.gif`} alt="올원뱅크 메인 화면" /></li>
                                    </ul>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
        
    ) : null;
};

export default MainSwiper;