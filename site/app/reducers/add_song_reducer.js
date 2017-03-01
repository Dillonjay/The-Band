export default function(state=null, action) {
	console.log('action here in the add song reducer', action)
	switch(action.type) {
		case 'ADD_SONG':
			console.log('stateeee',state)
			console.log('payload dude', action.payload)
			return action.payload;
			break;
	}
	return state;
}