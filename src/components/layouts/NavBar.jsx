import { useState } from "react";
import PropTypes from "prop-types";

const NavBar = ({ setPage }) => {
  const [menuStyles, setMenuStyles] = useState("mobile-menu");
  const menuItens = [
    {
      text: "Lista de Tarefas",
      path: "ToDoList",
      // path: "#",
    },
  ];

  const handleMenu = () => {
    menuStyles === "mobile-menu"
      ? setMenuStyles("mobile-menu-flex")
      : setMenuStyles("mobile-menu");
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <button onClick={() => setPage("Home")}>Ashezim</button>
        </div>
        <ul className="nav-links-desktop">
          {menuItens.map((itens) => (
            <li key={itens.text}>
              <button onClick={() => setPage(itens.path)}>{itens.text}</button>
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
                <button onClick={() => setPage(itens.path)}>
                  {itens.text}
                </button>
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

NavBar.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default NavBar;
