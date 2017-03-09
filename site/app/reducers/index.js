import { combineReducers } from 'redux';
import songs from './songs_reducer';
import activeSongReducer from './active_song_reducer';

const allReducers = combineReducers({
	songs: songs,
	activeSong: activeSongReducer
})

export default allReducers;