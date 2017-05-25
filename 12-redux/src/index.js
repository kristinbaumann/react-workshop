import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducers from './reducers';


// create store and use redux dev tool middleware as browser extension
const store = createStore(
  reducers,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
)
// or create store without dev tools
// let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('mount')
);


