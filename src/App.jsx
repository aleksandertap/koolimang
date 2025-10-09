import "./App.css";
import { getData } from "./data/data";
import MainMenu from "./components/menus/MainMenu";
import Table from "./components/questions/Table";
import { useState, useEffect } from "react";
import Result from "./components/questions/Result";
import ProgressBar from "./components/questions/ProgressBar";
import History from "./components/menus/History";
import { createPortal } from "react-dom";
import historyIcon from "./assets/img/svg/ajalugu.svg";
import IconsBar from "./components/IconsBar";

function App() {
  const [howFar, setHowFar] = useState("mainMenu");
  const [data, setData] = useState(getData());
  const [winner, setWinner] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showHistory, setShowHistory] = useState(false);
  const [activeItems, setActiveItems] = useState(data);
  const [showHistoryIcon, setShowHistoryIcon] = useState(true);

  const startQuiz = () => setHowFar("questions");

  const resetQuiz = () => {
    setData(getData());
    setHowFar("mainMenu");
  };

  const completeQuiz = (finalWinner) => {
    setWinner(finalWinner);
    setHowFar("results");

    // Save to localStorage
    const prev = JSON.parse(localStorage.getItem("history")) || [];
    const now = new Date();
    const date = now.toLocaleDateString("et-EE");
    const entry = {
      id: finalWinner.id,
      name: finalWinner.name,
      iconName: finalWinner.name.replace(/\s/g, ""),
      date,
    };
    const updated = [entry, ...prev];
    localStorage.setItem("history", JSON.stringify(updated));
  };

  
  useEffect(() => {
    const isMobile = window.innerWidth <= 768; 
    if (howFar === "results") {
      if (isMobile) {
        setShowHistoryIcon(false);
        const timer = setTimeout(() => setShowHistoryIcon(true), 2000);
        return () => clearTimeout(timer);
      } else {
        setShowHistoryIcon(true);
      }
    } else {
      setShowHistoryIcon(true);
    }
  }, [howFar]);

  return (
    <div className={`mainContainer ${howFar}`}>
      <div>
        {!showHistory && showHistoryIcon && (
          <div className="history-icon-container">
            <img
              className="history-icon"
              src={historyIcon}
              alt="History Icon"
              height={65}
              onClick={() => setShowHistory(true)}
            />
          </div>
        )}

        {showHistory &&
          createPortal(
            <History
              onClose={() => setShowHistory(false)}
              onSelectResult={(data) => {
                setShowHistory(false);
                setHowFar("results");
                setWinner(data);
                setProgress(0);
              }}
            />,
            document.body
          )}
      </div>

      {howFar === "mainMenu" && <MainMenu startQuiz={startQuiz} />}

      {howFar === "questions" && (
        <>
          <ProgressBar progress={progress} />
          <Table
            data={data}
            onComplete={completeQuiz}
            onProgress={setProgress}
            onActiveChange={setActiveItems}
          />
          <IconsBar data={data} activeItems={activeItems} />
        </>
      )}

      {howFar === "results" && (
        <Result onComplete={resetQuiz} winner={winner} />
      )}
    </div>
  );
}

export default App;
