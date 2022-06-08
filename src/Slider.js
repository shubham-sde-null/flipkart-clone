import React from "react";
import "./Slider.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Carousel from 'react-bootstrap/Carousel'
import { Carousel } from "react-bootstrap";
function Slider() {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1495277493816-4c359911b7f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3> First slide label </h3>{" "}
            <p> Nulla vitae elit libero, a pharetra augue mollis interdum. </p>{" "}
          </Carousel.Caption>{" "}
        </Carousel.Item>{" "}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1473800447596-01729482b8eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3> Second slide label </h3>{" "}
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>{" "}
          </Carousel.Caption>{" "}
        </Carousel.Item>{" "}
      </Carousel>{" "}
    </div>
  );
}

export default Slider;
