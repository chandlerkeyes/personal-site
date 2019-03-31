//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import './index.css';
import App from './src/client/components/app';
import * as serviceWorker from './src/serviceWorker';
import { history } from "./src/index";

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>, document.getElementById('root'));
serviceWorker.unregister();