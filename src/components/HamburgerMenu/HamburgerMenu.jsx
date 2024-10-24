// src/components/HamburgerMenu.jsx
//Componente hijo de NavBar
//recibe dos props: isNavOpen y toggleNav.
//Renderiza el botón del menú hamburguesa y utiliza el estado para determinar su apariencia.

import "./HamburgerMenu.css"; 


// eslint-disable-next-line react/prop-types
function HamburgerMenu({isNavOpen, toggleNav}) {
  const buttonStyle = isNavOpen ? "navbar-toggle active" : "navbar-toggle";

  return (
    <button
      className={buttonStyle}
      onClick={toggleNav}
      aria-label="Toggle navigation"
      aria-expanded={isNavOpen}
    >
      <i className={`bi ${isNavOpen ? "bi-x-circle" : "bi-list"}`}></i>
    </button>
  );
}

export default HamburgerMenu;