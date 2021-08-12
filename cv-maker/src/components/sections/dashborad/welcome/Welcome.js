import React from "react";
import Button from "../../../customs/button/Button";
import "../welcome/Welcome.css";
import "../../../../App.css";

export default function DashboardWelcome() {
  return (
    <div className="welcome-container">
      <video className="video" src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>OnlineMe</h1>
      <p>
        Welcome to the new RESUMES GENERATION, where Qualified people get
        exposed Faster
      </p>
      <div className="welcome-btns">
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}
