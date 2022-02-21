import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/views/App';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers/index'


const createStoreMiddleware = applyMiddleware( promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render(
  <Provider
    store={createStoreMiddleware( Reducer,
        window.REDUX_DEVTOOLS_EXTENSION && 
        window.REDUX_DEVTOOLS_EXTENSION()
      )}
  >
    <App/>
  </Provider>,
  document.getElementById('root')
);
