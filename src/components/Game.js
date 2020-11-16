import React, { useState, useEffect } from 'react'
import { calculateWinner } from '../helpers'
import Board from './Board'

const MAX_MOVE_NUMBER = 9
const GAME_STATES = {
  playing: 'playing',
  gameOver: 'gameOver',
}

const Game = () => {
  const [gameState, setGameState] = useState(null)
  const [board, setBoard] = useState(Array(9).fill(null))
  const [moveNumber, setMoveNumber] = useState(0)
  const [xIsNext, setXisNext] = useState(true)
  const [winner, setWinner] = useState(null)
  useEffect(() => {
    if (winner || moveNumber === MAX_MOVE_NUMBER) {
      setGameState(GAME_STATES.gameOver)
    }
  }, [winner, moveNumber])

  const restartGame = () => {
    setGameState(GAME_STATES.playing)
    setBoard(Array(9).fill(null))
    setMoveNumber(0)
    setWinner(null)
    setXisNext(true)
  }

  const handleClick = (i) => {
    if (!gameState) {
      setGameState(GAME_STATES.playing)
    }
    const boardCopy = [...board]

    if (boardCopy[i]) return

    boardCopy[i] = xIsNext ? 'X' : 'O'
    setWinner(calculateWinner(boardCopy))
    setBoard(boardCopy)
    setXisNext((prev) => !prev)
    setMoveNumber((prev) => prev + 1)
  }

  return (
    <>
      <Board squares={board} onClick={handleClick} />

      {gameState === GAME_STATES.playing && (
        <p className="playerInfo">
          {xIsNext ? 'The next player is X' : ' The next player is O'}
        </p>
      )}

      {gameState === GAME_STATES.gameOver && (
        <>
          <button className="startGameBtn" onClick={restartGame}>
            Play again
          </button>
          <p className="playerInfo">
            {winner ? `Winner: ${winner}` : 'Nobody won. Try again 😊'}
          </p>
        </>
      )}
    </>
  )
}

export default Game
