import {React, useState} from "react";
import Header from "../components/Header";
import MainSwiper from "../components/Swiper";
import Nav from "../components/Nav";

function UIPDA1001() {
	const [buttonPopup,setButtonPopup] = useState(false);
	console.log(buttonPopup);
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
							</div>
						</section>
						<ul className="columnSet selfBottom">
							<li className="colItem"><button type="button" className="btn primary submit layerOpenBtnSample" onClick={() => setButtonPopup(true)}>팝업 열기</button></li>
						</ul>
					</div>
				</div>
				<footer id="footer"></footer>
			</div>
			{/* //#wrap */}

			{/* fullPopup */}
			{/* 슬라이드 */}
			<MainSwiper  trigger={buttonPopup} setTrigger={setButtonPopup} />
			{/* //fullPopup */}
		</div> 
  	)
}

export default UIPDA1001;
