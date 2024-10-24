import { Link } from "react-router-dom";
import "./ofertas.css"
import imagen1 from "../../assets/banner-tienda.png";
const Ofertas = () => {
  return (
    <div className="Ofertas">
      <h1>Ofertas Especiales</h1>
      {/* Pagina a desarrollar */}
      <Link to="/" className="">
        <img src={imagen1} alt="" />
      </Link>
      <Link to="/" className="">
        Volver a la Página Principal
      </Link>
    </div>
  );
};

export default Ofertas;
