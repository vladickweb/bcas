// import logo from './logo.svg';
import './App.css'
import React, { Component } from 'react'
import Routes from './components/Routes/Routes'
import Navigation from './components/layout/Navigation'

export default class App extends Component {
	constructor() {
		super()
		this.state = {
			currentUserData: null,
			currentUserEmail: null
		}
	}

	updateUserData = user =>
		this.setState({
			...this.state,
			currentUserData: user
		})

	updateUserEmail = user => {
		this.setState({
			...this.state,
			currentUserEmail: user
		})
	}

	render() {
		return (
			<div>
				<Navigation />
				<Routes
					currentUserData={(this.state.currentUserData)}
					currentUserEmail={(this.state.currentUserEmail)}
					updateUserData={this.updateUserData}
					updateUserEmail={this.updateUserEmail}
				/>
			</div>
		)
	}
}
