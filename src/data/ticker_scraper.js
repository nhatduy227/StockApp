const request = require("request");
const cheerio = require("cheerio");
const fs = require('fs');

const URL = "https://en.wikipedia.org/wiki/List_of_S%26P_500_companies";
let tickers = [];


request(URL, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    const tBody = $("#constituents > tbody");
    tBody.find("tr > td:nth-child(1) > a").each((index, element) => {
      tickers.push($(element).text());
    });
  }
  fs.writeFile('tickers.json', JSON.stringify(tickers), 'utf8', (err) => {
      
      err ? console.log('error') : console.log('done');
  });
});