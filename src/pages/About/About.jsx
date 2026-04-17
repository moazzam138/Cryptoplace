import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">

        <h1>About Cryptoplace</h1>

        <p>
          Cryptoplace is a modern cryptocurrency tracking platform designed to
          help users explore, analyze, and stay updated with the latest trends in
          the crypto market.
        </p>

        <h2>🚀 Our Mission</h2>
        <p>
          Our mission is to simplify crypto data and make it accessible to
          everyone — from beginners to advanced traders.
        </p>

        <h2>📊 What We Offer</h2>
        <ul>
          <li>✔ Real-time cryptocurrency prices</li>
          <li>✔ Interactive charts and analytics</li>
          <li>✔ Market ranking and insights</li>
          <li>✔ Easy-to-use interface</li>
        </ul>

        <h2>💡 Why Choose Us?</h2>
        <p>
          We focus on clean UI, fast performance, and accurate data to give you
          the best experience in tracking cryptocurrencies.
        </p>

      </div>
    </div>
  );
};

export default About;
