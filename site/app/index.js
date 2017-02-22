import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app.js';
import reducers from './reducers/index.js';

const store = createStore(reducers); 


render(
	<Provider store={ store }>
		<App />
	</Provider>, 
	document.getElementById('app')
);