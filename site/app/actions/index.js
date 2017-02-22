export function selectSong(song) {
	console.log('song clicked:', song.title)
	return {
		type: "Song_Selected",
		payload: song
	}
};