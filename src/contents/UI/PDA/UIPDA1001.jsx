import {React, useState} from "react";
import Header from "../../../components/Header";
import Tutorial from "../../../components/TutorialSwiper";
import Nav from "../../../components/Nav";

function UIPDA1001() {
	const [buttonPopup,setButtonPopup] = useState(false);
	const FullPopupOpen = () => {
		setButtonPopup(!buttonPopup);
		document.body.className='noScroll'
	}
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
							<li className="colItem"><button type="button" className="btn primary submit layerOpenBtnSample" onClick={FullPopupOpen}>Full팝업 열기</button></li>
						</ul>
					</div>
				</div>
				<footer id="footer"></footer>
			</div>
			{/* //#wrap */}

			{/* fullPopup */}
			{/* tutorial 슬라이드 */}
			<Tutorial  fullBottom={buttonPopup} setFullBottom={setButtonPopup} />
			{/* //fullPopup */}
		</div> 
  	)
}

export default UIPDA1001;
