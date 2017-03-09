import { SELECT_SONG } from './actions';

export function selectSong(song) {
	return {
		type: SELECT_SONG,
		payload: song
	}
};