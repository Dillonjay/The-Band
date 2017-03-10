import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Link, Match } from 'react-router';
import { Provider } from 'react-redux'
import store from './store'
import SongList from './containers/songs_list';
import SongDetails from './containers/song_details';



	const App = React.createClass({
	  render () {
	    return (
	    	<BrowserRouter>
	    	<Provider store={store}>
	          <div className='app'>
	            <Match exactly pattern='/' component={SongList} />
	          </div>
	          </Provider>
	      </BrowserRouter>
	    )
	  }
	})

	 render(<App />,document.getElementById('app'))
