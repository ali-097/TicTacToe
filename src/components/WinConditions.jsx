import React, { useEffect } from 'react';

const GameLogic = ({board, setTicTacToe }) => {
  useEffect(() => {
    let endState = null;
    if (!board.some(obj => obj.value === ' ')) {
      localStorage.setItem("endState","Game Drew!")
      setTicTacToe(false);
    } 
    else if (board[0].value === board[1].value && board[1].value === board[2].value && board[0].value !== ' ') {
      endState = board[0].value === 'X' ? "Player 1 won" : "Player 2 won"
      setTicTacToe(false)
    }
    else if (board[3].value === board[4].value && board[4].value === board[5].value && board[3].value !== ' ') {
      endState = board[3].value === 'X' ? "Player 1 won" : "Player 2 won"
      setTicTacToe(false)
    }       
    else if (board[6].value === board[7].value && board[7].value === board[8].value && board[6].value !== ' ') {
      endState = board[6].value === 'X' ? "Player 1 won" : "Player 2 won"
      setTicTacToe(false)
    }
    else if (board[0].value === board[3].value && board[3].value === board[6].value && board[0].value !== ' ') {
      endState = board[0].value === 'X' ? "Player 1 won" : "Player 2 won"
      setTicTacToe(false)
    }
    else if (board[1].value === board[4].value && board[4].value === board[7].value && board[1].value !== ' ') {
      endState = board[1].value === 'X' ? "Player 1 won" : "Player 2 won"
      setTicTacToe(false)
    }
    else if (board[2].value === board[5].value && board[5].value === board[8].value && board[2].value !== ' ') {
      endState = board[2].value === 'X' ? "Player 1 won" : "Player 2 won"
      setTicTacToe(false)
    }
    else if (board[0].value === board[4].value && board[4].value === board[8].value && board[0].value !== ' ') {
      endState = board[0].value === 'X' ? "Player 1 won" : "Player 2 won"
      setTicTacToe(false)
    }
    else if (board[2].value === board[4].value && board[4].value === board[6].value && board[2].value !== ' ') {
      endState = board[2].value === 'X' ? "Player 1 won" : "Player 2 won"
      setTicTacToe(false)
    }
    if (endState) localStorage.setItem("endState", endState)
    }, [board, setTicTacToe]);

  return null; // Since this component only contains a useEffect, we can return null.
};

export default GameLogic;
