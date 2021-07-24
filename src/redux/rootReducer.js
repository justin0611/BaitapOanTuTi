import { combineReducers, createStore } from 'redux';

import KeoBuaBaoReducer from './KeoBuaBaoReducer'

const rootReducer = combineReducers({
    KeoBuaBaoReducer,
})

export const store = createStore(rootReducer);