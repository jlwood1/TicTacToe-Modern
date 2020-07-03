import { strictEqual } from "assert"

import calculateWinner from '../utils/calculateWinner'

const initialStore = {
    history: [Array(9).fill(null)],
    currentMove: 0,
    currentPlayer: 'X',  
    winner: null, 
    winnerSquares: null
}

export default function reducer(store = initialStore, action) {
    const {type, payload} = action
    switch(type) {
        case UPDATE_SQUARE: {
            let history = [...store.history.filter((val, index) => { return index < store.currentMove + 1 })]
            let board = [...store.history[store.currentMove]]
            let currentMove = store.currentMove; 
            let currentPlayer = store.currentPlayer
            let winner = null 
            let winnerSquares = null
            if(!board[payload]) 
            {
                currentMove++ 
                board[payload] = store.currentPlayer 
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
                history = [...history, board]
            }
            var winnerData = calculateWinner(board)
            if(winnerData){
                winner = winnerData.winner
                winnerSquares = winnerData.winnerSquares
            }
            return {...store, history, currentPlayer, currentMove, winner, winnerSquares} //Updates the store 

        }
        case MOVE_JUMP: {
            let currentPlayer = payload % 2 === 0 ? 'X' : 'O'
            let currentMove = payload
            return {...store, currentMove: currentMove, currentPlayer: currentPlayer}
        } 
        default: 
            return {...store}
    }
}

export const UPDATE_SQUARE = 'UPDATE_SQUARE'

export const updateSquare = (index, winner) => {
    return {
        type: UPDATE_SQUARE,
        payload:  index
    }
}

export const MOVE_JUMP = 'MOVE_JUMP'

export const moveJump = (move) => {
    return {
        type: MOVE_JUMP, 
        payload: move 
    }  
} 