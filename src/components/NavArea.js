import '../App.css';
import { useState } from 'react';

const NavTop = () => {

  let [toggle, setToggle] = useState(false);
  let [show, setShow] = useState(false);

  return (
    <>
      <nav className='navbar__1'>
        
        <span id='logo'>
          <i className="fa-brands fa-airbnb"></i>
          <div>airbnb</div>
        </span>
        <span className='space-area'></span>

        { toggle ?
        <span className='nav-midtop__3'>
          <span>숙소</span>
          <span>체험</span>
          <span>온라인 체험</span>
        </span>
        : null}
        
        { toggle ? null :
          <span className='nav-midtop__1 round-wrap__1' onClick={()=>{setToggle(true)}}>
            <span className="text__1">어디든지</span>
            <span className='divider'></span>
            <span className="text__1">언제든 일주일</span>
            <span className='divider'></span>
            <span>게스트 추가</span>
            <span id='search'><i className="fa-solid fa-magnifying-glass"></i></span>
        </span>}
        <span className='nav-end'>

          <span className="text__1 nav-border">당신의 공간을 에어비앤비하세요</span>
            
          {/* <!-- Button trigger modal --> */}
          <button type="button" className="nav-border" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="fa-solid fa-globe"></i>
          </button>

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

          {/* 드롭다운 */}
          {/* <!-- Large button groups (default and split) --> */}
          <div className="btn-group">
            <button className="btn-lg dropdown-toggle round-wrap__1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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

      {toggle ? <nav className='nav-bottom'>
        <div className='round-wrap__2'>
          <span className='round-wrap__3'>
            <div>여행지</div>
            <div>여행지 검색</div>
          </span>
          <span className='divider' />
          <span className='round-wrap__3'>
            <div>체크인</div>
            <div>날짜 추가</div>
          </span>
          <span className='divider' />
          <span className='round-wrap__3'>
            <div>체크아웃</div>
            <div>날짜 추가</div>
          </span>
          <span className='divider' />
          <span className='round-wrap__3'>
            <span>
              <div>여행자</div>
              <div>게스트 추가</div>
            </span>
            <span id='search'>
              <i className="fa-solid fa-magnifying-glass">검색</i>
            </span>
          </span>
        </div>
      </nav> : null}
      {toggle ? <div className='black-back'></div> : null}

      {show ? <div className='nav-bottom'>
        <div className='round-wrap__1'>
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <span>
            <span>어디든지</span>
            <span>언제든 일주일 · 게스트 추가</span>
          </span>
        </div>
        <span className='filter__1'><i className="fa-solid fa-sliders"></i></span>
      </div> : null}
    </>
  )
}

const NavBottom = () => {
  return(
    <nav className='navbar__1'>
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
        <span className='filter__2'>
          <span><i className="fa-solid fa-sliders"></i></span>
          <span>필터</span>
        </span>
      </span>
    </nav>
  )
}

export {NavTop, NavBottom}