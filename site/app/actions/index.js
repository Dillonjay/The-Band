export function selectSong(song) {
	console.log('song clicked:', song.title)
	return {
		type: "SONG_SELECTED",
		payload: song
	}
};