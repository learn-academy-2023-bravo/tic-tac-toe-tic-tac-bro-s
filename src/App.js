import React, { useState, useEffect } from 'react'
import Square from './components/Square'
import './App.css'

const initSquares = Array(9).fill(null)

const App = () => {
  const [squares, setSquares] = useState(initSquares)

  const [turn, setTurn] = useState('x')

  const [winner, setWinner] = useState()

  const checkPositions = (i1, i2, i3, arr) => {
    // checks to see if all indexes are true values ei strings with content
    if (arr[i1] && arr[i2] && arr[i3]) {
      // check to see if all indexes are strictly equal to eachother
      if (arr[i1] === arr[i2] && arr[i2] === arr[i3]) {
        // all values are either x or o
        alert(`Winner! Player ${arr[i1]} wins!`)
        setWinner(arr[i1])
      }
    }
  }

  const resetGame = () => {
    setSquares(initSquares)
    setWinner(undefined)
    setTurn('x')
  }

  const handleGamePlay = (index) => {
    let newSquares = [...squares]
    if (squares[index] === null) {
      if (winner) {
        alert(`Player ${winner.toUpperCase()} has already won`)
        return
      }
      newSquares[index] = turn
      setSquares(newSquares)

      if (turn === 'x') {
        setTurn('o')
      } else {
        setTurn('x')
      }

      // alternate method to toggle turn
      // setTurn(prev => prev === 'x' ? 'o' : 'x')

      // same as above just more verbose
      // setTurn((prev) => {
      //   if (prev === 'x') {
      //     return 'o'
      //   } else {
      //     return 'x'
      //   }
      // })

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
    } else {
      alert('square has been played')
    }
  }

  useEffect(() => {
    let allSpotsTaken = squares.every((value) => !!value)
    if (allSpotsTaken && !winner) {
      alert('Draw')
    }
  }, [squares, winner])

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <h3>Player {turn.toUpperCase()} turn</h3>

      <div className='board'>
        {squares.map((value, index) => (
          <Square
            value={value}
            index={index}
            key={index}
            handleGamePlay={handleGamePlay}
          />
        ))}
      </div>
      {winner && (
        <div className='win'>"Player {winner.toUpperCase()} Wins!"</div>
      )}

      <button onClick={resetGame}>Reset</button>

      {/*
      {(squares.every(value => !!value) && !winner) && (
      <>
          {alert('draw')}
      </>
      )}
      */}
    </>
  )
}

export default App
