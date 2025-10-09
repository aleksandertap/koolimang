import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";
import ProgressBar from "./questions/ProgressBar";

const images = [
  "/loadingscreen/1.svg",
  "/loadingscreen/2.svg",
  "/loadingscreen/3.svg",
  "/loadingscreen/4.svg",
  "/loadingscreen/5.svg",
  "/loadingscreen/6.svg",
];

const LoadingScreen = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <div className="progress-bar-wrapper">
        <ProgressBar progress={100} />
      </div>
      <div className="loading-screen">
        <img
          src={images[current]}
          alt={`Loading ${current + 1}`}
          className="loading-image"
        />
      </div>
      <p>Palun oota ...</p>
    </div>
  );
};

export default LoadingScreen;
