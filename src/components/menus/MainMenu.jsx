import React, { useState, useEffect } from "react";
import Button from "../Button";
import "./MainMenu.css";

import { ReactComponent as Arikool } from "../../assets/img/svg/arikool.svg";
import { ReactComponent as Ehituskool } from "../../assets/img/svg/ehituskool.svg";
import { ReactComponent as Ilukool } from "../../assets/img/svg/ilukool.svg";
import { ReactComponent as Itkool } from "../../assets/img/svg/itkool.svg";
import { ReactComponent as Tehnikakool } from "../../assets/img/svg/tehnikakool.svg";
import { ReactComponent as Toidukool } from "../../assets/img/svg/toidukool.svg";
import { ReactComponent as Turismikool } from "../../assets/img/svg/turismikool.svg";

const iconList = [
  { Component: Arikool, color: "#4CAF50" },
  { Component: Ehituskool, color: "#2196F3" },
  { Component: Ilukool, color: "#E91E63" },
  { Component: Itkool, color: "#9C27B0" },
  { Component: Tehnikakool, color: "#FF9800" },
  { Component: Toidukool, color: "#FFEB3B" },
  { Component: Turismikool, color: "#009688" },
];

const MainMenu = ({ startQuiz }) => {
  const [lanes, setLanes] = useState([]);

  const calculateLanes = () => {
    const screenWidth = window.innerWidth;
    const laneWidth = 80;
    const laneCount = Math.floor(screenWidth / laneWidth);
    const totalWidth = laneCount * laneWidth;
    const offset = (screenWidth - totalWidth) / 2;

    const positions = Array.from({ length: laneCount }, (_, i) => ({
      left: offset + i * laneWidth + laneWidth / 2,
    }));
    setLanes(positions);
  };

  useEffect(() => {
    calculateLanes();
    window.addEventListener("resize", calculateLanes);
    return () => window.removeEventListener("resize", calculateLanes);
  }, []);

  return (
    <div className="container">
      <div></div>
      <div className="lane-icons">
        {lanes.map((lane, i) =>
          Array.from({ length: 6 }).map((_, j) => {
            const icon = iconList[Math.floor(Math.random() * iconList.length)];
            const duration = 10 + Math.random() * 4;
            const delay = Math.random() * duration;

            return (
              <icon.Component
                key={`${i}-${j}`}
                className="lane-icon"
                style={{
                  left: `${lane.left}px`,
                  animationDuration: `${duration}s`,
                  animationDelay: `-${delay}s`,
                  color: icon.color,
                }}
              />
            );
          })
        )}
      </div>

      <div className="hoverBox">
        <h1 className="title">VOCONATOR</h1>
        <p className="text">
          Vali väide, mis käib sinu kohta ning saa teada, milline valdkond sobib just
          Sulle!
        </p>
        <Button className="button" text="START" onClick={startQuiz} />
      </div>
    </div>
  );
};

export default MainMenu;
