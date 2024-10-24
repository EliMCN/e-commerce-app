/* eslint-disable react/prop-types */
import "./Item.css";
import {Link} from "react-router-dom";
import {useState} from "react";

const Item = ({product}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={product.image_url}
        alt={product.name}
        className="img-item"
        loading="lazy" 
      />
      <div className="card-content">
        <h2 className="card-title">
          <i>{product.name}</i>
        </h2>
        <p className="card-price"> $ {product.final_retail_price}</p>
        <p className="card-available">
           {product.available > 0 ? product.available : "No disponible"}
        </p>
        <Link
          to={`/detail/${product.item_id}`}
          aria-label={`Ver detalles de ${product.name}`}
          className="details-linkbtn"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;