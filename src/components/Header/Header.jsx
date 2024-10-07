import Navbar from "../NavBar/NavBar.jsx";


function Header(imagenlogo) {
  return (
    <header>
      <Navbar logo={imagenlogo} />
    </header>
  );
}

export default Header;
