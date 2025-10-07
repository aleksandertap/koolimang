import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import QuestionDivider from "./QuestionDivider";
import "./Table.css";

const shuffleData = (data) => {
  let shuffled = [...data];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Table = ({ data, onComplete, onProgress, progress, onHistoryClick }) => {
  const [roundData, setRoundData] = useState(shuffleData(data));
  const [nextRound, setNextRound] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [progressCounter, setProgressCounter] = useState(0);
  const [winner, setWinner] = useState(null);

  const handleSelect = (selectedIdx) => {
    const selected = roundData[selectedIdx];
    const updatedRound = roundData.slice(2);
    setNextRound((prev) => [...prev, selected]);
    setRoundData(updatedRound);

    setProgressCounter((prev) => prev + 1); // jälgib progressbar'i
  };

  useEffect(() => {
    if (roundData.length === 0 && nextRound.length > 0) {
      if (nextRound.length === 1) {
        setWinner(nextRound[0]);
        if (onComplete) onComplete(nextRound[0]);

        return;
      }

      setRoundData(nextRound);
      setNextRound([]);
      setSuggestionIndex((prev) => prev + 1); // jälgib kaarte
    }
  }, [roundData, nextRound, onComplete]);
  useEffect(() => {
    if (onProgress) {
      const totalRounds = data.length - 1;
      const progressValue = Math.round((progressCounter / totalRounds) * 100);
      onProgress(progressValue);
    }
  }, [progressCounter, data, onProgress]);

  //selleta ei lae andmeid sisse
  if (roundData.length < 2) {
    return <div className="table">Loading next match...</div>;
  }

  const option1 = roundData[0];
  const option2 = roundData[1];

  return (
    <div className="table">
      <QuestionCard
        text={
          option1.suggestion[
            Math.min(suggestionIndex, option1.suggestion.length - 1)
          ]
        }
        onClick={() => handleSelect(0)}
      />
      <QuestionDivider />
      <QuestionCard
        text={
          option2.suggestion[
            Math.min(suggestionIndex, option2.suggestion.length - 1)
          ]
        }
        onClick={() => handleSelect(1)}
      />
    </div>
  );
};

export default Table;
