import React from 'react';

import {connect} from 'react-redux';

import {updateSquare} from '../reducers/gameReducer';

let Square = props => {
    if(props.winnerSquares
     && (props.winnerSquares[0] === props.index
      || props.winnerSquares[1] === props.index
      || props.winnerSquares[2] === props.index)) 
    {
        return (
            <div 
                className='winnerSquare'
                onClick={() => {
                    props.updateSquare(props.index) }}
            >
                {
                    props.history[props.currentMove][props.index]
                }
            </div>
        )
    } else {
        return (
            <div 
                className='square'
                onClick={() => {
                    props.updateSquare(props.index) }}
            >
                {
                    props.history[props.currentMove][props.index]
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        history: state.game.history, //The state is passed in from react reducts. It will hold the  state of the store which will be able to be passed into the component. Store.js is mapping the game to the gamereduceer
        currentMove: state.game.currentMove, 
        winner: state.game.winner, 
        winnerSquares: state.game.winnerSquares
    }
}

Square = connect(mapStateToProps, {updateSquare})(Square) //This will return a new component class that will wrap the component passed into it. The component class will have the data from the store

export default Square