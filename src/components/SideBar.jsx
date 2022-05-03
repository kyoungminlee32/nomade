import React, {useState} from 'react';
import {Link} from "react-router-dom";

function SideBars(props) {
    const hideOPen = () => {
        props.setTrigger(false);
        document.body.className=''
    }
    const [activeIndex, setActiveIndex] = useState(0);
    const [openIndex, setOpenIndex] = useState(0);
    const tabClickHandler=(index)=>{
        setActiveIndex(index)
    }
    const subtabClickHandler=(index)=>{
        setOpenIndex(index)
    }
    return (
        <div>
            <aside data-role="global-navigation" className={props.trigger ? "gnb no-transform" :"gnb"} id="gnb">
                {/* <!-- 상단 메뉴 --> */}
                <ul className="columnSet gnbNav rightedColumn">
                    <li className="mgRauto"><Link to="#/" onClick={e => e.preventDefault()} title="로그아웃" className="headerNav logoutBtn" role="button">로그아웃</Link></li>
                    <li><Link to="#/" onClick={e => e.preventDefault()} className="headerNav homeBtn" title="홈으로 이동" role="button">홈으로 이동</Link></li>
                    <li><Link to="#/" onClick={e => e.preventDefault()} className="headerNav searchBtn" title="검색하기" role="button">검색하기</Link></li>
                    <li><Link to="#/" onClick={e => e.preventDefault()} className="headerNav settingBtn" title="설정화면으로 이동" role="button">설정화면으로 이동</Link></li>
                </ul>
                <button type="button" className="headerNav closeBtn" id="gnbClose" onClick={hideOPen}>전체메뉴 닫기</button>

                <ul className="columnSet greeting pdT20 pdB20 bdB1">
                    {/* <!-- 로그인 전 노출
                    <li className="myallone_userPhoto"><a tabIndex="-1" className="bg1"><span><img src="/nomade/static/img/myallone/profile_sample.png" alt="" /></span></Link></li>
                    <li>
                        <span className="greeting_msg">로그인을 해주세요.</span>
                    </li>
                    --> */}
                    <li className="myallone_userPhoto"><Link to="#/" onClick={e => e.preventDefault()} tabIndex="-1" className="bg7" title="로그인 페이지 이동"><span><img src="/nomade/static/img/myallone/profile_sample.png" alt="사용자 프로필 사진" /></span></Link></li>
                    <li>
                        <Link to="#/" onClick={e => e.preventDefault()} title="로그인 페이지 이동">
                            <span className="greeting_msg mgB10">김농협님 오늘도 좋은하루 되세요!</span>
                            마지막 접속 2018-04-08 22:05
                        </Link>
                    </li>
                </ul>

                <div className="gnbList">
                    <ul className="columnSet">
                        <li>
                            <ul className="gnb-nav" data-level="1">
                                <li onClick={()=>tabClickHandler(0)}><Link to="#/" onClick={e => e.preventDefault()} className={activeIndex===0 ? "is-active" : ""}>NH금융그룹</Link></li>
                                <li onClick={()=>tabClickHandler(1)}><Link to="#/" onClick={e => e.preventDefault()} className={activeIndex===1 ? "is-active" : ""}>금융상품몰</Link></li>
                                <li onClick={()=>tabClickHandler(2)}><Link to="#/" onClick={e => e.preventDefault()} className={activeIndex===2 ? "is-active" : ""}>간편뱅크</Link></li>
                                <li onClick={()=>tabClickHandler(3)}><Link to="#/" onClick={e => e.preventDefault()} className={activeIndex===3 ? "is-active" : ""}>간편결제</Link></li>
                                <li onClick={()=>tabClickHandler(4)}><Link to="#/" onClick={e => e.preventDefault()} className={activeIndex===4 ? "is-active" : ""}>공과금</Link></li>
                                <li onClick={()=>tabClickHandler(5)}><Link to="#/" onClick={e => e.preventDefault()} className={activeIndex===5 ? "is-active" : ""}>환전/송금</Link></li>
                                <li onClick={()=>tabClickHandler(6)}><Link to="#/" onClick={e => e.preventDefault()} className={activeIndex===6 ? "is-active" : ""}>FUN&amp;LIFE</Link></li>
                                <li onClick={()=>tabClickHandler(7)}><Link to="#/" onClick={e => e.preventDefault()} className={activeIndex===7 ? "is-active" : ""}>고객센터</Link></li>
                            </ul>
                        </li>
                        <li className="colItem">
                            <ul className="lnb" data-level="2">
                                <li className={activeIndex===0 ? "is-lnbon" : ""}>
                                    <h2><Link to="#/" onClick={e => e.preventDefault()}>NH금융그룹</Link></h2> 
                                    <ul className="lnb-nav" data-level="3">
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()}>NH금융그룹</Link>
                                        </li>
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()}>NH농협은행</Link>
                                        </li>
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()}>NH농협카드</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={activeIndex===1 ? "is-lnbon" : ""}>
                                    <h2><Link to="#/" onClick={e => e.preventDefault()}>금융상품몰</Link></h2>
                                    <ul className="lnb-nav" data-level="3">
                                        <li>
                                            <Link to="#/" onClick={()=>subtabClickHandler(1)} title="입출금계좌개설">입출금계좌개설</Link>
                                            <div className={openIndex===1 ? "lnb-child is-open" : "lnb-child"}>
                                                <Link to="#/" onClick={()=>subtabClickHandler(setOpenIndex(false))} title="입출금계좌개설">입출금계좌개설</Link>
                                                <ul data-level="4">
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>입출금계좌개설</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>NH주거래우대통장</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>NH X 카카오페이통장</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>Magic Tree(매직트리)</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>NH모임통장</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>입출금계좌개설 FAQ</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="#/" onClick={()=>subtabClickHandler(2)} title="예/적금">예/적금</Link>
                                            <div className={openIndex===2 ? "lnb-child is-open" : "lnb-child"}>
                                                <Link to="#/" onClick={()=>subtabClickHandler(setOpenIndex(false))} title="예/적금">예/적금</Link>
                                                <ul data-level="4">
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>예/적금</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>NH올원해봄적금</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>e금리우대예금</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>NH왈츠회전예금Ⅱ</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>NH직장인월복리적금</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>e금리우대적금</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>주택청약종합저축</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>NH오토적금</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="#/" onClick={()=>subtabClickHandler(3)} title="대출">대출</Link>
                                            <div className={openIndex===3 ? "lnb-child is-open" : "lnb-child"}>
                                                <Link to="#/" onClick={()=>subtabClickHandler(setOpenIndex(false))} title="대출">대출</Link>
                                                <ul data-level="4">
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>대출</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>NH e직장인대출</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>NH e직장인중금리대출</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>NH모바일 전세 대출</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>NH간편오토론(신차)</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>NHU간편론</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>오토론신차</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>오토론중고차</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>오토리스</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>장기렌터카</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>NH미들론</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>햇살론</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>사잇돌대출Ⅱ</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>대출신청내역조회</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>대출약정신청/서류접수</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className={activeIndex===2 ? "is-lnbon" : ""}>
                                    <h2><Link to="#/" onClick={e => e.preventDefault()}>간편뱅크</Link></h2>
                                    <ul className="lnb-nav" data-level="3">
                                        <li>
                                            <Link to="#/" onClick={()=>subtabClickHandler(2)}>올원송금</Link>
                                            <div className={openIndex===2 ? "lnb-child is-open" : "lnb-child"}>
                                                <Link to="#/" onClick={()=>subtabClickHandler(setOpenIndex(false))}>올원송금</Link>
                                                <ul data-level="4">
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>송금하기</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>자주쓰는송금</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>송금내역조회</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="#/" onClick={()=>subtabClickHandler(3)}>더치페이</Link>
                                            <div className={openIndex===3 ? "lnb-child is-open" : "lnb-child"}>
                                                <Link to="#/" onClick={()=>subtabClickHandler(setOpenIndex(false))}>더치페이</Link>
                                                <ul data-level="4">
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>더치페이요청</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>더치페이내역조회</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>자주쓰는 더치페이</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()}>경조금</Link>
                                            <div className="lnb-child">
                                                <Link to="#/" onClick={e => e.preventDefault()}>경조금</Link>
                                                <ul data-level="4">
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>경조금보내기</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>초대장보내기</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>초대장내역조회</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()}>토스송금</Link>
                                            <div className="lnb-child">
                                                <Link to="#/" onClick={e => e.preventDefault()}>토스송금</Link>
                                                <ul data-level="4">
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>토스송금보내기</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>토스송금내역조회</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()}>스마트뱅킹 이체</Link>
                                        </li>
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()}>CD/ATM출금</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={activeIndex===3 ? "is-lnbon" : ""}>
                                    <h2><Link to="#/" onClick={e => e.preventDefault()}>간편결제</Link></h2>
                                    <ul className="lnb-nav" data-level="3">
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()} title="바코드결제">바코드결제</Link>
                                            <div className="lnb-child">
                                                <Link to="#/" onClick={e => e.preventDefault()} title="바코드결제">바코드결제</Link>
                                                <ul data-level="4">
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>바코드결제</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>바코드결제내역조회</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()}>모바일교통카드</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={activeIndex===4 ? "is-lnbon" : ""}>
                                    <h2><Link to="#/" onClick={e => e.preventDefault()}>공과금</Link></h2>
                                    <ul className="lnb-nav" data-level="3">
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()}>지로</Link>
                                            <div className="lnb-child">
                                                <Link to="#/" onClick={e => e.preventDefault()}>지로</Link>
                                                <ul data-level="4">
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>지로납부</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>지로납부내역조회/취소</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()}>계좌이동제</Link>
                                            <div className="lnb-child">
                                                <Link to="#/" onClick={e => e.preventDefault()}>계좌이동제</Link>
                                                <ul data-level="4">
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>서비스소개</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>자동납부등록내역조회/변경</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>자동납부변경신청조회/취소</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>자동송금내역조회/변경</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>자동송금변경신청결과조회</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()} title="NH스마트고지서">NH스마트고지서</Link>
                                            <div className="lnb-child">
                                                <Link to="#/" onClick={e => e.preventDefault()} title="NH스마트고지서">NH스마트고지서</Link>
                                                <ul data-level="4">
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>NH스마트고지서 안내</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className={activeIndex===5 ? "is-lnbon" : ""}>
                                    <h2><Link to="#/" onClick={e => e.preventDefault()}>환전/송금</Link></h2>
                                    <ul className="lnb-nav" data-level="3">
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()}>환율조회/계산기</Link>
                                        </li>
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()}>환전가능통화조회</Link>
                                        </li>
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()}>올원외화포켓</Link>
                                        </li>
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()} title="알뜰!환전">알뜰!환전</Link>
                                            <div className="lnb-child">
                                                <Link to="#/" onClick={e => e.preventDefault()} title="알뜰!환전">알뜰!환전</Link>
                                                <ul data-level="4">
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>환전신청</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>환전신청 내역조회</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className={activeIndex===6 ? "is-lnbon" : ""}>
                                    <h2><Link to="#/" onClick={e => e.preventDefault()}>FUN&amp;LIFE</Link></h2>
                                    <ul className="lnb-nav" data-level="3">
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()} title="FUN&amp;LIFE">FUN&amp;LIFE</Link>
                                        </li>
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()} title="결제">결제</Link>
                                            <div className="lnb-child">
                                                <Link to="#/" onClick={e => e.preventDefault()} title="결제">결제</Link>
                                                <ul data-level="4">
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>코나카드</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>캐시비</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()} title="쇼핑">쇼핑</Link>
                                            <div className="lnb-child">
                                                <Link to="#/" onClick={e => e.preventDefault()} title="쇼핑">쇼핑</Link>
                                                <ul data-level="4">
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>모바일쿠폰</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>HOT!잇템</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>농협몰</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className={activeIndex===7 ? "is-lnbon" : ""}>
                                    <h2><Link to="#/" onClick={e => e.preventDefault()}>고객센터</Link></h2>
                                    <ul className="lnb-nav" data-level="3">
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()}>고객센터안내</Link>
                                        </li>
                                        <li>
                                            <Link to="#/" onClick={e => e.preventDefault()} title="인증서복사">인증서복사</Link>
                                            <div className="lnb-child">
                                                <Link to="#/" onClick={e => e.preventDefault()} title="인증서복사">인증서복사</Link>
                                                <ul data-level="4">
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>인증서복사</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>PC에서 인증서 가져오기</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>스마트폰에서 인증서 가져오기</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>PC로 인증서 내보내기</Link></li>
                                                    <li><Link to="#/" onClick={e => e.preventDefault()}>스마트폰으로 인증서 내보내기</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>
            {props.trigger ? <div id="layerMask" className="dimmed"></div> : null}
        </div>
    )
}

export default SideBars;