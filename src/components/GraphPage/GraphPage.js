import React from "react";
import Graph from "../Graph/Graphs";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container"

function handleInput(e) {
  console.log(e.target.value);
}

export default function GraphPage() {
  return (
    <Container>
      <h1>AAPL Stock</h1>
      <Card>
        <ButtonGroup size="lg">
          <Button variant="light" value="1d" onClick={e => handleInput(e)}>1 day</Button>
          <Button variant="light" value="5d" onClick={e => handleInput(e)}>5 day</Button>
          <Button variant="light" value="1m" onClick={e => handleInput(e)}>1 month</Button>
          <Button variant="light" value="6m" onClick={e => handleInput(e)}>6 months</Button>
          <Button variant="light" value="ytd" onClick={e => handleInput(e)}>YTD</Button>
          <Button variant="light" value="1y" onClick={e => handleInput(e)}>1 year</Button>
          <Button variant="light" value="5y" onClick={e => handleInput(e)}>5 years</Button>
          <Button variant="light" value="max" onClick={e => handleInput(e)}>Max</Button>
        </ButtonGroup>
        <Card.Body>
          <Graph />
        </Card.Body>
      </Card>
  </Container>
  );
}
