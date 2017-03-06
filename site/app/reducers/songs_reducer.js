export default function(state=[{artist: "JAY Z", genre: "rap", title:"big Pimpin"}], action) {
	console.log('we are here in the songs_reducer... State', state)
	switch(action.type) {
		case 'ADD_SONG':
			state = [...state, action.payload];
			break;
	}
	return state;
}