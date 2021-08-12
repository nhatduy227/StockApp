import React from "react";
import Graph from "../Graph/Graphs";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function GraphPage() {
  return (
    <div>
      <h1>AAPL Stock</h1>
      <Card>
        <ButtonGroup size="lg">
          <Button>1 day</Button>
          <Button>5 day</Button>
          <Button>1 month</Button>
          <Button>6 months</Button>
          <Button>YTD</Button>
          <Button>1 year</Button>
          <Button>5 years</Button>
          <Button>Max</Button>
        </ButtonGroup>
        <Card.Body>
          <Graph />
        </Card.Body>
      </Card>
    </div>
  );
}
