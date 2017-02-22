import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SongList extends React.Component {
	render() {
		return (
			<ul>
				{this.showSongList(this.props.songs)}
			</ul>
		)
	}
	showSongList(songs) {
		return songs.map(function(song,i) {
			return (
					<li key={i}>{song.title}</li>
				)
		})
	}
};

function mapStateToProps(state) {
	return { 
		songs : state.songs 
	}; 
};

export default connect(mapStateToProps)(SongList);