import '../App.css';

const NavTop = () => {

  const handleToggle = () => {
    const toggleBar = document.querySelector(".nav-toggle")
    if (!toggleBar.data){
      toggleBar.classList.remove("hidden")
      toggleBar.data = true
    }
  }
  return (
    <nav className='navbar-1 flex'>
      
      <span id='logo'>
        <i className="fa-brands fa-airbnb"></i>
        <div>airbnb</div>
      </span>

      <span>
        <span className='nav-toggle hidden' data-toggle="false">
          <ul>
            <li>숙소</li>
            <li>체험</li>
            <li>온라인 체험</li>
          </ul>
        </span>

        <span>
          <ul className='flex round-wrap group-btn' onClick={handleToggle}>
            <li className="bold">어디든지</li>
            <li className="bold">언제든 일주일</li>
            <li>게스트 추가</li>
            <span id='search'><i className="fa-solid fa-magnifying-glass"></i></span>
          </ul>
        </span>
      </span>

      <span className='flex nav-end'>
        <span className="bold nav-border">당신의 공간을 에어비앤비하세요</span>
        
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="nav-border" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i className="fa-solid fa-globe"></i>
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div className='modal-text1'>
                  <span>언어와 지역</span>
                  <span>통화</span>
                </div>
              </div>
              <div className="modal-body">
                <div className='modal-text2'>
                  <span id='translate'>
                    <div>
                      <span>번역 </span>
                      <i className="fa-solid fa-language"></i>
                    </div>
                    <div>설명과 후기가 한국어로 자동 번역됩니다.</div>
                  </span>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" />
                  </div>  
                </div>
                <div className='modal-text3'>추천 언어 및 지역</div>
              </div>

            </div>
          </div>
        </div>

        {/* 드롭다운 */}
        {/* <!-- Large button groups (default and split) --> */}
        <div className="btn-group">
          <button className="btn-lg dropdown-toggle round-wrap2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-user"></i>
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">회원가입</a></li>
            <li><a className="dropdown-item" href="/">로그인</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">도움말 센터</a></li>
          </ul>
        </div>
        {/* 드롭다운 */}
      </span>
    </nav>
  )
}

const NavBottom = () => {
  return(
    <nav className='navbar-2 flex'>
      <div className="paddles">
        <span className="left-paddle paddle-back hidden"></span>
        <button className="left-paddle paddle hidden">
          <i className="fa-solid fa-arrow-left left-paddle"></i>
        </button>
        <span className="right-paddle paddle-back"></span>
        <button className="right-paddle paddle">
          <i className="fa-solid fa-arrow-right left-paddle"></i>
        </button>
      </div>

      <ul className='nav-2-icons'>
        <li>
          <i className="fa-regular fa-star"></i>
          <span>최고의 전망</span>
        </li>
        <li>
          <i className="fa-solid fa-bed"></i>
          <span>방</span>
        </li>
        <li>
          <i className="fa-solid fa-hotel"></i>
          <span>호텔</span>
        </li>
        <li>
          <i className="fa-regular fa-building"></i>
          <span>도시</span>
        </li>
        <li>
          <i className="fa-solid fa-mug-saucer"></i>
          <span>B&B</span>
        </li>
        <li>
          <i className="fa-solid fa-utensils"></i>
          <span>레스토랑</span>
        </li>
        <li>
          <i className="fa-solid fa-tree"></i>
          <span>한적한 시골</span>
        </li>
        <li>
          <i className="fa-solid fa-wine-bottle"></i>
          <span>와인 농장</span>
        </li>
        <li>
          <i className="fa-solid fa-otter"></i>
          <span>동물원</span>
        </li>
        <li>
        <i className="fa-solid fa-gamepad"></i>
          <span>키즈</span>
        </li>
        <li>
          <i className="fa-solid fa-tower-observation"></i>
          <span>타워</span>
        </li>
        <li>
          <i className="fa-solid fa-mountain"></i>
          <span>고지대</span>
        </li>
        <li>
          <i className="fa-solid fa-palette"></i>
          <span>전시</span>
        </li>
        <li>
          <i className="fa-solid fa-golf-ball-tee"></i>
          <span>골프장</span>
        </li>
        <li>
          <i className="fa-solid fa-key"></i>
          <span>신규</span>
        </li>
        <li>
          <i className="fa-solid fa-house-tsunami"></i>
          <span>호숫가</span>
        </li>
        <li>
          <i className="fa-solid fa-person-swimming"></i>
          <span>해변 근처</span>
        </li>
        <li>
          <i className="fa-solid fa-campground"></i>
          <span>캠프</span>
        </li>
        <li>
          <i className="fa-solid fa-sailboat"></i>
          <span>보트</span>
        </li>
        <li>
          <i className="fa-solid fa-ship"></i>
          <span>섬</span>
        </li>
      </ul>
      
      <span className='nav-end'>
        <span className='filter'>
          <span><i className="fa-solid fa-sliders"></i></span>
          <span>필터</span>
        </span>
      </span>
    </nav>
  )
}

export {NavTop, NavBottom}