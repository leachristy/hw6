import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import "./styles.css";

import { HashRouter} from "react-router-dom";

ReactDOM.render(
  <HashRouter hashType = "hashbang">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);
