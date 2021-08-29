import React from "react";
import StockPage from "./components/StockPage/StockPage";
import TopTrending from "./components/TopTrending/TopTrending";
import LandingPage from "./components/LandingPage/LandingPage";
import GraphPage from "./components/GraphPage/GraphPage";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
                  {/* <Route path="/top" exact component={TopTrending} /> */}
                  <Route path="/stockpage" exact component={StockPage} />
                  <Route path="/graphpage/:ticker" component={GraphPage} />
                </Switch>
              </div>
            </div>
          </main>
        </div>
      </Router>
  );
}

export default App;
