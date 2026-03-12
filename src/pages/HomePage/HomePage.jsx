import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-container">

      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source src="/videos/realestate.mp4" type="video/mp4" />
      </video>

      {/* Overlay for readability */}
      <div className="video-overlay"></div>

      <div className="home-content">
        <h1 className="home-title">Welcome to RentEasy</h1>

        <p className="home-text">
          Find and manage rental properties easily. Browse available homes,
          apartments, and villas with just a few clicks.
        </p>

        <Link to="/properties">
          <button className="browse-btn">
            Browse Properties
          </button>
        </Link>
      </div>

    </div>
  );
}

export default HomePage;