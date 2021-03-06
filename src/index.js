import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './screens/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'app',
  storage
}

const persisted = persistReducer(persistConfig, reducer);

const store = createStore(persisted, compose(
  applyMiddleware(promiseMiddleware, ReduxThunk),
))

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store} >
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  , document.getElementById('app')
);