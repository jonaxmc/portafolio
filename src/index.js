import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../src/styles/styles.scss'
import { PortfolioApp } from './PortfolioApp';
import { store } from './store/store';


ReactDOM.render(
  <Provider store={store}>
    <PortfolioApp/>
  </Provider>,
  document.getElementById('root')
);

