import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      {/* Insert hero banner here */}
      
      <p>This is the landing page</p>
      <button>
        <Link to="/stockpage">Get Start</Link>
      </button>
      <div class="grid">
        <div class="box">
          <img src={require('./img/stocks.png')} class = "icons" alt ="stocks"/> 

        </div>
        <div class="box">
          <img src={require('./img/investmentPortfolio.png')} class = "icons" alt ="invest"/> 

        </div>
        <div class="box">
          <img src={require('./img/financeDuration.png')} class = "icons" alt ="finance"/> 

        </div>
      </div>
    </div>
  );
}
