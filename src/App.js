import React, { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import Square from './components/Square'
import './App.css'

const initSquares = Array(9).fill(null)
const playerChoices = ['👊', '🍺', '😎', '🤙', '💪', '🏀']

const App = () => {
  const [squares, setSquares] = useState(initSquares)

  const [winner, setWinner] = useState()

  const [player1, setPlayer1] = useState(playerChoices[0])

  const [player2, setPlayer2] = useState(playerChoices[1])

  const [turn, setTurn] = useState(player1)

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
    setTurn(player1)
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

      if (turn === player1) {
        setTurn(player2)
      } else {
        setTurn(player1)
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
    <div className='container'>
      <h1>Tic Tac Toe</h1>
      <h3>Player {turn} turn</h3>

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

      {squares.every((value) => value === null) && (
        <div className='player-markers'>
          <div className='marker'>
            <label htmlFor='character1'>Player 1</label>
            <select
              name='character1'
              id='character1'
              onChange={(e) => {
                setTurn(e.target.value)
                setPlayer1(e.target.value)
              }}
              value={player1}
            >
              {playerChoices
                .filter((value) => value !== player2)
                .map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
            </select>
          </div>
          <div className='marker'>
            <label htmlFor='character2'>Player 2</label>
            <select
              name='character2'
              id='character2'
              onChange={(e) => setPlayer2(e.target.value)}
              value={player2}
            >
              {playerChoices
                .filter((value) => value !== player1)
                .map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
            </select>
          </div>
        </div>
      )}

      {winner && (
        <>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <div className='win'>"Player {winner.toUpperCase()} Wins!"</div>
        </>
      )}

      <button className='btn-reset' onClick={resetGame}>
        Reset
      </button>

      <footer>
        <p>Created by Jake & Raymond</p>
      </footer>
    </div>
  )
}

export default App
