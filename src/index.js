import 'babel-polyfill';
import React from 'react';
import {Provider} from 'react-redux';
//import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
//import routes from './routes';
import './styles/styles.css'; // Webpack will run the associated loader and plug this into the page.
//require('./favicon.ico'); // Tell webpack to load favicon.ico
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './style.scss';
let arr1 = ['two', 'three'];
let arr2 = ['one', ...arr1, 'four', 'five'];
const store = configureStore();
render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
, document.getElementById('app'));
