import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {SettingsProvider} from './states/SettingsContext.js'

ReactDOM.render(
  <React.StrictMode>
    <SettingsProvider>
    <App />
    </SettingsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
