import React from "react";
import { Container, Row, Col, Image, Jumbotron, Button, Figure} from 'react-bootstrap';

export default function LandingPage() {
  return (
  <div className="text-center">
    <div> 
      <Jumbotron>
        <p class="display-4">Welcome to InvestiGators!</p>
        <Figure>
          <Figure.Image
            width={1000}
            src={require('./img/banner.jpg').default}
          />
          </Figure>
      </Jumbotron>
    </div>
    <div> 
      <a class="btn btn-outline-success" href="/stockpage" role="button">Click here to browse through the stocks!</a>
    </div>
    <br></br>
    <div>
      <Container>
        <Row >
          <Col ><Image src={require('./img/stocks.png').default} alt ="stocks"/> </Col>
          <Col ><Image src={require('./img/financeDuration.png').default} alt ="finance"/> </Col>
          <Col ><Image src={require('./img/investmentPortfolio.png').default} alt ="invest"/></Col>

        </Row>
        <br></br>
        <Row >
          <Col sm><div class="p-3 mb-2 bg-light text-dark">Get started on your investing journey!</div></Col>
          <Col sm><div class="p-3 mb-2 bg-light text-dark">Browse and track various stocks!</div></Col>
          <Col sm><div class="p-3 mb-2 bg-light text-dark">Build up your stock portfolio!</div></Col>
        </Row>

      </Container>      
    </div>
   </div>
  );
}