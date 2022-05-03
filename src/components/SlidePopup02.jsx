function SlideCenter(props) {
	const hideCenterOPen = () => {
		props.setFixCenter(false);
		 document.body.className=''
	}
  return (
    <>
       <div className={props.fixcenter ? "modalWrap center show" : "modalWrap center"} id="modalDefault" tabIndex="0">
			<div className="modalDefault">
				<div className="header">
					<h1 className="headerTitle">이용안내 center</h1>
					<button type="button" className="btn closeBtn" id="defaultClose" onClick={hideCenterOPen}>닫기</button>
				</div>
				<div data-role="content" className="modal-contents">
					<form>
						<section className="with-fixedBtn">
							<label htmlFor="mailProvider">이메일</label>
							<dl className="columnSet emailInput">
								<dt className="colItem">
									<input type="text" id="inputLabel4" placeholder="abcd" className="formInput" name="emailId" />
								</dt>
								<dd className="colItem">
									<label htmlFor="mailProvider" className="visualHide">Email Provider</label>
									<div className="select-input">
										<select id="mailProvider" className="formInput" name="">
											<option value="gmail.com" label="gmail.com">gmail.com</option>
											<option value="hanmail.net" label="hanmail.net">hanmail.net</option>
											<option value="naver.com" label="naver.com">naver.com</option>
											<option value="nate.com" label="nate.com">nate.com</option>
											<option value="직접입력" label="direct input">직접입력</option>
										</select>
									</div>
								</dd>
							</dl>
							<div className="textInput">
								<input type="text" id="inputLabel1" placeholder="" className="formInput" name="" />
							</div>
						</section>
						<ul className="columnSet selfBottom">
							<li className="colItem"><button type="button" className="btn primary cancel">취소</button></li>
							<li className="colItem"><button type="submit" className="btn primary submit" onClick={hideCenterOPen}>확인</button></li>
						</ul>
					</form>
				</div>
			</div>
			<div className={props.fixcenter ? "dimmed" : ""}></div>
		{/* <span className="helper_a11y" tabIndex="0"></span> */}
		</div>
    </> 
  )
}

export default SlideCenter;
