import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';
import reducers from './reducers/index';

const store = createStore(reducers); 

console.log('some sort of state my friend', store.getState())


render(
	<Provider store={ store }>
		<App />
	</Provider>, 
	document.getElementById('app')
);