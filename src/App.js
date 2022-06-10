import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Cart from "./Cart";

function App() {
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
          path="/more"
          element={
            <>
              <Header />
              <h1> Welcome To The More Page </h1>{" "}
            </>
          }
        />{" "}
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <h1> Welcome Cart Page </h1>{" "}
            </>
          }
        />{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;
