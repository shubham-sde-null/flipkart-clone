import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Cart from "./Cart";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is", authUser);
      if (authUser) {
        //the user just logged in or was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    //it's kind of observer whenever we log in or log out it will observe our states changed
  }, []);
  //this is used to run only once
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />{" "}
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login /> {/* <h1>Welcome to login page</h1> */}{" "}
            </>
          }
        />{" "}
        <Route
          path="/becomeseller"
          element={
            <>
              <Header />
              <h1> Welcome to Becomming Seller Page </h1>{" "}
            </>
          }
        />{" "}
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <Cart />
            </>
          }
        />{" "}
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Payment />
            </>
          }
        />{" "}
        <Route
          path="/more"
          element={
            <>
              <Header />
              <h1> Welcome To The More Page </h1>{" "}
            </>
          }
        />{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;
