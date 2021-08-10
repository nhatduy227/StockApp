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

/**
 * clean formats the date string into the JS datetime object
 * and sorts the array of stock data by the date from earliest-latest
 * @returns stock data
 */
function clean() {
  data.map((day) => (day.date = new Date(day.date)));
  data.sort((day1, day2) => {
    
    if (day1.date < day2.date) return -1;
    if (day1.date > day2.date) return 1;
    return 0;
  });

  return data;
}

function Graph() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={clean()}>
      <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#85F485" stopOpacity={0.4}/>
            <stop offset="75%" stopColor="#85F485" stopOpacity={0.25}/>
          </linearGradient>
      </defs>
        <Area dataKey="close" stroke='#85F485' fill="url(#color)"/>
        <XAxis dataKey="date" />
        <YAxis dataKey="close" />
        <Tooltip/>
        <CartesianGrid/>
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Graph;