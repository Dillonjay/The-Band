export default function(state=null, action) {
	switch(action.type) {
		case 'SELECT_SONG':
			return action.payload;
			break;
	}
	return state;
}