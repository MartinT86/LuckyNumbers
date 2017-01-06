import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore } from 'redux'
import numbersApp from './reducers'

let store = createStore(numbersApp)


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
