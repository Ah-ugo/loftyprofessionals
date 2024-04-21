import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import Logo from "../../assests/images/logo.png"

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#about",
  },

  {
    display: "Courses",
    url: "#courses",
  },
  {
    display: "Pages",
    url: "#pages",
  },
  {
    display: "Blog",
    url: "#blog",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header" style={{overflow: "hidden", scrollbarWidth: "none", overflowY: "hidden", position: "fixed", top: 0, left: 0, right: 0, backgroundColor: "white", zIndex: 2000000}}>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between" style={{overflow: "hidden", scrollbarWidth: "none", overflowY: "hidden"}}>
          <div className="logo" style={{overflow: "hidden", scrollbarWidth: "none"}}>
            <div className=" d-flex align-items-center gap-1" style={{overflow: "hidden", scrollbarWidth: "none", overflowY: "hidden"}}>
              {/* <i class="ri-pantone-line"></i> Learners. */}
              <img src={Logo} width={70} height={70}/>
              <h1 style={{fontSize: 20, display: "flex",overflowY: "hidden"}}>Lofty Professional and <br/>Career Development<br className="d-block d-lg-none d-md-none d-xl-none"/> Consulting Ltd</h1>
            </div>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i> +2349019203703
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
