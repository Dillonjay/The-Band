import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../store';
import SongDetails, { Unwrapped as UnwrappedSongDetails } from '../containers/song_details';
import { selectSong } from '../actions/select_song_action';

test('SongDetails Snapshot Test With Song', () => {
	const component = shallow(<UnwrappedSongDetails song={ {title: 'Bird', artist: 'Anderson Paak', genre: 'hiphop'} } /> );
	const tree = shallowToJson(component);
	expect(tree).toMatchSnapshot();
})

test('Should Display Selected Song Details', () => {
	const song = {title: 'Bird', artist: 'Anderson Paak', genre: 'hiphop'};
	store.dispatch(selectSong(song));
	const component = render(
		<Provider store={ store }>
			<SongDetails />	
		</Provider>
	)
	expect(component.find('h1').text()).toEqual('Bird')
})

test('Test test', () => {
	const component = shallow(<UnwrappedSongDetails song={ {title: 'Bird', artist: 'Anderson Paak', genre: 'hiphop'} } /> );
	console.log(component)
})