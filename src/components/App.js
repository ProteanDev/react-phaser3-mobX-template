/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import logo from '../assets/logo.svg'
import '../styles/App.css'

import Game from './Game'

class App extends Component {
	render() {
		return (
			<div>
				<button
					style={{
						position: 'absolute'
					}}
					onClick={() => console.log('React Button Clicked')}
				>
          REACT UI
				</button>
				<Game />
			</div>
		)
	}
}

export default App
