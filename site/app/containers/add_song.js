import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addSong } from '../actions/add_song_action.js';


class AddSong extends React.Component {
	render() {
		return (
			<div>
				<h2>{ this.props.name }</h2>
				<form onSubmit={(e) => {
					e.preventDefault()
					this.props.addSong({title: "saaahdude", artist:"dillon", genre:"rap"})
				}}>
					<input></input>
					<button type="submit">Add</button>
				</form>
			</div>
		)
	}
};

AddSong.propTypes = {
	name: React.PropTypes.string,
	addSong: React.PropTypes.func
}

AddSong.defaultProps = {
	name: 'Dillon'
}

function mapStateToProps(state) {
	return { 
		songs : state.songs 
	}; 
};

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ addSong: addSong }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(AddSong);