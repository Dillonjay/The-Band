/* global console:false */
/* eslint no-console: "off" */

import axios from 'axios';

function addSomeData(data) {
	return {
		type: 'ADD_DATA',
		payload: data
	};
}

export default function bang() {
	return function(dispatch) {
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then((res) => {
			dispatch(addSomeData(res.data))
		})
		.catch((err) => console.error(err))
	};
}



