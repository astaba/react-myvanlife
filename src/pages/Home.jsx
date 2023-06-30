import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flowise home">
      <h1>React Router Dom pratice site. You got the travel plans, we got the travel vans.</h1>
      <p className="sub-title">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link to="vans" className="btn btn-link">Find your van</Link>
    </div>
  );
}

export default Home;
