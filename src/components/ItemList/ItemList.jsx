/* eslint-disable react/prop-types */
import Item from "../Item/Item"; 

const ItemList = ({products}) => {
  return (
    <div className="itemlist">
      {products.map((product) => (
        <Item product={product} key={product.item_id} />
      ))}
      
    </div>
  );
};
export default ItemList;