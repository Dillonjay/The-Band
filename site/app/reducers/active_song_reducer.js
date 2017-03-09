export default function(state=null, action) {
	console.log('yolodolo', action)
	switch(action.type) {
		case 'SELECT_SONG':
			return action.payload;
			break;
	}
	return state;
}