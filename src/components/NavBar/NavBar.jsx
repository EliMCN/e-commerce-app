/* eslint-disable react/prop-types */
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import logo from "../../assets/logo_blanco.webp";
import "./NavBar.css";

function Navbar({ categories }) {
  
  // Estado para controlar la visibilidad del offcanvas y el dropdown de categorías
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Cierra el offcanvas cuando la pantalla es grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOffcanvasOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Alterna el offcanvas y el dropdown
  const toggleOffcanvas = () => setIsOffcanvasOpen(!isOffcanvasOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="container-menu">
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img className="logo" src={logo} alt="Logo" />
          </Link>

          {/* Menú navegable horizontal para pantallas grandes */}
          <ul className="navbar-nav-horizontal">
            <li className="nav-item">
              <Link to="/ofertas" className="nav-link">
                OFERTAS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tienda" className="nav-link">
                TIENDA ONLINE
              </Link>
            </li>
            {/* Dropdown de Categorías */}
            <li className="nav-item dropdown">
              <button
                className="dropdown-toggle nav-link"
                onClick={toggleDropdown}
              >
                Nuestros Productos
              </button>
              <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                {categories && categories.length > 0 ? (
                  categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        to={`/category/${category}`}
                        className="dropdown-item"
                        onClick={toggleDropdown}
                      >
                        {category}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <span className="dropdown-item">No hay categorías</span>
                  </li>
                )}
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link">
                CONTACTO
              </Link>
            </li>
          </ul>

          {/* Botón hamburguesa para abrir el offcanvas */}
          <HamburgerMenu toggleOffcanvas={toggleOffcanvas} />

          {/* Carrito en el header */}

          <CartWidget />

          {/* Offcanvas menu para pantallas pequeñas */}
          <div
            className={`offcanvas offcanvas-end ${
              isOffcanvasOpen ? "show" : ""
            }`}
            tabIndex="-1"
          >
            <div className="offcanvas-header">
              <Link to="/" className="navbar-brand">
                <img className="logo" src={logo} alt="Logo" />
              </Link>
              <h5 className="offcanvas-title">Tienda Magica</h5>
              <button
                type="button"
                className="btn-close"
                onClick={toggleOffcanvas}
                aria-label="Close"
              >
                X
              </button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/ofertas"
                    className="nav-link underline"
                    onClick={toggleOffcanvas}
                  >
                    OFERTAS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/tienda"
                    className="nav-link underline"
                    onClick={toggleOffcanvas}
                  >
                    TIENDA ONLINE
                  </Link>
                </li>

                {/* Dropdown de Categorías */}
                <li className="nav-item dropdown">
                  <button
                    className="dropdown-toggle nav-link underline"
                    onClick={toggleDropdown}
                  >
                    Nuestros Productos
                  </button>
                  <ul
                    className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                  >
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          to={`/category/${category}`}
                          className="dropdown-item"
                          onClick={() => {
                            toggleDropdown();
                            toggleOffcanvas();
                          }}
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    to="/contacto"
                    className="nav-link underline"
                    onClick={toggleOffcanvas}
                  >
                    CONTACTO
                  </Link>
                </li>

                {/* Carrito en el offcanvas */}
                <li className="nav-item">
                  <CartWidget />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
