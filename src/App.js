import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState("x");

  const checkPositions = (i1, i2, i3, arr) => {
      // checks to see if all indexes are true values ei strings with content
      if(arr[i1] && arr[i2] && arr[i3]){
        // check to see if all indexes are strictly equal to eachother
        if(arr[i1] === arr[i2] && arr[i2] === arr[i3]){
          // all values are either x or o
          alert(`Winner! Player ${arr[i1]} wins!`)
        } 
      }
    }

  const handleGamePlay = (index) => {
    let newSquares = [...squares];
    newSquares[index] = turn;
    setSquares(newSquares);
    if (turn === "x") {
      setTurn("o");
    } else {
      setTurn("x");
    }
  
    // rows
   checkPositions(0, 1, 2, newSquares)
   checkPositions(3, 4, 5, newSquares)
   checkPositions(6, 7, 8, newSquares)
    // columns
   checkPositions(0, 3, 6, newSquares)
   checkPositions(1, 4, 7, newSquares)
   checkPositions(2, 5, 8, newSquares)
    // diagonals
   checkPositions(0, 4, 8, newSquares)
   checkPositions(2, 4, 6, newSquares)
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
