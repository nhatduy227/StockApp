import React from "react";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function RangeSelect({ setSelectedRange }) {
  const setRange = (range) => {
    setSelectedRange(range);
  };

  return (
    <ButtonGroup size="lg">
      <Button variant="light" onClick={() => setRange("1d")}>
        1 day
      </Button>
      <Button variant="light" onClick={() => setRange("5d")}>
        5 day
      </Button>
      <Button variant="light" onClick={() => setRange("1m")}>
        1 month
      </Button>
      <Button variant="light" onClick={() => setRange("6m")}>
        6 months
      </Button>
      <Button variant="light" onClick={() => setRange("ytd")}>
        YTD
      </Button>
      <Button variant="light" onClick={() => setRange("1y")}>
        1 year
      </Button>
      <Button variant="light" onClick={() => setRange("5y")}>
        5 years
      </Button>
      <Button variant="light" onClick={() => setRange("max")}>
        Max
      </Button>
    </ButtonGroup>
  );
}
