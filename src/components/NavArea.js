import '../App.css';
import './NavStyle.scss';

const NavArea = () => {
  const navToggle = () => {
    const toggleArea = document.querySelectorAll("#toggle")
    toggleArea.forEach(e=>{
      e.classList.toggle("hidden")
    })
  }

  return (
    <header>
      <nav className='nav-top'>
        
        <span className='nav-top__start'>
          <i className="fa-brands fa-airbnb"></i>
          <div>airbnb</div>
        </span>

        {/* 토글 구간 */}

        <span className='nav-top__mid hidden' onClick={navToggle} id='toggle'>
          <span>숙소</span>
          <span>체험</span>
          <span>온라인 체험</span>
        </span>

        <span className='nav-top__mid' onClick={navToggle} id='toggle'>
          <span className='btn-group'>
            <span>어디든지</span>
            <span className='divider'></span>
            <span>언제든 일주일</span>
            <span className='divider'></span>
            <span>게스트 추가</span>
            <span id='search'><i className="fa-solid fa-magnifying-glass"></i></span>
          </span>
        </span>

        {/* 토글 구간 */}

        <span className='nav-top__end'>
          <span>
            <p>당신의 공간을 에어비앤비하세요</p>

            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i className="fa-solid fa-globe" />
            </button>
            
            {/* 드롭다운 */}
            {/* <!-- Large button groups (default and split) --> */}
            <div className="btn-group">
              <button className="btn-lg dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-user"></i>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">회원가입</a></li>
                <li><a className="dropdown-item" href="/">로그인</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">도움말 센터</a></li>
              </ul>
            </div>
          </span>

          {/* 드롭다운 */}
          {/* <!-- Button trigger modal --> */}
          {/* <!-- Modal --> */}
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-head">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  <div className='modal-text1'>
                    <span className='modal-textover'>언어와 지역</span>
                    <span className='modal-textover'>통화</span>
                  </div>
                </div>
                <hr className="modal-divider" />
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
                  <div className='modal-text3'>언어와 지역을 선택하세요</div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </nav>

      {/* 토글 구간__2 */}

      <nav className='nav-top__mid' id='toggle'>
        <div className='btn-group'>
          <span>
            <div>여행지</div>
            <div>여행지 검색</div>
          </span>
          <span className='divider' />
          <span>
            <div>체크인</div>
            <div>날짜 추가</div>
          </span>
          <span className='divider' />
          <span>
            <div>체크아웃</div>
            <div>날짜 추가</div>
          </span>
          <span className='divider' />
          <span className='btn-group'>
            <span>
              <div>여행자</div>
              <div>게스트 추가</div>
            </span>
            <span className='search'>
              <i className="fa-solid fa-magnifying-glass">검색</i>
            </span>
          </span>
        </div>
      </nav>

      <div className='divider-column' />

      <nav className='nav-bottom'>
        <div className='nav-bottom__icon-wrapper'>
          <div className="paddles">
            <div className='paddle-left__back paddle-wrapper'>
              <button className="paddle-left paddle-btn">
                <i className="fa-solid fa-angle-left"></i>
              </button>
            </div>
          </div>
          <ul className='nav-bottom__icons'>
            <li>
              <i className="fa-regular fa-star"></i>
              <div>최고의 전망</div>
            </li>
            
          </ul>
          <div className="paddles">
            <div className='paddle-rigth__back paddle-wrapper'>
              <button className="paddle-right paddle-btn">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
        <span className='nav-bottom__end btn-group'>
          <span>
            <span><i className="fa-solid fa-sliders"></i></span>
            <span>필터</span>
          </span>
        </span>
      </nav>
      <div className='divider-column' />
    </header>
  )
}

export {NavArea}