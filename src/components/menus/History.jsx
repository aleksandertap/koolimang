import React, { useEffect, useState } from "react";
import "./History.css";

const History = ({ onClose }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(saved);
  }, []);

  return (
    <div className="overlay">
      <div className="historyContainer">
        <div className="closeContainer">
          <div className="closeButton" onClick={onClose}>
            X
          </div>
        </div>
        <h2 className="title">Hiljutised tulemused</h2>

        <div className="historyList">
          {history.length === 0 ? (
            <p>Ei ole veel tulemusi.</p>
          ) : (
            history.map((item, idx) => (
              <div key={idx} className="historyItem">
                <span className="historyDate">{item.date}</span>
                <div className="name-icon"><span className="historyName">{item.name}</span>
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="historyIcon"
                    width={36}
                    height={36}
                  />
                )}</div>
                
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
