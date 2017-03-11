export default function(state=null, action) {
	switch(action.type) {
		case 'SELECT_SONG':
			state = action.payload;
			break;
	}
	return state;
}