import React from "react";
import Graph from "../Graph/Graphs";
import Card from "react-bootstrap/Card";

export default function GraphPage() {
  return (
    <div>
      <Card className="text-center">
      <Card.Header>AAPL Stocks</Card.Header>
        <Card.Body>
          <Graph />
        </Card.Body>
      </Card>
    </div>
  );
}
