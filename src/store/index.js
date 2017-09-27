'use strict';

const isDebug = process.env.NODE_ENV === 'development';

import { createStore, applyMiddleware, compose } from 'redux';
import * as PersistStorage from 'redux-storage';

// 存储引擎
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
const engine = createEngine('tougudashi');

// 中间件
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger'
const persistStorageEngine = PersistStorage.createMiddleware(engine);

// reducers
import reducers from '../reducers';
const reducer = PersistStorage.reducer(reducers);

// 中间件
let middlewares = [
	thunkMiddleware,
  promiseMiddleware,
  persistStorageEngine
];

// DEV
if (isDebug) {
  const logger = createLogger({
    duration: true,
    collapsed: true
  });
  middlewares.push(logger);
}

// store
const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
);

if (isDebug) {
  window.store = store;
}

export default store;
