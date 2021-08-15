const yahooFinance = require("yahoo-finance");
const fs = require("fs");
// const tickers = require("./tickers.json");
const tickers = ["MSFT", "IBM", "AAPL", "TSLA"];
// Should be saved into Firebase at some point, this is an example
// of saving all the tickers in the S&P 500 to JSON files
for (let ticker of tickers) {
  yahooFinance.historical(
    {
      symbol: ticker,
      // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
    },
    function (err, quotes) {
      fs.writeFile(
        `${ticker}_stonks.json`,
        JSON.stringify(quotes),
        "utf8",
        (err) => {
          err ? console.log("error") : console.log("done");
        }
      );
    }
  );
}
