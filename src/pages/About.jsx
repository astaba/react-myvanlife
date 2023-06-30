import React from "react";
import { Link } from "react-router-dom";
import aboutImg01URL from "../assets/images/about-hero.png"

function About() {
  return (
    <div className="about">
      <section className="image">
        <img src={aboutImg01URL} alt="" />
      </section>
      <section className="flowise info">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="flowise cta">
          <p>
            Your destination is waiting.
            <br />
            Your van is ready.
          </p>
          <Link to="../vans" className="btn btn-link">Explore our vans</Link>
        </div>
      </section>
    </div>
  );
}

export default About;

