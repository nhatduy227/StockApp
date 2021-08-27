import React from "react";
import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div>
      <div>
        <Jumbotron>
          <Container>
            <Row>
              <Row>
                <Col sm="12">
                  <p class="display-4 text-success">
                    <b>Making stock reviews easy for you!</b>
                  </p>
                </Col>
                <Row>
                  <Col md="9" className="align-left">
                    <p class="display-5">
                      <br />
                      <br /> Investing is for everyone, whether you're just
                      getting into it or are an industry professional. We're
                      here to help make navigating your options a little easier.{" "}
                      <br /> <br />
                      → Say goodbye to the cluttered dashboard you're used to
                      seeing. <br />
                      Our minimalistic UI is made with your accessibility in
                      mind!
                    </p>
                  </Col>
                  <Col sm="3">
                    <Image
                      src={require("./img/chibi_transparent_crop.png")}
                      alt="chibi"
                      fluid
                      width="175px"
                      height="175px"
                    />
                  </Col>
                </Row>
              </Row>
            </Row>
          </Container>
        </Jumbotron>
      </div>
      <div className="text-center">
        <div>
          <a class="btn btn-outline-success" href="/stockpage" role="button">
            Click here to browse through the stocks!
          </a>
        </div>
        <br></br>
        <br></br>
        <div>
          <Container>
            <Row>
              <Col>
                <Image src={require("./img/stocks.png")} alt="stocks" />{" "}
              </Col>
              <Col>
                <Image
                  src={require("./img/financeDuration.png")}
                  alt="finance"
                />{" "}
              </Col>
              <Col>
                <Image
                  src={require("./img/investmentPortfolio.png")}
                  alt="invest"
                />
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col sm>
                <div class="p-3 mb-2 bg-green text-dark">
                  Get started on your investing journey!
                </div>
              </Col>
              <Col sm>
                <div class="p-3 mb-2 bg-green text-dark">
                  Browse and track various stocks!
                </div>
              </Col>
              <Col sm>
                <div class="p-3 mb-2 bg-green text-dark">
                  Build up your stock portfolio!
                </div>
              </Col>
            </Row>
            <br></br>
          </Container>
        </div>
      </div>
    </div>
  );
}
