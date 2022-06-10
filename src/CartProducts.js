import React from "react";
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
      <img src={image} alt="" />
      <p className="cartProduct__title">{title}</p>
      {/* {title ? <p className="product__price">From ${price}</p> : ""} */}
      <p className="cartProduct__discount">From {price}</p>
      <button className="cartProduct__button" onClick={removeFromBasket}>
        Remove From Basket
      </button>
    </div>
  );
}

export default CartProducts;
