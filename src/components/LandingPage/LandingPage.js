import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <p>This is the landing page</p>
      <button>
        <Link to="/stockpage">Get Start</Link>
      </button>
    </div>
  );
}
