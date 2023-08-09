import React, {useState, useEffect} from "react"
import {Link} from 'react-router-dom';
import '../styles/Game.css'
import GridElements from "../components/gridElements"
import WinConditions from "../components/WinConditions"

const Game = () => {
    const boardValues = Array.from({ length: 9 }, (_, index) => ({
        id: index,
        value: ' '
    }))

    const [ticTacToe, setTicTacToe] = useState(true)

    const [board, setBoard] = useState(boardValues)

    const [player, setPlayer] = useState([
            {id: 1, moves: 0, symbol: 'X', turn: true}, 
            {id: 2, moves: 0, symbol: 'O', turn: false},
        ])
    

    const currBoard = board.map(item => {
        return <GridElements 
                key={item.id}
                value={item.value} 
                handleClick={() => handleClick(item.id)}
            />
        })

    const turn = () => {
         setPlayer(oldP => {
            return oldP.map(p => {
                return (p.turn === true) ? {...p, moves: p.moves + 1, turn: false}: {...p, turn: true}
            })
        })
    }

    const checkValue = () => {
        let symbol
        player.map(p => {
            if (p.turn === true) {
                symbol =  p.symbol
            }
        })
        return symbol
    }

    const handleClick = (id) => {
        if (ticTacToe && board[id].value === ' ') {
            turn()
            setBoard(prevBoard => {
                return prevBoard.map(item => {
                    return item.id === id ?
                        ({...item, value: item.value === ' ' ? checkValue() : item.value }): item
                })
            })
        }
    }
    return (
        <div className="game--container">
            <div className="game--header">
                <div className="player--stats">
                    <h3>Player 1</h3>
                    <p>Symbol: {player[0].symbol}</p>
                    <p>Moves: {player[0].moves}</p>
                    <p>Turn: {ticTacToe && player[0].turn === true ? player[0].symbol : ""}</p>
                </div>
                <div className="current--turn">
                    {ticTacToe ? ` Turn: Player ${player.filter(p => p.turn).map(p => p.id)}` : "Game Over"}
                </div>
                <div className="player--stats">
                    <h3>Player 2</h3>
                    <p>Symbol: {player[1].symbol}</p>
                    <p>Moves: {player[1].moves}</p>
                    <p>Turn: {ticTacToe && player[1].turn === true ? player[1].symbol : ""}</p>
                </div>
                <WinConditions board={board} setTicTacToe={setTicTacToe} />
            </div>
            <div className="game--body">
                    {currBoard}
            </div>
            <div style={{marginLeft:'36rem', marginTop:'4rem'}}>
                {!ticTacToe && <Link to='/End'>
                    <button className="button-92">Next</button>
                </Link>}
            </div>
        </div>
    )
}

export default Game;