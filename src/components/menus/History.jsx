import React from "react";
import "./History.css";

const History = ({onClose}) => {
  return (
    <div className="overlay">
      <div className="historyContainer">
        <div className="closeContainer">
          <div className="closeButton" onClick={onClose}>X</div>
        </div>
        <h2 className="title">Hiljutised tulemused</h2>
        {/* Siia historyList-i mapime hiljutised tulemused */}
        <div className="historyList">
          Lorem ipsum dolor sit amet consectetur.
        </div>
      </div>
    </div>
  );
};

export default History;
