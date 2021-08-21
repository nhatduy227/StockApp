const pg = require("pg");
const express = require("express");
const app = express();
const cors = require("cors");

const port = 5000;
const hostname = "localhost";
const connection = require("./env.json");

// middleware
app.use(cors());
app.use(express.json());

const Pool = pg.Pool;
const pool = new Pool(connection);

pool.connect().then(function () {
    console.log("Connected!");
});

// Routes


app.listen(port, hostname, () => {
    console.log(`Listening at: http://${hostname}:${port}`);
});