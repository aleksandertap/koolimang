import "./App.css";
import { getData } from "./data/data";
import MainMenu from "./components/menus/MainMenu";
import Table from "./components/questions/Table";
import { useState } from "react";
import Result from "./components/questions/Result";
import ProgressBar from "./components/questions/ProgressBar";
import History from "./components/menus/History";
import { createPortal } from "react-dom";
import historyIcon from "./assets/img/svg/ajalugu.svg";

function App() {
  const [howFar, setHowFar] = useState("mainMenu");
  const [data, setData] = useState(getData());
  const [winner, setWinner] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showHistory, setShowHistory] = useState(false);

  const startQuiz = () => {
    setHowFar("questions");
  };

  const resetQuiz = () => {
    setData(getData());
    setHowFar("mainMenu");
  };

  const completeQuiz = (finalWinner) => {
    setWinner(finalWinner);
    setHowFar("results");
  };

  return (
    <div className="mainContainer">
      <div>
    {!showHistory && (
      <div className="history-icon-container">
        <img className="history-icon"
          src={historyIcon} 
          alt="History Icon"
          height={65} 
          onClick={() => setShowHistory(true)} 
        />
      </div>
    )}

    {showHistory && createPortal(
      <History onClose={() => setShowHistory(false)} />,
      document.body
    )}
  </div>
      {howFar === "mainMenu" && <MainMenu startQuiz={startQuiz} />}

      {howFar === "questions" && (
        <>
          <ProgressBar progress={progress} />
          <Table data={data} onComplete={completeQuiz} onProgress={setProgress} />
        </>
)}

      {howFar === "results" && <Result onComplete={resetQuiz} winner={winner} />}
    </div>
  );
}

export default App;
