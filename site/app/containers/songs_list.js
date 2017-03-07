import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectSong } from '../actions/index';
const { arrayOf, shape, string, func, isRequired } = React.PropTypes;

class SongList extends React.Component {
	render() {
		return (
			<ul>
				{this.showSongList()}
			</ul>
		)
	}
	showSongList(songs) {
		return this.props.songs.map((song,i) => {
			return (
					<li 
					key={i}
					onClick={() => this.props.selectSong(song)}
					>
						{song.title}
					</li>
				)
		})
	}
};

SongList.propTypes = {
	selectSong: func.isRequired,
	songs: arrayOf(shape({
		title: string,
		genre: string,
		artist: string
	}))
}

function mapStateToProps(state) {
	console.log('here is the state in side of song_list',state)
	return { 
		songs : state.songs 
	}; 
};

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ selectSong: selectSong }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SongList);