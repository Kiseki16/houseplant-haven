import React from "react";
import Background from "../images/Background.jpg"; // adjust path
import "./LandingPage.css"; // keep your CSS

const LandingPage = () => {
  return (
    <div
      className="landing-container"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <h1>Welcome to Houseplant Haven!</h1>
      <p>Your one-stop shop for houseplants.</p>
      <button>Get Started</button>
    </div>
  );
};

export default LandingPage;

