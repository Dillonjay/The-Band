
export default function(state=[{artist: "JAY Z", genre: "rap", title:"big Pimpin"}], action) {
	switch(action.type) {
		case 'ADD_SONG':
			state = [...state, action.payload];
			break;
		case 'DELETE_SONG':
			state = state.filter(song => song !== action.payload);
			break;
	}
	return state;
}