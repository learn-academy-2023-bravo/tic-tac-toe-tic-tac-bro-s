import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState("x");

  const handleGamePlay = (index) => {
    let newSquares = [...squares];
    newSquares[index] = turn;
    setSquares(newSquares);
    if (turn === "x") {
      setTurn("o");
    } else {
      setTurn("x");
    }
   console.log(checkPositions(0, 1, 2, newSquares))
   console.log(checkPositions(3, 4, 5, newSquares))
   console.log(checkPositions(6, 7, 8, newSquares))
   console.log(checkPositions(0, 3, 6, newSquares))
   console.log(checkPositions(1, 4, 7, newSquares))
   console.log(checkPositions(2, 5, 8, newSquares))
   console.log(checkPositions(0, 4, 8, newSquares))
   console.log(checkPositions(2, 4, 6, newSquares))
  }
   const checkPositions = (i1, i2, i3, arr) => {
     
      if(i1 && i2 && i3){
        if(arr[i1] === arr[i2] && arr[i2] === arr[i3]){
          return arr[i1]
        } else {
          return 0
        } 
      } else {
        return 0
      }

    }

  return (
    <>
      <h1>Tic Tac Toe</h1>

      <div className="board">
        {squares.map((value, index) => (
          <Square
            value={value}
            index={index}
            key={index}
            handleGamePlay={handleGamePlay}
          />
        ))}
      </div>
    </>
  );
};

export default App;
