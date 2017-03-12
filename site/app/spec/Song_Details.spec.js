import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../store';
import { Unwrapped as UnwrappedSongDetails } from '../containers/song_details';

test('SongDetails Snapshot Test', () => {
	const component = shallow(<UnwrappedSongDetails song={ {title: 'Bird', artist: 'Anderson Paak', genre: 'hiphop'} } /> );
	const tree = shallowToJson(component);
	expect(tree).toMatchSnapshot();
})
