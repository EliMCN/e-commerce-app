/* eslint-disable react/prop-types */
import Navbar from "../NavBar/NavBar.jsx";
import "./Header.css"
import logo from "../../assets/logo_blanco.webp";

function Header({ categories }) {
  
  return (
    <header>
      <Navbar categories={categories} logo={logo} />
    </header>
  );
}

export default Header;