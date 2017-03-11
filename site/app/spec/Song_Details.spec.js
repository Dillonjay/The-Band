import react from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import SongDetails from '../containers/song_details';

test('Song Details Snapshot Test', () => {
	const component = shallow(<SongDetails />);
	const tree = shallowToJson(component);
	expect(tree).toMatchSnapshot();
})
