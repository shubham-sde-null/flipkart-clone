import React from "react";
import "./BootSlider.css";
import { Carousel } from "react-bootstrap";
function BootSlider() {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block carousel__image"
            src="https://images.samsung.com/is/image/samsung/assets/in/offer/online/moonrise-madness/b2c-moonrise-madness-tv-1920x545-070622.jpg?$ORIGIN_JPG$"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel__image"
            src="https://www.linkpicture.com/q/moto_1.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BootSlider;
