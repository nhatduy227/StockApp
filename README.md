# InvestiGators

## Group Members
* Ao Wang
* Nom Phan
* Joey Huang
* Ruxandra Beschea 
* Janice Tran

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm install`
Run to get your app node modules up-to-date

### `npm run build`
Create build package for optimizing deployment process

### `firebase deploy`
Manually deploy new changes to the live site at: https://stockapp-6e0a4.web.app


# Create S&P 500 PostgreSQL Database
## Login to PostgreSQL
    psql -U postgres

## Create `stock` database
    CREATE DATABASE stocks;

## Change to db
    \c stocks;

# Retrieve S&P 500 Data
## Create Python environment
    conda create --name cs375
    python3 -m venv cs375

## Activating Python environment
    conda activate cs375
    source cs375/bin/activate

## Install Python Packages
    pip install pandas yfinance sqlalchemy

## Go and run Python script
Near the end of the file, you'll have to edit the password for the `db_url`. The script will take a few minute, since we're getting all the historical data of 505 stock tickers and saving it to the table `stock_data` in the stock database.

    cd server/data && python sp500.py

# Setup server for db
Once the script's done running, you'll have to run a seperate server along side of the React app, so that the app can get the historical stock data.

    cd server && node index.js

# Technologies
* React
* React-Bootstrap
* Firebase
* Node.js
* Express.js
* pg
* Python
    * Pandas
    * Sqlalchemy
* PostgreSQL