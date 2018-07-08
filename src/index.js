/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './style.scss';
const store = configureStore();
render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
, document.getElementById('app'));
