import React from "react";
import { Card } from "react-bootstrap";
import Products from "../products/Products";

const Home = () => {
  return (
    <div className="hero">
      <Card className="bg-dark text-white border-0">
        <Card.Img
          src="/assets/images/bg.jpg"
          className="cart-img"
          height="500px"
          alt="Card image"
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center">
          <div className="container ">
            <Card.Title className="display-5 fw-bolder mb-0 ">
              NEW SESSIONS ARRIVAL
            </Card.Title>
            <Card.Text className="lead fs-2">
              CHECK OUT ALL THE NEW TRANS
            </Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
      <Products/>
    </div>
  );
};

export default Home;
