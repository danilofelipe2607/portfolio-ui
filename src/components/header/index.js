import { useEffect, useState } from "react";
import "../../css/header.css";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";

export default function Header() {
  const [activeHeader, setActiveHeader] = useState(false);

  const positionScroll = () => {
    if (window.scrollY > 40) setActiveHeader(true);
    else setActiveHeader(false);
  };

  useEffect(() => {
    positionScroll();
    window.addEventListener("scroll", positionScroll);
  }, []);

  const toogleMenu = (event) => {
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
      event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  };
  const activeMenu = () => {
    const btnMobile = document.getElementById("btn-mobile");
    btnMobile.addEventListener("click", toogleMenu);
    btnMobile.addEventListener("touchstart", toogleMenu);
  };

  return (
    <>
      <header className={activeHeader ? "active-header" : ""}>
        <img
          src="http://rolleoficial.com/wp-content/uploads/2019/05/LOGO-ROLLE-PNG.png"
          className="logo"
          alt="logo"
        />
        <nav id="nav">
          <button
            id="btn-mobile"
            onClick={activeMenu}
            aria-expanded="false"
            aria-controls="menu"
            aria-haspopup="true"
            aria-label="Abrir Menu"
          >
            <span id="hamburger"></span>
          </button>
          <ul id="menu" role="menu">
            <li>
              {" "}
              <a href="/">Home</a>
            </li>
            <li>
              {" "}
              <a href="/">Sobre</a>
            </li>
            <li>
              {" "}
              <a href="/">Portfolio</a>
            </li>
            <li>
              {" "}
              <a href="/">Contato</a>
            </li>
          </ul>
        </nav>
        <div className="rede-sociais">
          <AiFillInstagram className="icon-social" />
          <RiFacebookCircleLine className="icon-social" />
          <AiFillYoutube className="icon-social" />
        </div>
      </header>
    </>
  );
}
