import React, { Component } from 'react'
import { Image, Segment } from 'semantic-ui-react'

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

		return <Segment>{this.props.message}</Segment>
	}

	render() {
		return (
			<div>
				{this.state.authLoaded ? (
					this.renderPrivateContent()
				) : (
					<Segment loading>
						<Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
					</Segment>
				)}
			</div>
		)
	}
}
