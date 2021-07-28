import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import App from './routes/App';
import initalState from '../initalState.json';

console.log(initalState);
const store = createStore(reducer, initalState, applyMiddleware(thunk));

console.log(store);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
