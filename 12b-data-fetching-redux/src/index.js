import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './reducers';

import thunkMiddleware from 'redux-thunk';


// create store and use redux dev tool middleware as browser extension
// const store = createStore(
//   reducers,
//   applyMiddleware(thunkMiddleware),
// )
  //compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
// or create store without dev tools
// let store = createStore(reducers);

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


