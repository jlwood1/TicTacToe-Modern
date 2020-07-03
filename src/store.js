import {createStore, combineReducers} from 'redux';

import gameReducer from './reducers/gameReducer';

const rootReducer = combineReducers({
    game: gameReducer
});

export default createStore(rootReducer);