import React from 'react';
import { bindActionCreators } from 'redux';
import AddSong from './add_song'
import { connect } from 'react-redux';
import { selectSong } from '../actions/select_song_action';
import { Link } from 'react-router';
import  bang from '../actions/bang.js'

class SongList extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.goToDetails.bind(this)}>Async call with redux boyyyy</button>
                <AddSong />
                <ul>
                    {this.showSongList()}
                </ul>
                    <button onClick={this.props.bang}>Async call with redux boyyyy</button>
            </div>
        )
    }
    goToDetails (event) {
        event.preventDefault()
        this.context.router.transitionTo('/hello')
     }
    showSongList() {
        return this.props.songs.map((song,i) => {
            return (
                    <li 
                    key={i}
                    onClick={() => this.props.selectSong(song)}
                    >   
                        <Link to='hello'>
                            {song.title}
                        </Link>
                    </li>
                )
        })
    }
}
const { arrayOf, shape, string, func, array, object } = React.PropTypes;

SongList.contextTypes = {
    router: object
}

SongList.propTypes = {
    selectSong: func.isRequired,
    bang: func.isRequired,
    songs: arrayOf(shape({
        title: string,
        genre: string,
        artist: string
    })),
    data: array.isRequired
}

function mapStateToProps(state) {
    return { 
        songs: state.songs,
        data: state.data
    }; 
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectSong, bang }, dispatch)
}

export const Unwrapped = SongList;

export default connect(mapStateToProps, matchDispatchToProps)(SongList);


