import "./cartWidget.css"; 

// eslint-disable-next-line react/prop-types
const CartWidget = ({itemCount}) => {
  return (
    <div className="cart-widget">
      <i className="bi bi-cart-fill"></i> 
      {itemCount > 0 && <span className="item-count">{itemCount}</span>}{" "}      
    </div>
  );
};

export default CartWidget;
