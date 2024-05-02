import './style.css'
import {useEffect, useState} from "react";

export default function TickTacToe() {
    const [squares, setSquare] = useState(Array(9).fill(''))
    const [isXTurn, setIsXTurn] = useState(true)
    const [gameStatus, setGameStatus] = useState('')
    const [restartGame, setRestartGame] = useState(false)

    useEffect(() => {
        const checkAllSquares = () => squares.every(el => el !== '')
        if (!getWinner() && checkAllSquares()) {
            setGameStatus('Its a Draw, start new game')
        } else if (getWinner()) {
            setGameStatus(`Winner is ${getWinner()}, Restart Game`)
            setRestartGame(true)
        } else {
            setGameStatus(`Player Turn ${isXTurn ? 'X' : 'O'}`)
        }
    }, [isXTurn, squares]);

    const handleRestartGame = () => {
        setSquare(Array(9).fill(''));
        setRestartGame(false)
    }
    const getWinner = () => {
        const winningPattern = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
        ]

        for (let i = 0; i < winningPattern.length; i++) {
            const [x, y, z] = winningPattern[i]

            if (squares[x] && squares[x] === squares[y] && squares[y] === squares[z]) {
                return squares[x]
            }
        }
        return null
    }

    const handleClick = (index) => {
        const squaresCopy = [...squares]
        if (getWinner() || squaresCopy[index]) return
        squaresCopy[index] = isXTurn ? 'X' : 'O'
        setIsXTurn(!isXTurn)
        setSquare(squaresCopy)
    }
    const renderSquare = (index) => {
        return <button className={'square'} onClick={() => handleClick(index)}>
            {squares[index]}
        </button>
    }

    return (
        <div className="main-container">
            <h1>Tic Tac Toe Game</h1>
            <div className="row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <div className={'gameStatus'}>{gameStatus}</div>
            {restartGame && <button className={'restart-button'} onClick={handleRestartGame}>Restart Game</button>}
        </div>
    )
}
