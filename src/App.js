import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <nav className='navbar-1 flex'>
          <span id='logo'>
            <span className='margin'></span>
            <i className="fa-brands fa-airbnb"></i>
            <div>airbnb</div>
          </span>
          <span>
            <span id='nav-toggle'>
              <ul>
                <li>숙소</li>
                <li>체험</li>
                <li>온라인 체험</li>
              </ul>
            </span>
            <span>
              <ul className='flex round-wrap group-btn'>
                <li className="bold">어디든지</li>
                <li className="bold">언제든 일주일</li>
                <li>게스트 추가</li>
                <span id='search'><i className="fa-solid fa-magnifying-glass"></i></span>
              </ul>
            </span>
          </span>

          <span className='flex nav-end'>
            <span className="bold nowrap nav-border">당신의 공간을 에어비앤비하세요</span>
            
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn-primary nav-border" data-bs-toggle="modal" data-bs-target="#exampleModal">
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


            <span className='margin'></span>
          </span>
        </nav>

        <nav className='navbar-2 flex'>
          <span className='flex navbar-2-start'>
            <span className='margin'></span>
            <span><i className="fa-solid fa-arrow-left"></i></span>
            <span>
              <ul className='flex nav-2-icons'>
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
            </span>
            <span><i className="fa-solid fa-arrow-right"></i></span>
          </span>

          <span className='flex nav-end'>
            <span className='flex filter nav-end__icons'>
              <span><i className="fa-solid fa-sliders"></i></span>
              <span>필터</span>
            </span>
            <span className='margin'></span>
          </span>
        </nav>



      </header>
{/* 
      <main>
        <div className="row row-cols-1 row-cols-md-6 g-4 main-cards">
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>

      </main>
      
      <footer>

        <div>
          <span>
            <ul>
              <li>에어비앤비 지원</li>
              <li>도움말센터</li>
            </ul>
            <ul>
              <li>호스팅</li>
              <li>당신의 공간을 에어비앤비하세요</li>
            </ul>
            <ul>
              <li>에이비엔비</li>
              <li>뉴스룸</li>
            </ul>
          </span>
          
          <span>
            <div>
              <div>카피라이트</div>
              <div>기타 링크</div>
            </div>
            <div>
              <span>한국어</span>
              <span>KRW</span>
              <span>지원 및 참고 자료 ^ </span>
            </div>
          </span>

          <div>
            <p>웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.</p>
          </div>


        </div>
      
      </footer>
     */}

    </div>
  );
}

export default App;
