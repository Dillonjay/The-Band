import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addSong } from '../actions/song_actions';


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
}

const { string, func } = React.PropTypes;

AddSong.propTypes = {
    name: string.isRequired,
    addSong: func.isRequired
}

AddSong.defaultProps = {
    name: 'Dillon'
}

function mapStateToProps(state) {
    return { 
        songs : state.songs 
    }; 
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ addSong }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(AddSong);

