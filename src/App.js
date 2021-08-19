import React, { useState, useEffect } from "react";
import StockPage from "./components/StockPage/StockPage";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <Router>
        <div className="grid-container">
          <header>
            {" "}
            <Navbar />
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Switch>
                  <Route path="/" exact component={LandingPage} />
                  <Route path="/stockpage" exact component={StockPage} />
                </Switch>
              </div>
            </div>
          </main>
        </div>
      </Router>
  );
}

export default App;
