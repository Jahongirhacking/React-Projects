import React, { useState } from "react";
import Board from "./Board";

const App = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isX, setIsX] = useState(true);
  const squares = history[currentMove];

  const saveToHistory = (newSquares) => {
    const newHistory = [...history.slice(0, currentMove + 1), newSquares];
    setHistory(newHistory);
    setIsX(!isX);
    setCurrentMove(currentMove + 1);
  };

  const doJump = (index) => {
    setCurrentMove(index);
    setIsX(index % 2 !== 1);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board isX={isX} squares={squares} saveToHistory={saveToHistory} />
      </div>
      <div className="game-history">
        <ol>
          {history.map((elem, move) => {
            let info;
            if (move === 0) {
              info = "Start the game!";
            } else {
              info = "Go to the move #" + move;
            }
            return (
              <li key={move}>
                <button onClick={() => doJump(move)}>{info}</button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
