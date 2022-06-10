import React from "react";
import "./Product.css";

function Product({ title, image, price }) {
  return (
    <div className="product">
      <img src={image} alt="" />
      <p className="product__title"> {title} </p>{" "}
      {/* {title ? <p className="product__price">From ${price}</p> : ""} */}{" "}
      <p className="product__price"> From₹ {price} </p>{" "}
    </div>
  );
}

export default Product;
