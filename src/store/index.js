import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// importing the root reducer
import rootReducer from './reducers'

// set the default application state
const defaultState = {};

export default store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);