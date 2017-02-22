import { combineReducers } from 'redux';
import songs from './songs_reducer';

const allReducers = combineReducers({
	songs : songs
})

module.exports = allReducers;