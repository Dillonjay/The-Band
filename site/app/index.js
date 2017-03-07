import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import  logger from 'redux-logger';
import App from './components/app';
import reducers from './reducers/index';

const middleware = applyMiddleware(logger());
const store = createStore(reducers, middleware); 

console.log('do YOu re render bruh??', store.getState())


render(
	<Provider store={ store }>
		<App />
	</Provider>, 
	document.getElementById('app')
);