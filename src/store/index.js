import { createStore } from 'redux';

// importing the root reducer
import { reducers } from '../reducers'

// set the default application state
const defaultState = {};
const store = createStore(reducers, defaultState);

export default store;