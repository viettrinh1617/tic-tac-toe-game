import React, { useState, useEffect } from "react";
import Board from "./Board";
import History from "./History";

function Game() {
  //const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [history, setHistory] = useState([
    {squares : Array(9).fill(null)}
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  
  //Declaring a Winner
  useEffect(() => {
      setWinner(calculateWinner(history[stepNumber].squares));
      //why not able to append setHistory with new squares array:
      // setHistory(...history,[...squares]);
      //  console.log("history",history);
    
  }, [history]);

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    //const squares = history[history.length - 1];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  //Handle player
  const handleClick = (i) => {
    const currentHistory = history.slice(0, stepNumber + 1);
    const current = currentHistory[currentHistory.length - 1];
    const squares = current.squares;

    if(!calculateWinner(history[stepNumber].squares) && !squares[i]) {
      const value = xIsNext ? "X" : "O";
      const newSquares = [...squares];
      newSquares[i] = value;
      //   Why map func not working?
      //   const newSquars = squares.map((square, index) => {
      //   if(index === i) {return value
      //   } else {return square; console.log("index",index); console.log("i",i);}
      // }); 
      //setSquares(newSquares);

      setXIsNext(!xIsNext);
      setHistory(currentHistory.concat([{squares: newSquares}]));
      setStepNumber(currentHistory.length);

      }
  };

  //Restart game
  const handlRestart = () => {
    setWinner("");
    setXIsNext("true");
    setHistory([
      {squares : Array(9).fill(null)}
    ]);
    setStepNumber(0);
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <div className="game">
        <span className="player">Next player is: {xIsNext ? "X" : "O"}</span>
        <Board squares={history[stepNumber].squares} handleClick={handleClick} />
      </div>
      <div className="history">
        <History history = {history} move = {stepNumber} setStepNumber = {setStepNumber}/>
      </div>
      <button onClick={handlRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;