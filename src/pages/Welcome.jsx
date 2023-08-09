import React from "react"
import {Link} from 'react-router-dom';
import '../styles/Welcome.css'

const Welcome = () => {
    return (
        <div className="welcome--page">
            <h1 className="welcome--header">Tic Tac Toe</h1>
            <h2 className="welcome--head">Introduction</h2>
            <p className="welcome--text">
                Tic Tac Toe is a classic two-player board game that is easy to learn and fun to play. 
                It is often played on a 3x3 grid, but larger grids can also be used for a more challenging experience. 
                The game is commonly known by other names, such as "Noughts and Crosses" in the UK and "Xs and Os" in the United States.
            </p>
            <h2 className="welcome--head">Instructions</h2>
            <p className="welcome--text">
                Players take turns putting their marks in empty squares. 
                The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner. 
                When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.
            </p>
            <div style={{marginTop:"50px"}}>
                <Link to='/Game'>
                    <button className="button-53">Goto Game</button>
                </Link>
            </div>
        </div>
    )
}

export default Welcome;