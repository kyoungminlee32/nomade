import React from "react";
import MainHead from "../components/MainHead";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import MainSwiper01 from "../components/MainSwiper01";
import MainSwiper02 from "../components/MainSwiper02";
import MainSwiper03 from "../components/MainSwiper03";
import MainSwiper04 from "../components/MainSwiper04";
import MainSwiper05 from "../components/MainSwiper05";

function UIPDA1002() {
  	return (
		<div>
			{/* #wrap */}
			<div id="wrap">
				<MainHead />
				<div id="container" className="mainContener with-fixedBtn">
					<div className="content mainContent" data-role="content">
						<section className="fullWidth mainTop">
							<div className="helloBox colour1"> {/*<!-- 설정 컬러값에 따른 컬러색상 클래스 colour1이 디폴트값 -->*/}
								<div className="myAllone_greeting">
									<ul className="columnSet">
										<li>
											고객님
											<span className="greeting_msg">로그인을 해주세요.</span>
										</li>
										<li className="myallone_userPhoto">
											<Link to="#/" onClick={e => e.preventDefault()} title="마이올원으로 이동" className="bg7">
												<span><img src="/nomade/static/img/myallone/profile_sample.png" alt="" /></span>
												<em>MY 포인트</em>
											</Link>
										</li>
									</ul>
								</div>
								<MainSwiper01 />
							</div>
							
							{/* <!-- 상품소개 배너 슬라이더 --> */}
							<MainSwiper02 />
							
							{/* <!-- 추천서비스 리스트  --> */}
							<MainSwiper03 />
							{/* <!-- 공지 노출 --> */}
							<div className="newsHeadline">
								<Link to="#/" onClick={e => e.preventDefault()}><span>공지</span>올원뱅크 필리핀 무계좌 해외송금 서비스 시작됩니다. 샘플 공지사항 제목 노출 테스트</Link>
							</div>
							
							{/* <!-- 이벤트 배너 슬라이더 --> */}
							<MainSwiper04 />
							
							{/* <!-- 금융그룹 슬라이더 --> */}
							<MainSwiper05 />
						</section>
					</div>
					<Footer id="footer" />
				</div>
			</div>
			{/* //#wrap */}
		</div>
  )
}

export default UIPDA1002;
