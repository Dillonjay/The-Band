
// Going to test action creators here as well. Good idea. I think so. 

import reducers from '../reducers/index';
import { selectSong } from '../actions/select_song_action';
import { addSong } from '../actions/song_actions';


test('SELECT_SONG', () => {
  let state;
   state = reducers({songs:[{artist:'JAY Z',genre:'rap',title:'big Pimpin'}],activeSong:null,data:null}, selectSong({artist:'JAY Z',genre:'rap',title:'big Pimpin'}));
   expect(state).toEqual({songs:[{artist:'JAY Z',genre:'rap',title:'big Pimpin'}],activeSong:{artist:'JAY Z',genre:'rap',title:'big Pimpin'},data:null});
});

test('ADD_SONG', () => {
  let state;
  state = reducers({songs:[{artist:'JAY Z',genre:'rap',title:'big Pimpin'}],activeSong:null,data:null}, addSong({title:'saaahdude',artist:'dillon',genre:'rap'}));
  expect(state).toEqual({songs:[{artist:'JAY Z',genre:'rap',title:'big Pimpin'},{title:'saaahdude',artist:'dillon',genre:'rap'}],activeSong:null,data:null});
});
