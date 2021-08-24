import React, { Suspense, useState } from "react";
import Graph from "../Graph/Graphs";
import RangeSelect from "../RangeSelect/RangeSelect";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function GraphPage(props) {
  const [range, setRange] = useState("max");

  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <Container>
        <h1>{props.match.params.ticker} Stock</h1>
        <Card>
          <RangeSelect setRange={setRange} />
          <Card.Body>
            <Graph ticker={props.match.params.ticker} range={range} />
          </Card.Body>
        </Card>
      </Container>
    </Suspense>
  );
}
