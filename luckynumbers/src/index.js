import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import App from './App';
// import './index.css';

import numbersApp from './reducers/index'
import App from './components/App'

let store = createStore(numbersApp)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
