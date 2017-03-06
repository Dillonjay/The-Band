export function addSong(song) {
	console.log('song to be added to state', song)
	return {
		type: "ADD_SONG",
		payload: song
	}
};