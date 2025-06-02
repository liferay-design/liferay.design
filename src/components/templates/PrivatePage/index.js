/** @jsx jsx */

import { jsx, Box, Flex, Heading, Button } from 'theme-ui'
import { firebase } from '@firebase/app'
import { AuthContainer } from 'components/molecules'
import { Component } from 'react'

export default class PrivatePage extends Component {
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
		const authenticatedUsers = ['liferay.com', 'gs.liferay.com']
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
			<Flex
				sx={{
					height: '100vh',
					width: '100%',
					justifyContent: 'center',
					alignContent: 'center',
				}}
			>
				<Flex
					sx={{
						background: 'white',
						maxWidth: 540,
						width: '100%',
						m: '0 0 2rem',
						p: '2rem 2rem 2.4rem',
						alignItems: 'center',
					}}
				>
					<Box sx={{ textAlign: 'center' }}>
						<Heading
							sx={{ mb: '2rem', color: 'neutral3', letterSpacing: '0' }}
						>
							{this.props.message}
						</Heading>

						{/* <AuthContainer>
							<Button>Sign In</Button>{' '}
						</AuthContainer> */}
					</Box>
				</Flex>
			</Flex>
		)
	}

	render() {
		return <div>{this.renderPrivateContent()}</div>
	}
}
