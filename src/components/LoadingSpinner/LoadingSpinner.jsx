// Instalo por npm libreria para spinners   npm install --save react-spinners
import TshirtImage from '../../assets/Tshirt.webp';
import "./LoadingSpinner.css";
import {ClipLoader} from "react-spinners";


// eslint-disable-next-line react/prop-types
const LoadingSpinner = ({loading}) => {
  console.log("Loading:", loading);
  return (
    <div className="spinner-container">
      {loading && (
        <div className="loading-content">
          <div className="spinner-text">
            {/* Contenedor para el texto y el spinner */}
            <p>Cargando ...</p>
            <ClipLoader
              color={"#0e747d"}
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
            />
            <img
              src={TshirtImage}
              alt="Cargando datos"
              className="loading-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;