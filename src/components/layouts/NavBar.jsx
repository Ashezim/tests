import { useState } from "react";

const NavBar = () => {
  const [stylesMenu, setStylesMenu] = useState("mobile-menu");

  const handleMenu = () => {
    stylesMenu === "mobile-menu"
      ? setStylesMenu("mobile-menu-flex")
      : setStylesMenu("mobile-menu");
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a href="/">Ashezim</a>
        </div>
        <ul className="nav-links-desktop">
          <li>
            <a href="/">Lista de Tarefas</a>
          </li>
        </ul>
        <div className={stylesMenu}>
          <button className="close" onClick={handleMenu}>
            <i className="fas fa-times"></i>
          </button>
          <ul className="nav-links-mobile">
            <li>
              <a href="#">Início</a>
            </li>
          </ul>
        </div>
        <button className="hamburger" onClick={handleMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
