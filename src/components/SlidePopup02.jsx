function SlideCenter(props) {
	const hideCenterOPen = () => {
		props.setFixCenter(false);
		document.modalWrap.className=''
	}
  return (
    <div>
       <div className={props.fixcenter ? "modalWrap center show" : "modalWrap center"} id="modalDefault" tabIndex="0">
			<div className="modalDefault">
				<div className="header">
					<h1 className="headerTitle">이용안내</h1>
					<button type="button" className="btn closeBtn" id="defaultClose" onClick={hideCenterOPen}>닫기</button>
				</div>
				<div data-role="content" className="modal-contents">
					<section className="with-fixedBtn">
						<p className="centeredTxt">대출은 운전면허증 소지자로<br />신차 구입자금 용도로만 대출신청이 가능합니다.</p>
					</section>
					<button type="submit" className="btn primary submit" onClick={hideCenterOPen}>확인</button>
				</div>
			</div>
			<div className={props.fixcenter ? "dimmed" : ""}></div>
		{/* <span className="helper_a11y" tabIndex="0"></span> */}
		</div>
    </div> 
  )
}

export default SlideCenter;
