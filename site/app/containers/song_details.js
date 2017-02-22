import React from 'react';
import { connect } from 'react-redux';



class SongDetails extends React.Component {
	render() {
		if(!this.props.song) {
			return (
				<div></div>
			)
		}
		return (
			<div>
				<h1>{this.props.song.title}</h1>	
				<h2>{this.props.song.artist}</h2>
				<h3>{this.props.song.genre}</h3>
			</div>
		)
	}
};


function mapStateToProps(state) {
	return { 
		song: state.activeSong
	}; 
};

export default connect(mapStateToProps)(SongDetails);