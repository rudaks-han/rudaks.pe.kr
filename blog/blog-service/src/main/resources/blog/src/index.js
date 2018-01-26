import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
//import routes from './routes';
import promise from 'redux-promise';
import './index.css';
import App from './App';
import {LOGIN_FLAG} from "./actions/types";

const createStoreWithMiddleware = applyMiddleware(
    promise
)(createStore);

const store = createStoreWithMiddleware(reducers);

//const uid = Cookies.get('uid');
const uid = localStorage.getItem('uid');

if (uid)
{
    store.dispatch({
        type: LOGIN_FLAG,
        payload: true
    });
}


ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>
  , document.querySelector('#root'));
