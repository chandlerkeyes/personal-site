//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import './index.css';
import App from './client/components/app';
import * as serviceWorker from './serviceWorker';
import createHistory from "history/createBrowserHistory";

export const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>, document.getElementById('root'));
serviceWorker.unregister();