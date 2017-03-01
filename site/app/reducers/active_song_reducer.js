export default function(state=null, action) {
	console.log('here is the reducer listing in the active song reducer', action)
	switch(action.type) {
		case 'SONG_SELECTED':
			return action.payload;
			break;
	}
	return state;
}