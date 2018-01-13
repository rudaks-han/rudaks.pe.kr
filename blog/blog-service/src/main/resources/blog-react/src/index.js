import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
//import routes from './routes';
import promise from 'redux-promise';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import './index.css';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(
    promise,
    loadingBarMiddleware()
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <App/>
  </Provider>
  , document.querySelector('#root'));
