import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <Navbar />

      <div className="hero">
        <h1>Track Your Journeys, Relive Your Adventures</h1>
        <p>
          TrailTracker helps you store, visualize, and cherish your travel memories.
        </p>

        <div className="buttons">
          <a href="/login" className="btn login">Login</a>
          <a href="/signup" className="btn signup">Signup</a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
