function NomalPopup(props) {
	const LayerPopupHide = () => {
		props.setLayerpopup(false);
		 document.body.className=''
	}
  return (
    <>
       <div className={props.layerpopup ? "modalWrap nomal show" : "modalWrap nomal"} id="modalDefault" tabIndex="0">
			<div className="modalDefault">
				<div className="header">
					<h1 className="headerTitle">이용안내 기본</h1>
					<button type="button" className="btn closeBtn" id="defaultClose" onClick={LayerPopupHide}>닫기</button>
				</div>
				<div data-role="content" className="modal-contents">
					<section className="with-fixedBtn">
						{/* <p className="centeredTxt">NH간편오토론 대출은 운전면허증 소지자로<br />신차 구입자금 용도로만 대출신청이 가능합니다.</p> */}
						<div className="allwantedPop">	
							<ul className="achived">
								<li data-sticker="danji" data-status="100만원" className="active">100만원</li>
								<li data-sticker="kori" data-status="200만원">200만원</li>											
							</ul>
							<p className="allwanted_achived">
								올원해봄 적립횟수 <span className="greenOn">1,000,000</span>원를 달성하여<br />올원프렌즈
								<span className="greenOn">원이</span>를 획득 하셨습니다.
							</p>
							<p className="allwanted_rate">적용 우대금리: <span className="greenOn">0.3%P</span></p>
						</div>
					</section>
					<button type="submit" className="btn primary submit" onClick={LayerPopupHide}>확인</button>
				</div>
			</div>
			<div className={props.layerpopup ? "dimmed" : ""}></div>
		</div>
    </> 
  )
}

export default NomalPopup;
