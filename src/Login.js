import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase.js";
import { useNavigate } from "react-router-dom";
// import { useStateValue } from "./StateProvider";

function Login() {
  // const [{ user }, dispatch] = useStateValue();
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history("/"))
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__left">
          <div>
            <h2> Login </h2>{" "}
          </div>{" "}
          <div>
            <p> Get access to your Orders, Wishlist and Recommendations </p>{" "}
          </div>{" "}
          <div>
            <img
              src="https://www.linkpicture.com/q/loginPhoto.png"
              alt="loginphoto"
            />
          </div>{" "}
        </div>{" "}
        <div className="login__right">
          <form>
            <div className="login__userName">
              <input
                type="text"
                placeholder="Enter Email/Phone No"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />{" "}
            </div>{" "}
            <div className="login__userPassword">
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />{" "}
            </div>{" "}
            <div className="login_termsCondition">
              <p>
                By continuing, you agree to Flipkart 's{" "}
                <span>Terms of Use</span> and <span> Privacy Policy </span>.{" "}
              </p>{" "}
            </div>{" "}
            <div className="login__button">
              <button type="submit" onClick={signIn}>
                Login{" "}
              </button>{" "}
            </div>{" "}
            <div className="login__or">
              <p> Or </p>{" "}
            </div>{" "}
            <div className="login__otp">
              <button> Request OTP </button>{" "}
            </div>{" "}
            <div className="login__createAccount">
              <button type="submit" onClick={register}>
                New To Flipkart ? Create an account{" "}
              </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Login;
