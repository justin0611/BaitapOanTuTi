import { combineReducers, createStore } from 'redux';

import KeoBuaBaoReducer from './KeoBuaBaoReducer'

const rootReducer = combineReducers({
    stateKBB: KeoBuaBaoReducer
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);