import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../store';
import { Unwrapped as UnwrappedSongDetails } from '../containers/songs_list';


test('SongList Snapshot Test', () => {
	const component = shallow(<UnwrappedSongList songs={ [
		{ title: 'Bird', artist: 'Anderson Paak', genre: 'hiphop' },
		{ title: 'Pimpin', artist: 'Jay-Z', genre: 'hiphop'}
		] } /> );
	const tree = shallowToJson(component);
	expect(tree).toMatchSnapshot();
})
