function FullPopup(props) {
	const FullPopupHide = () => {
		props.setFullBottom(false);
		 document.body.className=''
	}
  return (
    <>
       	<div className={props.fullBottom ? "modalWrap full show" : "modalWrap fix_bottom full"} id="modalDefault" tabIndex="0">
			<div className="modalFull">
				<div className="header">
					<h1 className="headerTitle">계좌기본정보</h1>
					<button type="button" className="btn closeBtn" id="fullClose" onClick={FullPopupHide}>닫기</button>
				</div>
				<div data-role="content" className="modal-contents">
					<section className="with-fixedBtn fullWidth">
						<dl className="dataList bdT0">
							<dt>예금종류</dt>
							<dd>주거래우대통장</dd>
							<dt>통장잔액</dt>
							<dd>50,000원</dd>
							<dt>지급가능금액</dt>
							<dd>50,000원</dd>
							<dt>통장개설일</dt>
							<dd>2016-03-01</dd>
							<dt>적용이율</dt>
							<dd>0.02%</dd>
							<dt>우대이율</dt>
							<dd>0.02%</dd>
							<dt>상세금리</dt>
							<dd>일별잔액 1,000,000원 이하 : 연 0.1%<br />
								일별잔액 1,000,000원 초과 : 연 0.1%
							</dd>
							<dt>대출약정만료일</dt>
							<dd>2016-03-01</dd>
							<dt>이자상환기준일</dt>
							<dd>2016-03-01</dd>
							<dt>이자상환액</dt>
							<dd>361,355원</dd>
							<dt>적용금리(A+B)</dt>
							<dd>0.02%</dd>
							<dt>기준금리(A)</dt>
							<dd>0.02%</dd>
							<dt>기준금리(B)</dt>
							<dd>0.02%</dd>
						</dl>
					</section>
					<button type="submit" className="btn primary submit selfBottom" onClick={FullPopupHide}>확인</button>
				</div>
			</div>
		</div>
    </> 
  )
}

export default FullPopup;
