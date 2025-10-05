import React from "react";
import Button from "../Button";

const Result = ({ onComplete, winner }) => {
  if (!winner) {
    return <div>Loading results...</div>;
  }
  return (
    <div className="result-container">
      <div>
        <img src={winner.picture} alt={winner.name} className="result-image" />
        <h1>{winner.name}</h1>
        <img src={winner.icon} alt={winner.name} className="result-icon" />
        <p>{winner.description}</p>
      </div>

      <Button text="Alusta uuesti" onClick={onComplete} />
    </div>
  );
};

export default Result;
