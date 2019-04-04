import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from './client/store';
import { createBrowserHistory } from "history";
import App from './client/components/app';

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
   </Router></Provider>, document.getElementById('root'));
serviceWorker.unregister();