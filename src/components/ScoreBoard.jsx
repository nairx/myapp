import React, { useState } from "react";
import "./ScoreBoard.css";
export default function ScoreBoard() {
  const [run, setRun] = useState(0);
  const [wicket, SetWicket] = useState(0);
  const [message, setMessage] = useState();
  const handleRun = () => {
    if (wicket < 10) {
      setRun(run + 1);
      setMessage("Well Done!");
    }
  };
  const handleWicket = () => {
    if (wicket < 10) {
      SetWicket(wicket + 1);
      setMessage("Better Luck Next Time!");
    } else {
      setMessage("Game Over!");
    }
  };
  return (
    <div className="row">
      <div>
        <p>
          <button onClick={handleRun}>Run</button>
        </p>
        {run}
        <p>
          <button onClick={handleWicket}>Wicket</button>
        </p>
        {wicket}
      </div>
      <div>
        <h2>Score Board</h2>
        {message}
      </div>
    </div>
  );
}
