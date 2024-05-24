import { useState } from "react";

const NavBar = () => {
  const [menuStyles, setMenuStyles] = useState("mobile-menu");
  const [menuItens] = useState([
    {
      text: "Lista de Tarefas",
      path: "#",
    },
    { text: "Teste", path: "#" },
  ]);

  const handleMenu = () => {
    menuStyles === "mobile-menu"
      ? setMenuStyles("mobile-menu-flex")
      : setMenuStyles("mobile-menu");
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a href="#">Ashezim</a>
        </div>
        <ul className="nav-links-desktop">
          {menuItens.map((itens) => (
            <li key={itens.text}>
              <a href={itens.path}>{itens.text}</a>
            </li>
          ))}
        </ul>
        <div className={menuStyles}>
          <button className="close" onClick={handleMenu}>
            <i className="fas fa-times"></i>
          </button>
          <ul className="nav-links-mobile">
            {menuItens.map((itens) => (
              <li key={itens.text}>
                <a href={itens.path}>{itens.text}</a>
              </li>
            ))}
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
