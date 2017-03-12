import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../store';
import SongList, { Unwrapped as UnwrappedSongList } from '../containers/songs_list';
import { addSong } from '../actions/song_actions';
import bang from '../actions/bang'

test('SongList Snapshot Test', () => {
	const component = shallow(<UnwrappedSongList songs={ [
		{ title: 'Bird', artist: 'Anderson Paak', genre: 'hiphop' },
		{ title: 'Pimpin', artist: 'Jay-Z', genre: 'hiphop'}
		] } /> );
	const tree = shallowToJson(component);
	expect(tree).toMatchSnapshot();
})

test('Should Display New Song', () => {
	const song = {title: 'Bird', artist: 'Anderson Paak', genre: 'hiphop'};
	const component = render(
		<Provider store={store}>
			<SongList /> 
		</Provider>
	)

    expect(component.find('li').length).toEqual(1)
    expect(component.text()).not.toContain('Bird')
    
    store.dispatch(addSong(song))

    const component2 = render(
		<Provider store={store}>
			<SongList /> 
		</Provider>
	)
    expect(component2.find('li').length).toEqual(2)
	expect(component2.text()).toContain('Bird')
})



