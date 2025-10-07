import React from "react";
import "./Header.css";
import ProgressBar from "./ProgressBar";
import historyIcon from "../../assets/img/svg/ajalugu.svg";

const Header = ({ progress, onHistoryClick }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">VOCONATOR</h1>
      </div>

      <div className="header-center">
        <ProgressBar progress={progress} />
      </div>

      <div className="header-right">
        <img
          src={historyIcon}
          alt="History Icon"
          className="history-icon"
          onClick={onHistoryClick}
        />
      </div>
    </header>
  );
};

export default Header;
