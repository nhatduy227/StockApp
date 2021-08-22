import React from "react";
import "./LandingPage.css";
import {
  Container,
  Row,
  Col,
  Image,
  Jumbotron,
  Button,
  Figure,
  Carousel,
} from "react-bootstrap";

export default function LandingPage() {
  return (
    <div
      className="text-center"
      style={{
        margin: "10%",
        marginTop: "0%",
        backgroundColor: "#DCDCDC",
        paddingBottom: "5%",
      }}
    >
      <div>
        <Jumbotron>
          <h2 class="display-4">Welcome to InvestiGators!</h2>
          <p class="lead">Making stock reviews easy for you!</p>
          <p style={{ fontSize: "14px", color: "#28a745" }}>
            Investing is for everyone, whether you're just getting into it or
            are an industry professional.
            <br />
            We're here to help make navigating your options a little easier.
          </p>
        </Jumbotron>
      </div>
      <div>
        <a
          class="btn btn-outline-success"
          href="/stockpage"
          role="button"
          style={{ fontWeight: "bold" }}
        >
          Click here to browse through the stocks!
        </a>
      </div>
      <br></br>
      <Carousel>
        <Carousel.Item>
          <img
            className="img-responsive center-block"
            src="https://i.ibb.co/yWgx3qS/160-1607808-stock-investing-insights-and-information-stocks-png-transparent-removebg-preview.png"
            alt="Stocks"
            height="322"
            width="456"
          />
          <Carousel.Caption>
            <h3 style={{ color: "Black" }}>Stocks</h3>
            <h7 style={{ color: "Black" }}>Browse and track various stocks!</h7>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-responsive center-block"
            src="https://i.ibb.co/3mRP2xv/403-4038938-duration-finance-icon-finance-hd-png-download-removebg-preview.png"
            alt="Finance"
            height="322"
            width=" 422"
          />

          <Carousel.Caption>
            <h3 style={{ color: "Black" }}>Finance</h3>
            <h7 style={{ color: "Black" }}>Build up your stock portfolio!</h7>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-responsive center-block"
            src="https://www.pngkey.com/png/full/154-1545563_assetmaxx-financial-portfolio-icon.png"
            alt="Invest"
            height="300"
            width="300"
          />

          <Carousel.Caption>
            <h3 style={{ color: "Black" }}>Invest</h3>
            <h7 style={{ color: "Black" }}>
              Get started on your investing journey!
            </h7>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
