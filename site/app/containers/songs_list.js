import React from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import AddSong from './add_song'
import { connect } from 'react-redux';
import { selectSong } from '../actions/select_song_action';
import  bang from '../actions/bang.js'

class SongList extends React.Component {
	render() {
		return (
			<div>
				<AddSong />
				<ul>
					{this.showSongList()}
				</ul>
					<button onClick={this.props.bang}>Async call with redux boyyyy</button>
			</div>
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

const { arrayOf, shape, string, func, isRequired, array } = React.PropTypes;

SongList.propTypes = {
	selectSong: func.isRequired,
	bang: func.isRequired,
	songs: arrayOf(shape({
		title: string,
		genre: string,
		artist: string
	})),
	data: array
}

function mapStateToProps(state) {
	return { 
		songs: state.songs,
		data: state.data
	}; 
};

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ selectSong, bang }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SongList);


