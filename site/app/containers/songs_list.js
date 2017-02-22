import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SongList extends React.Component {
	render() {
		return (
			<ul>
				<li>blah</li>
				<li>blah</li>
				<li>blah</li>
			</ul>
		)
	}
};

function mapStateToProps(state) {
	return { 
		songs : state.songs 
	};
};

export default connect(mapStateToProps)(SongList);