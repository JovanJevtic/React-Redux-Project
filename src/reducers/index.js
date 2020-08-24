import counterReducer from './counter';
import togglerReducer from './toggler';
import fetchReducer from './fetch';

import { combineReducers } from 'redux';    

const combinedReducers = combineReducers({
    counter: counterReducer,
    toggler: togglerReducer,
    fetched: fetchReducer
});

export default combinedReducers;