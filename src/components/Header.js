import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import './Header.scss';


function Header() {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  const [scrollPos, setScrollPos] = useState(0);
  const scrollMenu = () => {
    setScrollPos(window.scrollY || document.documentElement.scrollTop);
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollMenu);
  })

  return (
    <header>
      <div className={`header_wrap ${scrollPos > 100 && 'color_change'}`}>
        <div className="logo_menu">
          <h1><Link to="/" className="logo">TVING</Link></h1>
          <div><Link to="/live" className="color_menu live">실시간</Link></div>
          <div><Link to="/tv" className="color_menu tv">TV프로그램</Link></div>
          <div><Link to="/movie" className="color_menu movie">영화</Link></div>
          <div><Link to="/paramount" className="color_menu paramount">Paramount+</Link></div>
        </div>

        <div className="side">
          <button type="button" className="serach"><CiSearch /></button>
          <div className="my_menu" onMouseOver={() => {setHover(!hover); setVisible(true);}} onMouseLeave={() => setHover(false)}>
            <img src="https://image.tving.com/upload/profile/default.png/dims/resize/100" alt="티빙 프로필 기본이미지" />
          </div>

          <div className={`my_menu_content ${hover ? 'hover' : 'out'} ${visible? 'visible' : 'out'}`} onMouseLeave={() => {setHover(false); setVisible(false);}} onMouseOver={() => setHover(true)}>
            <div className="img_info_warp">
              <div className="profile_img">
                <img src="https://image.tving.com/upload/profile/default.png/dims/resize/100" alt="티빙 프로필 기본이미지" />
              </div>
              <div className="profile_info">
                <p className="name">User</p>
                <button type="button" className="info_change">프로필 전환 <AiOutlineRight /></button>
              </div>
            </div> 
            <hr />
            <ul className="my_menu_wrap">
              <li><a href="#!">MY</a></li>
              <li><a href="#!">이용권</a></li>
              <li><a href="#!">쿠폰등록</a></li>
              <li><a href="#!">고객센터</a></li>
              <li><a href="#!">로그아웃</a></li>
            </ul>
          </div>
          

        </div>
      </div>
    </header>
  )
}

export default Header;