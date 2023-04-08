import React from "react";
import Square from "./Square";

const Board = ({ isX, squares, saveToHistory }) => {
  const handleClick = (id) => {
    if (squares[id] || checkWinner(squares)) return;
    const newSquares = [...squares];
    newSquares[id] = isX ? "X" : "O";
    saveToHistory(newSquares);
  };

  let status;
  const winner = checkWinner(squares);
  if (winner) {
    status = "Winner is " + winner;
  } else {
    let flag = true;
    for (let sq of squares) flag &= sq !== null;
    if (flag) status = "Draw";
    else status = (isX ? "X" : "O") + "'s Turn";
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="game-field">
        <div className="row r1">
          <Square value={squares[0]} handleClick={() => handleClick(0)} />
          <Square value={squares[1]} handleClick={() => handleClick(1)} />
          <Square value={squares[2]} handleClick={() => handleClick(2)} />
        </div>
        <div className="row r2">
          <Square value={squares[3]} handleClick={() => handleClick(3)} />
          <Square value={squares[4]} handleClick={() => handleClick(4)} />
          <Square value={squares[5]} handleClick={() => handleClick(5)} />
        </div>
        <div className="row r3">
          <Square value={squares[6]} handleClick={() => handleClick(6)} />
          <Square value={squares[7]} handleClick={() => handleClick(7)} />
          <Square value={squares[8]} handleClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
};

const checkWinner = (squares) => {
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let checker of arr) {
    const [e1, e2, e3] = checker;
    if (
      squares[e1] &&
      squares[e1] === squares[e2] &&
      squares[e2] === squares[e3]
    )
      return squares[e1];
  }
  return null;
};

export default Board;
