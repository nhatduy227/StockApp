import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import React, { Component } from "react";

let data = require("../../data/AAPL_stonks.json");

function clean(data) {
  data.map((day) => (day.date = new Date(day.date)));
  data.sort((day1, day2) => {
    // Compare the 2 dates
    if (day1.date < day2.date) return -1;
    if (day1.date > day2.date) return 1;
    return 0;
  });

  console.log(data);
  return data;
}

function Graph() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={clean(data)}>
        <Area dataKey="close" />
        <XAxis dataKey="date" />
        <YAxis dataKey="close" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Graph;
