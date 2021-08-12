import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-grid';


export default function LandingPage() {
  return (
  <div>
    {/* Insert hero banner here */}

    <p>This is the landing page</p>
    <button>
      <Link to="/stockpage">Get Start</Link>
    </button>
    <Container>
      <Row>
        <Col ><img src={require('./img/stocks.png').default} class = "icons" alt ="stocks"/> </Col>
        <Col ><img src={require('./img/investmentPortfolio.png').default} class = "icons" alt ="invest"/></Col>
        <Col ><img src={require('./img/financeDuration.png').default} class = "icons" alt ="finance"/> </Col>
      </Row>
      <Row>
        <Col sm>testing one two three</Col>
        <Col sm>testing one two three</Col>
        <Col sm>testing one two three</Col>
      </Row>

    </Container>

  </div>
  );
}
