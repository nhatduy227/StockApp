import React, {useState} from "react";
import Graph from "../Graph/Graphs";
import RangeSelect from "../RangeSelect/RangeSelect";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"



export default function GraphPage() {
  const [setSelectedMode] = useState("max");

  return (
    <Container>
      <h1>AAPL Stock</h1>
      <Card>
        <RangeSelect/>
        <Card.Body>
          <Graph setSelectedMode={setSelectedMode}/>
        </Card.Body>
      </Card>
  </Container>
  );
}
