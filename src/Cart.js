import React from "react";
import "./Cart.css";
import CartProducts from "./CartProducts";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  // const getBasketTotal = (basket) =>
  //   basket?.reduce((amount, item) => item.price + amount, 0);
  const [{ basket, user }, dispatch] = useStateValue();
  console.log("this is total", getBasketTotal(basket));

  return (
    <div className="cart">
      <div className="cart__left">
        <div className="cart__leftHeading">
          <p className="cart__leftHeadingMyCart"> My Cart({basket.length}) </p>
          <p className="cart__leftHeadingAddress">
            Deliver To <span> Mumbai - Maharashtra </span>{" "}
          </p>{" "}
          <button className="cart__leftHeadingButton"> Change </button>{" "}
        </div>{" "}
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
          ))}{" "}
        </div>{" "}
      </div>{" "}
      <div className="cart__right">
        <div className="cart__rightPriceDetails"> PRICE DETAILS </div>{" "}
        <div>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p className="cart__rightTotalItems">
                  Total Items In Cart: {basket.length} <br />
                  Delivery Charges: 0{" "}
                </p>{" "}
                <strong className="cart__totalAmount">
                  Total Amount: {value}{" "}
                </strong>{" "}
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />{" "}
          <button
            className="cart__placeOrder"
            onClick={(e) => navigate("/payment")}
          >
            Place Order{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Cart;
