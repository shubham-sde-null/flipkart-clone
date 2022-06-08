import React from "react";
import "./ActualProduct.css";
function ActualProduct({ title, image, discount }) {
  return (
    <div className="actualProducts">
      <img src={image} alt="" />
      <p className="actualProduct__title">{title}</p>
      {/* {title ? <p className="product__price">From ${price}</p> : ""} */}
      <p className="actualProduct__price">Min.{discount}Off</p>
    </div>
  );
}

export default ActualProduct;
