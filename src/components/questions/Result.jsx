import React, { useEffect, useState } from "react";
import Button from "../Button";
import LoadingScreen from "../LoadingScreen";
import ProgressBar from "./ProgressBar";
import "./Result.css";

const Result = ({ onComplete, winner }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (winner) {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [winner]);

  if (!winner) {
    return <div>Loading results...</div>;
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="result-screen">
      <div className="result-container">
        <div className="result-content">
          <img src={winner.picture} alt={winner.picture} className="result-image" />
          <h1>{winner.name}</h1>
          <img src={winner.icon} alt={winner.icon} className="result-icon" />
          <p>
            {winner.description}{" "}
            {winner.id === 8 ? (
              <span>Kontaktid: Helen Johanson, helen.johanson@voco.com, 58868004</span>
            ) : (
              <a
                href={`https://voco.ee/kool/${winner.name
                  .toLowerCase()
                  .replace(/ /g, "-")
                  .replace(/ä/g, "a")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tutvu kindlasti kooli lehel{" "}
                {winner.id === 2
                  ? winner.name.replace("K", "k")
                  : winner.name.toLowerCase().replace(/ /g, "-")}
                i erialadega!
              </a>
            )}
          </p>
        </div>

        
      </div>
      <Button className="restart-btn" text="Alusta uuesti" onClick={onComplete} />
    </div>
  );
};

export default Result;
