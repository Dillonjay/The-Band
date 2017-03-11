import { ADD_SONG } from './actions';

export function addSong(song) {
	return {
		type: ADD_SONG,
		payload: song
	}
};

