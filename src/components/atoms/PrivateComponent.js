/** @jsx jsx */

import { jsx, Box } from 'theme-ui'
import { firebase } from '@firebase/app'
import { Component } from 'react'
import Icon from './Icon'

export default class PrivateComponent extends Component {
	state = {
		user: null,
	}

	componentDidMount() {
		this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setUser(user)
			}
		})
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	setUser = user => {
		this.setState({
			user: user
				? { email: user.email, avatar: user.photoURL, name: user.displayName }
				: null,
		})
	}

	renderPrivateContent() {
		const authenticatedUsers = ['liferay.com']
		const currentUser = this.state.user

		const isUserAuthenticated =
			currentUser &&
			authenticatedUsers.some(user => {
				return currentUser.email.includes(user)
			})

		if (isUserAuthenticated) {
			return this.props.children
		}

		return (
			// login prompt
			<Box {...this.props} sx={{ display: 'inline' }}>
				<Icon name="lock" sx={{ height: '1em', width: '1em' }} />
			</Box>
		)
	}

	render() {
		// private content
		return this.renderPrivateContent()
	}
}
