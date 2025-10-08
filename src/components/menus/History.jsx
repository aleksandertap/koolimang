import React, { useEffect, useState } from "react";
import "./History.css";
import { getData } from "../../data/data";

import { ReactComponent as Arikool } from "../../assets/img/svg/arikool-circle.svg";
import { ReactComponent as Ehituskool } from "../../assets/img/svg/ehituskool-circle.svg";
import { ReactComponent as Ilukool } from "../../assets/img/svg/ilukool-circle.svg";
import { ReactComponent as Itkool } from "../../assets/img/svg/itkool-circle.svg";
import { ReactComponent as Tehnikakool } from "../../assets/img/svg/tehnikakool-circle.svg";
import { ReactComponent as Toidukool } from "../../assets/img/svg/toidukool-circle.svg";
import { ReactComponent as Turismikool } from "../../assets/img/svg/turismikool-circle.svg";

const iconMap = {
  Arikool,
  Ehituskool,
  Ilukool,
  Itkool,
  Tehnikakool,
  Toidukool,
  Turismikool,
};

const History = ({ onClose, onSelectResult }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(saved);
  }, []);
  const handleItemClick = (historyItem) => {
    const fullData = getData();
    const selectedData = fullData.find((item) => item.id === historyItem.id);

    if (selectedData) {
      onSelectResult(selectedData);
    }
  };

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
            history.map((item, idx) => {
              let iconKey = item.iconName;

              if (iconKey === "Ärikool") iconKey = "Arikool";
              if (iconKey === "IT-Kool") iconKey = "Itkool";

              const Icon = iconMap[iconKey];

              return (
                <div key={idx} className="historyItem" onClick={() => handleItemClick(item)}>
                  <span className="historyDate">{item.date}</span>
                  <div className="name-icon">
                    <span className="historyName">{item.name}</span>
                    {Icon && (
                      <Icon className="historyIcon" width={36} height={36} />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
