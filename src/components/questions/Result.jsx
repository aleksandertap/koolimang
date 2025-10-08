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

  const gradients = {
    Tehnikakool: "radial-gradient(circle, #0089CF, #FFFFFF)",
    Ärikool: "radial-gradient(circle, #EF4144, #FFFFFF)",
    Ehituskool: "radial-gradient(circle, #0DB14B, #FFFFFF)",
    Ilukool: "radial-gradient(circle, #B41E8E, #FFFFFF)",
    Itkool: "radial-gradient(circle, #20C4F4, #FFFFFF)",
    Toidukool: "radial-gradient(circle, #F99D28, #FFFFFF)",
    Turismikool: "radial-gradient(circle, #CADB36, #FFFFFF)",
  };

  return (
    <div
      className="result-screen"
      style={{
        background:
          gradients[winner.name] || "radial-gradient(circle, #999999, #FFFFFF)",
      }}
    >
      <div className="result-container">
        <div className="result-content">
          <img
            src={winner.picture}
            alt={winner.picture}
            className="result-image"
          />
          <h1>{winner.name}</h1>
          {winner.icon && <winner.icon className="result-icon" />}
          <p>
            {winner.description}{" "}
            {winner.id === 8 ? (
              <span>
                Kontaktid: Helen Johanson, helen.johanson@voco.com, 58868004
              </span>
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
      <Button
        className="restart-btn"
        text="Alusta uuesti"
        onClick={onComplete}
      />
    </div>
  );
};

export default Result;
