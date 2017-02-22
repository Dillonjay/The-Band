import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import App from './app.js';
import reducers from './reducers/index.js';

const store = createStore(reducers); 


render(<App />, document.getElementById('app'));