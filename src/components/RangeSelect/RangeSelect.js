import React from "react";

import { Button,ButtonGroup} from "react-bootstrap";

export default function RangeSelect({ setRange }) {
  const setNewRange = (range) => {
    setRange(range);
  };

  return (
    <ButtonGroup size="lg">
      <Button variant="light" onClick={() => setNewRange("5d")}>
        5 day
      </Button>
      <Button variant="light" onClick={() => setNewRange("1m")}>
        1 month
      </Button>
      <Button variant="light" onClick={() => setNewRange("6m")}>
        6 months
      </Button>
      <Button variant="light" onClick={() => setNewRange("ytd")}>
        YTD
      </Button>
      <Button variant="light" onClick={() => setNewRange("1y")}>
        1 year
      </Button>
      <Button variant="light" onClick={() => setNewRange("5y")}>
        5 years
      </Button>
      <Button variant="light" onClick={() => setNewRange("max")}>
        Max
      </Button>
    </ButtonGroup>
  );
}
