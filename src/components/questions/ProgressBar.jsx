import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progress }) => {
  return (
    <>
      <h1>VOCONATOR</h1>
      <div
        className="progress-bar-container"
        style={{ "--progress": progress }}
        data-progress={progress}
      >
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
        <span className="progress-bar-text">{progress}%</span>
      </div>
    </>
  );
};

export default ProgressBar;
