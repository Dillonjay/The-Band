import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../store';
import { Unwrapped as UnwrappedSongDetails } from '../containers/song_details';
import selectSong from '../actions/select_song_action';

test('SongDetails Snapshot Test With Song', () => {
	const component = shallow(<UnwrappedSongDetails song={ {title: 'Bird', artist: 'Anderson Paak', genre: 'hiphop'} } /> );
	const tree = shallowToJson(component);
	expect(tree).toMatchSnapshot();
})

test('SongDetails Snapshot Test No Song', () => {
	const component = shallow( <UnwrappedSongDetails /> );
	const tree = shallowToJson( component );
	expect(tree).toMatchSnapshot();
})

// test('Should Display Selected Song Details', () => {
// 	const song = {title: 'Bird', artist: 'Anderson Paak', genre: 'hiphop'}
// })