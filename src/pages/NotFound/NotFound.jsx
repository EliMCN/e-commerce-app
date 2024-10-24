import notFoundImage from "../../assets/Error.webp"; 
import "./NotFound.css"; 
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src={notFoundImage} alt="Not Found" className="not-found-image" />
      <h1 className="not-found-title">404 - Página No Encontrada</h1>
      <p className="not-found-description">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Link to="/" className="not-found-link">
        Volver a la Página Principal
      </Link>      
    </div>
  );
};

export default NotFound;
