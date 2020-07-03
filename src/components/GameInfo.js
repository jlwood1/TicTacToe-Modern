import React from 'react';

import {connect} from 'react-redux';

import {moveJump} from '../reducers/gameReducer';

let GameInfo = (props) => {
    const status = props.winner ? 'Winner: ' + props.winner : 'Next player: ' + props.currentPlayer
    const moves = props.history.map((step, move) => {
        const desc = move ? 'Go to move #: ' + move : 'Go to game start';
        return(
            <li key = {move}> 
                <button onClick={() => props.moveJump(move)}>{desc}</button>
            </li>
        )
    })
    return (
        <div className = "game-info">
            <div> {status} </div>
            <ol>{moves}</ol>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        history: state.game.history, 
        currentPlayer: state.game.currentPlayer, 
        winner: state.game.winner
    }
}

GameInfo = connect(mapStateToProps, {moveJump})(GameInfo)

export default GameInfo