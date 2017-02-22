import React from 'react';
import SongList from '../containers/songs_list.js';
import SongDetails from '../containers/song_details.js';

const App = () => (
	<div>
		<h1>Names: </h1>
		<h1>Songs: </h1>
		<SongList />
		<hr/>
		<SongDetails />
	</div>
)

export default App;