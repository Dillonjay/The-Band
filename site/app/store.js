/* global window:false */
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const middleware = applyMiddleware(thunk);
const store = createStore(reducers, compose(
    middleware,
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
)); 

export default store;
