import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import  logger from 'redux-logger';
import App from './components/app';
import reducers from './reducers/index';

const middleware = applyMiddleware(logger());
const store = createStore(reducers, compose(
	middleware,
	typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
)); 



render(
	<Provider store={ store }>
		<App />
	</Provider>, 
	document.getElementById('app')
);