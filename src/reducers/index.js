import counterReducer from './counter';
import togglerReducer from './toggler';

import { combineReducers } from 'redux';    

const combinedReducers = combineReducers({
    counter: counterReducer,
    toggler: togglerReducer
});

export default combinedReducers;