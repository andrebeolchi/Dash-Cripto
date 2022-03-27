import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CoinContext from './context/CoinContext';

ReactDOM.render(
  <BrowserRouter>
    <CoinContext>
      <App />
    </CoinContext>
  </BrowserRouter>,
  document.getElementById('root')
);