import React, { Component } from 'react'
import { Media, Paper, Card } from 'react-md'
import { AuthContainer } from 'components/molecules'

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

		return (
			<Card>
				<div>{this.props.message}</div>
				<AuthContainer />
			</Card>
		)
	}

	render() {
		return (
			<div>
				{this.state.authLoaded ? (
					this.renderPrivateContent()
				) : (
					<Paper>
						<Media src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
					</Paper>
				)}
			</div>
		)
	}
}
