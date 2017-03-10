import React from 'react';
import SongList from '../containers/songs_list';
import SongDetails from '../containers/song_details';
import AddSong from '../containers/add_song';

const App = () => (
	<div>
		<AddSong />
		<h1>Names: </h1>
		<h1>Songs: </h1>
		<SongList />
		<hr/>
	</div>
)

export default App;