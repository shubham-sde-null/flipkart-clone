import React from "react";
import "./Cart.css";
import CartProducts from "./CartProducts";
import { useStateValue } from "./StateProvider";
function Cart() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="cart">
      <div className="cart__left">
        <div className="cart__leftHeading">
          <p>My Cart</p>

          <p>Deliver To Mumbai-4000xx</p>
          <button>Change</button>
        </div>
        <div
          className="cart__leftProducts
        "
        >
          {basket.map((item) => (
            <CartProducts
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="cart__right">
        <h1>Adding things in future</h1>
      </div>
    </div>
  );
}

export default Cart;
