import React, {useState} from "react";
import Graph from "../Graph/Graphs";
import RangeSelect from "../RangeSelect/RangeSelect";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"


export default function GraphPage(props) {
  const [range, setRange] = useState("max");

  return (
    <Container>
      <h1>AAPL Stock</h1>
      <Card>
        <RangeSelect setRange={setRange}/>
        <Card.Body>
          <Graph ticker={props.match.params.ticker} range={range}/>
        </Card.Body>
      </Card>
  </Container>
  );
}
