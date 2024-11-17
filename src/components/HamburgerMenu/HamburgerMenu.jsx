import "./HamburgerMenu.css";

// eslint-disable-next-line react/prop-types
function HamburgerMenu({toggleOffcanvas}) {
  return (
    <button
      className="navbar-toggler"
      onClick={toggleOffcanvas}
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}

export default HamburgerMenu;
