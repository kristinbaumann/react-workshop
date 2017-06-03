import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';


// create store and use redux dev tool middleware as browser extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers, 
  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('mount')
);


