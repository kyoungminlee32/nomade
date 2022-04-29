
function Footer() {
  return (
    <div>
        <ul className="columnSet selfBottom myMenu">
          <li className="colItem"><button type="button" className="myMenu01">금융상품몰</button></li>
          <li className="colItem"><button type="button" className="myMenu02">음성</button></li>
          <li className="colItem"><button type="button" className="myMenu03">상담톡</button></li>
          <li className="colItem"><button type="button" className="myMenu04">고객센터</button></li>
          {/* <!-- <li className="colItem"><button type="button" className="myMenu05">로그인</button></li> --> */}
          <li className="colItem"><button type="button" className="myMenu06">로그아웃</button></li>
        </ul>
    </div> 
    
  )
}

export default Footer;
