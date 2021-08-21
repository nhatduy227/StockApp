CREATE DATABASE stocks;

-- delete the table if it exists
DROP TABLE stock_data;

CREATE TABLE stock_data(
    id  SERIAL PRIMARY KEY,
    adj_close   NUMERIC,
    close NUMERIC,
    high NUMERIC,
    low NUMERIC,
    open NUMERIC,
    ticker TEXT,
    volume INT
);

-- \i src/database.sql
-- \c stocks