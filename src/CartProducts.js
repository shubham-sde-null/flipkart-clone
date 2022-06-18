import React from "react";
import "./CartProducts.css";
import { useStateValue } from "./StateProvider";
function CartProducts({ image, title, price }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      title: title,
    });
  };
  return (
    <div className="cartProduct">
      <div className="cartProduct__image">
        <img src={image} alt="" />
      </div>
      <div className="cartProduct__info">
        <p className="cartProduct__title">{title}</p>
        {/* {title ? <p className="product__price">From ${price}</p> : ""} */}
        <p className="cartProduct__price">₹ {price}</p>
        <p className="cartProduct__stock">In Stock</p>
        <button className="cartProduct__button" onClick={removeFromBasket}>
          Remove From Cart
        </button>
      </div>
    </div>
  );
}

export default CartProducts;
