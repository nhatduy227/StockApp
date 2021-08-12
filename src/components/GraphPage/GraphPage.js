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
          <Button variant="light" value="1d">1 day</Button>
          <Button variant="light" value="5d">5 day</Button>
          <Button variant="light" value="1m">1 month</Button>
          <Button variant="light" value="6m">6 months</Button>
          <Button variant="light" value="ytd">YTD</Button>
          <Button variant="light" value="1y">1 year</Button>
          <Button variant="light" value="5y">5 years</Button>
          <Button variant="light" value="max">Max</Button>
        </ButtonGroup>
        <Card.Body>
          <Graph />
        </Card.Body>
      </Card>
    </div>
  );
}
