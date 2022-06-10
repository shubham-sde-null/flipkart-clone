import React from "react";
import "./ActualProduct.css";
import { useStateValue } from "./StateProvider";

function ActualProduct({ title, image, price, id }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        image: image,
        price: price,
      },
    });
  };
  return (
    <div className="actualProducts">
      <img src={image} alt="" />
      <p className="actualProduct__title"> {title} </p>
      {/* {title ? <p className="product__price">From ${price}</p> : ""} */}
      <p className="actualProduct__price">{price}</p>
      <button onClick={addToBasket}> Add To Basket </button>
    </div>
  );
}

export default ActualProduct;
