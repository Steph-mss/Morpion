import React, { useRef, useState } from "react";
import "../TicTacToe/tictactoe.css";


const TicTacToe = () => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);

  const toggle = (index) => {
    if (lock || data[index]) return;

    const newData = [...data];
    newData[index] = count % 2 === 0 ? "x" : "o";
    setData(newData);
    setCount(count + 1);


    setTimeout(() => checkWin(newData), 100); 
  };

  const checkWin = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        won(board[a]);
        return;
      }
    }
  };

  const won = (winner) => {
    setLock(true);
    titleRef.current.textContent = `Congratulations: ${winner === "x" ? "X" : "O"} wins!`;
  };

  const reset = () => {
    setLock(false);
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    titleRef.current.textContent = "Tic Tac Toe in React";
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
      <div className="board">
        {data.map((value, index) => (
          <div
            key={index}
            className="boxes"
            onClick={() => toggle(index)}
          >
            {value && <img src={value === "o" ? 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Cercle_rouge_100%25.svg' : 'https://icones.pro/wp-content/uploads/2022/05/icone-fermer-et-x-bleue.png'} alt={value} />}
          </div>
        ))}
      </div>
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  );
};

export default TicTacToe;
