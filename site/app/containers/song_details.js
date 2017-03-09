import React from 'react';
import { connect } from 'react-redux';



class SongDetails extends React.Component {
	render() {
		if(!this.props.song) {
			return (
				<div></div>
			)
		}
		const { title, artist, genre } = this.props.song;
		console.log('prop city ',this.props)
		return (
			<div>
				<h1>{ title }</h1>	
				<h2>{ artist }</h2>
				<h3>{ genre }</h3>
			</div>
		)
	}
};

const { shape, string } = React.PropTypes;

SongDetails.propTypes = {
	song: shape({
		title: string,
		artist: string,
		genre: string
	})
}

function mapStateToProps(state) {
	return { 
		song: state.activeSong
	}; 
};

export default connect(mapStateToProps)(SongDetails);