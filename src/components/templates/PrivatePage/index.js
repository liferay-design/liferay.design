import React, { Component } from 'react'
import { Media, Paper } from 'react-md'

export default class PrivatePage extends Component {
	state = {
		authLoaded: false,
	}

	componentDidMount() {
		const { auth } = require('utils')

		this.auth = auth

		this.setState({ authLoaded: true })
	}

	renderPrivateContent() {
		if (this.auth.currentUser) {
			return this.props.children
		}

		return <Paper>{this.props.message}</Paper>
	}

	render() {
		return (
			<div>
				{this.state.authLoaded ? (
					this.renderPrivateContent()
				) : (
					<Paper loading>
						<Media src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
					</Paper>
				)}
			</div>
		)
	}
}
