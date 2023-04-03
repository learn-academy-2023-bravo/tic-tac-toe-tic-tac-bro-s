import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState("x")

  const handleGamePlay = (index => {
    let newSquares = [...squares]
    newSquares[index] = turn 
    setSquares(newSquares)
    if(turn === "x"){
      setTurn("o")   
    } else {
      setTurn("x")
    } 



  })

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
  )
}

export default App