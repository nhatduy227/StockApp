import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import React, { useEffect, useState } from "react";

// function getRangeOfStock(range) {
//   let cleanedData = clean();
//   let newData = [];
//   switch (range) {
//     case "5d":
//       return cleanedData.slice(-5);
//     case "1m":
//       return cleanedData.slice(-31);
//     case "6m":
//       return cleanedData.slice(-180);
//     case "ytd":
//       return cleanedData.slice(-360);
//     case "1y":
//       let yearAgo = new Date(
//         new Date().setFullYear(new Date().getFullYear() - 1)
//       );
//       for (let day of cleanedData) {
//         let date = new Date(day.date);
//         if (date > yearAgo) {
//           newData.push(day);
//         }
//       }
//       return newData;
//     case "5y":
//       return cleanedData.slice(-1800);
//     case "max":
//       return cleanedData;
//   }
// }

function sortByDate(data) {
  data = data.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.date) - new Date(b.date);
  });
  return data;
}

function cleanData(data) {
  data = sortByDate(data);
  return data.map((item) => {
    const obj = Object.assign({}, item);
    obj["date"] = new Date(obj["date"]).toISOString().substr(0, 10);
    obj["close"] = parseFloat(obj["close"].toFixed(2));
    return obj;
  });
}

function Graph(props) {
  let ticker = props.ticker;

  const [data, setData] = useState([]);

  const getData = async (ticker) => {
    try {
      const response = await fetch(`http://localhost:5000/stock/${ticker}`);
      let data = await response.json();
      data = cleanData(data);
      setData(data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getData(ticker);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#85F485" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#85F485" stopOpacity={0.25} />
          </linearGradient>
        </defs>
        <Area dataKey="close" stroke="#85F485" fill="url(#color)" />
        <XAxis
          dataKey="date"
          padding={{ left: 20, right: 20 }}
          minTickGap={50}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          dataKey="close"
          axisLine={false}
          tickLine={false}
          tickCount={7}
          tickFormatter={(number) => `$${number}`}
        />
        <Tooltip />
        <CartesianGrid opacity={0.7} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Graph;
