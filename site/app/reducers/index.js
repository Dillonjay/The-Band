import { combineReducers } from 'redux';
import songs from './songs_reducer';
import activeSongReducer from './active_song_reducer';
import dataReducer from './add_some_data_reducer'

const allReducers = combineReducers({
	songs: songs,
	activeSong: activeSongReducer,
	data: dataReducer
})

export default allReducers;