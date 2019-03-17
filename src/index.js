//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import history from "./history";

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>, document.getElementById('root'));
serviceWorker.unregister();